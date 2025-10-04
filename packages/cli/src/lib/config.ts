import fs from "node:fs";
import path from "node:path";
import { findProjectRoot } from "./project.js";

export interface ShimConfig {
  componentsPath?: string;
  utilsPath?: string;
  cssPath?: string;
}

export function loadConfig(): ShimConfig {
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
          `Error reading config file ${configPath}: ${err instanceof Error ? err.message : String(err)}\n`
        );
      }
    }
  }

  return {};
}

export function saveConfig(config: ShimConfig): void {
  const projectRoot = findProjectRoot();
  const configPath = path.resolve(projectRoot, "shim.config.json");

  fs.writeFileSync(configPath, JSON.stringify(config, null, 2), "utf-8");
  process.stdout.write(`Created ${configPath}\n`);
}
