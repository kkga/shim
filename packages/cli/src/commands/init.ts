import path from "node:path";
import { fetchCSS, fetchUtilities } from "../lib/api.js";
import { type ShimConfig, saveConfig } from "../lib/config.js";
import { ensureDirectoryExists, writeFile } from "../lib/files.js";
import { findProjectRoot } from "../lib/project.js";

interface InitOptions {
  force?: boolean;
  componentsPath?: string;
  utilsPath?: string;
  cssPath?: string;
}

async function installUtilities(
  config: ShimConfig,
  force: boolean
): Promise<void> {
  const projectRoot = findProjectRoot();
  const utilsPath = config.utilsPath || "utils";
  const utilsDir = path.resolve(projectRoot, utilsPath);

  ensureDirectoryExists(utilsDir);

  const { files } = await fetchUtilities();

  for (const file of files) {
    const filePath = path.join(utilsDir, file.path);
    writeFile(filePath, file.content, force);
  }
}

async function installCSS(config: ShimConfig, force: boolean): Promise<void> {
  const projectRoot = findProjectRoot();
  const cssPath = config.cssPath || "styles";
  const cssDir = path.resolve(projectRoot, cssPath);

  ensureDirectoryExists(cssDir);

  const { files } = await fetchCSS();

  for (const file of files) {
    const filePath = path.join(cssDir, file.path);
    writeFile(filePath, file.content, force);
  }
}

export async function initCommand(options: InitOptions): Promise<void> {
  const config: ShimConfig = {
    componentsPath: options.componentsPath || "components",
    utilsPath: options.utilsPath || "utils",
    cssPath: options.cssPath || "styles",
  };

  try {
    saveConfig(config);
    await installUtilities(config, Boolean(options.force));
    await installCSS(config, Boolean(options.force));
  } catch (err) {
    process.stderr.write(
      `Error during initialization: ${err instanceof Error ? err.message : String(err)}\n`
    );
    process.exit(1);
  }
}
