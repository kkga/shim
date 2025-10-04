import fs from "node:fs";
import path from "node:path";
import { findProjectRoot } from "./project.js";

export function ensureDirectoryExists(dirPath: string): void {
  fs.mkdirSync(dirPath, { recursive: true });
}

export function writeFile(
  filePath: string,
  content: string,
  force = false
): void {
  if (!fs.existsSync(filePath) || force) {
    fs.writeFileSync(filePath, content, "utf-8");
    process.stdout.write(`Created ${filePath}\n`);
  }
}

export function overwriteFile(filePath: string, content: string): void {
  fs.writeFileSync(filePath, content, "utf-8");
  process.stdout.write(`Overwrote: ${filePath}\n`);
}

export function fileExists(filePath: string): boolean {
  return fs.existsSync(filePath);
}

export function resolveOutputPath(
  configPath: string | undefined,
  defaultPath: string
): string {
  const projectRoot = findProjectRoot();
  const outputDir = configPath || defaultPath;
  return path.resolve(projectRoot, outputDir);
}
