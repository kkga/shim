import fs from "node:fs";
import path from "node:path";
import { findProjectRoot } from "./project.js";

export type PackageManager = "pnpm" | "yarn" | "npm" | "bun";

export function detectPackageManager(): PackageManager {
  const root = findProjectRoot();
  if (fs.existsSync(path.join(root, "bun.lockb"))) {
    return "bun";
  }
  if (fs.existsSync(path.join(root, "pnpm-lock.yaml"))) {
    return "pnpm";
  }
  if (fs.existsSync(path.join(root, "yarn.lock"))) {
    return "yarn";
  }
  if (fs.existsSync(path.join(root, "package-lock.json"))) {
    return "npm";
  }
  // Default to pnpm if nothing is found
  return "pnpm";
}
