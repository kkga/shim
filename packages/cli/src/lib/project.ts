import fs from "node:fs";
import path from "node:path";

export function findProjectRoot(): string {
  let currentDir = process.cwd();

  while (currentDir !== path.dirname(currentDir)) {
    if (fs.existsSync(path.join(currentDir, "package.json"))) {
      return currentDir;
    }
    currentDir = path.dirname(currentDir);
  }

  return process.cwd();
}

export function isTailwindInstalled(): boolean {
  const root = findProjectRoot();
  const packageJsonPath = path.join(root, "package.json");

  if (!fs.existsSync(packageJsonPath)) {
    return false;
  }

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
  const dependencies = packageJson.dependencies || {};
  const devDependencies = packageJson.devDependencies || {};

  return "tailwindcss" in dependencies || "tailwindcss" in devDependencies;
}
