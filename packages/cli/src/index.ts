#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { Command } from "commander";
import fetch from "node-fetch";

import packageJson from "../package.json" with { type: "json" };

// const API_URL = process.env.API_URL || "https://shim.kkga.me/api/components";
const API_URL = process.env.API_URL || "http://localhost:3000/api/components";
interface ApiResponse {
  files: Array<{
    path: string;
    content: string;
  }>;
  dependencies?: string[];
}

const program = new Command();
program.version(packageJson.version || "1.0.0");

program
  .command("add <component>")
  .description(
    "Download a component into your project, including its dependencies"
  )
  .option("-o, --out <dir>", "output directory", "components")
  .action(async (component, options) => {
    const installedComponents = new Set<string>();

    async function fetchAndInstall(componentName: string) {
      if (installedComponents.has(componentName)) {
        logSkip(componentName);
        return;
      }

      try {
        const { files, dependencies } = await fetchComponentData(componentName);
        validateFiles(componentName, files);

        const outDir = prepareOutputDirectory(options.out);
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

    function prepareOutputDirectory(outputDir: string) {
      return path.resolve(process.cwd(), outputDir);
    }

    function writeFiles(outDir: string, files: ApiResponse["files"]) {
      for (const file of files) {
        const filePath = path.join(outDir, file.path);
        const fileDir = path.dirname(filePath);

        fs.mkdirSync(fileDir, { recursive: true });
        fs.writeFileSync(filePath, file.content, "utf-8");
        process.stdout.write(`✅ Wrote file: ${filePath}\n`);
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

// Parse CLI arguments
program.parse(process.argv);
