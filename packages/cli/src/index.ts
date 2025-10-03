#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { Command } from "commander";
import fetch from "node-fetch";

import packageJson from "../package.json" with { type: "json" };

const API_URL =
  process.env.SHIM_API_URL || "https://shim.kkga.me/api/components";

interface ApiResponse {
  files: Array<{
    path: string;
    content: string;
  }>;
  dependencies?: string[];
}

interface ShimConfig {
  componentsPath?: string;
}

function loadConfig(): ShimConfig {
  const projectRoot = findProjectRoot();
  const configPaths = ["shim.config.json", ".shim.config.json"];

  for (const configPath of configPaths) {
    const fullPath = path.resolve(projectRoot, configPath);

    if (fs.existsSync(fullPath)) {
      try {
        const content = fs.readFileSync(fullPath, "utf-8");
        return JSON.parse(content) as ShimConfig;
      } catch (err) {
        process.stderr.write(
          `⚠️ Error reading config file ${configPath}: ${err instanceof Error ? err.message : String(err)}\n`
        );
      }
    }
  }

  return {};
}

function findProjectRoot(): string {
  let currentDir = process.cwd();

  while (currentDir !== path.dirname(currentDir)) {
    const packageJsonPath = path.join(currentDir, "package.json");
    if (fs.existsSync(packageJsonPath)) {
      return currentDir;
    }
    currentDir = path.dirname(currentDir);
  }

  // If no package.json found, use current working directory as fallback
  return process.cwd();
}

const program = new Command();
program.version(packageJson.version || "1.0.0").name("shim");

program
  .command("add <component>")
  .description(
    "Download a component into your project, including its dependencies"
  )
  .option("-p, --path <dir>", "components installation path")
  .option("-o, --overwrite", "overwrite existing files")
  .action(async (component, options) => {
    const config = loadConfig();
    const installedComponents = new Set<string>();

    // Determine output directory from CLI option, config file, or default
    const outputDir = options.path || config.componentsPath || "components";

    async function fetchAndInstall(componentName: string) {
      if (installedComponents.has(componentName)) {
        logSkip(componentName);
        return;
      }

      try {
        const { files, dependencies } = await fetchComponentData(componentName);
        validateFiles(componentName, files);

        const outDir = prepareOutputDirectory(outputDir);
        writeFiles(outDir, files);

        installedComponents.add(componentName);

        if (dependencies && dependencies.length > 0) {
          await installDependencies(componentName, dependencies);
        }

        logSuccess(componentName);
      } catch (err) {
        logError(componentName, err);
      }
    }

    async function fetchComponentData(componentName: string) {
      const url = `${API_URL}/${componentName}`;
      const res = await fetch(url);

      if (!res.ok) {
        process.stderr.write(`❌ Component "${componentName}" not found\n`);
        process.exit(1);
      }

      return (await res.json()) as ApiResponse;
    }

    function validateFiles(componentName: string, files: ApiResponse["files"]) {
      if (!files || files.length === 0) {
        process.stderr.write(
          `❌ No files found for component "${componentName}"\n`
        );
        process.exit(1);
      }
    }

    function prepareOutputDirectory(dir: string) {
      const projectRoot = findProjectRoot();
      return path.resolve(projectRoot, dir);
    }

    function checkForExistingFiles(
      outDir: string,
      files: ApiResponse["files"]
    ): string[] {
      const existingFiles: string[] = [];

      for (const file of files) {
        const filePath = path.join(outDir, file.path);
        if (fs.existsSync(filePath)) {
          existingFiles.push(filePath);
        }
      }

      return existingFiles;
    }

    function writeFile(outDir: string, file: ApiResponse["files"][0]) {
      const filePath = path.join(outDir, file.path);
      const fileDir = path.dirname(filePath);
      const fileExists = fs.existsSync(filePath);

      fs.mkdirSync(fileDir, { recursive: true });
      fs.writeFileSync(filePath, file.content, "utf-8");

      if (options.overwrite && fileExists) {
        process.stdout.write(`⚠️ Overwrote file: ${filePath}\n`);
      } else {
        process.stdout.write(`✅ Wrote file: ${filePath}\n`);
      }
    }

    function writeFiles(outDir: string, files: ApiResponse["files"]) {
      // Check for existing files first if overwrite is not enabled
      if (!options.overwrite) {
        const existingFiles = checkForExistingFiles(outDir, files);

        if (existingFiles.length > 0) {
          process.stderr.write("❌ The following files already exist:\n");
          for (const file of existingFiles) {
            process.stderr.write(`   ${file}\n`);
          }
          process.stderr.write(
            "Use --overwrite to force overwrite existing files\n"
          );
          process.exit(1);
        }
      }

      // Write the files
      for (const file of files) {
        writeFile(outDir, file);
      }
    }

    async function installDependencies(
      componentName: string,
      dependencies: string[]
    ) {
      process.stdout.write(
        `🔄 Installing dependencies for "${componentName}": ${dependencies.join(", ")}\n`
      );
      for (const dependency of dependencies) {
        await fetchAndInstall(dependency);
      }
    }

    function logSuccess(componentName: string) {
      process.stdout.write(`✅ Successfully installed "${componentName}"\n`);
    }

    function logError(componentName: string, err: unknown) {
      process.stderr.write(
        `❌ Error fetching component "${componentName}": ${err instanceof Error ? err.message : String(err)}\n`
      );
    }

    function logSkip(componentName: string) {
      process.stdout.write(
        `⚠️ Skipping already installed component: "${componentName}"\n`
      );
    }

    // Start the installation process
    await fetchAndInstall(component);
  });

program
  .command("init")
  .description("Create a sample configuration file")
  .option("-f, --force", "overwrite existing config file")
  .action((options) => {
    const configPath = path.resolve(process.cwd(), "shim.config.json");

    if (fs.existsSync(configPath) && !options.force) {
      process.stderr.write(
        `❌ Configuration file already exists at ${configPath}\n`
      );
      process.stderr.write("Use --force to overwrite\n");
      process.exit(1);
    }

    const sampleConfig: ShimConfig = {
      componentsPath: "components",
    };

    try {
      fs.writeFileSync(
        configPath,
        JSON.stringify(sampleConfig, null, 2),
        "utf-8"
      );
      process.stdout.write(`✅ Created configuration file: ${configPath}\n`);
      process.stdout.write(
        "You can now customize the components path in this file.\n"
      );
    } catch (err) {
      process.stderr.write(
        `❌ Error creating config file: ${err instanceof Error ? err.message : String(err)}\n`
      );
      process.exit(1);
    }
  });

// Parse CLI arguments
program.parse(process.argv);
