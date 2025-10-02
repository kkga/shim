import fs from "node:fs";
import { join } from "node:path";
import { getFrontmatter } from "next-mdx-remote-client/utils";
import type { ComponentMetadata } from "./types";

export function readMdxFile<T extends Record<string, unknown>>(
  filePath: string
) {
  if (!fs.existsSync(filePath)) {
    return null;
  }
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return getFrontmatter<T>(rawContent);
}

export function slugify(str: string) {
  return str
    .trim()
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .toLowerCase();
}

export function toKebabCase(componentName: ComponentMetadata["name"]): string {
  return componentName.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

export function getFileSource(filePath: string) {
  let resolvedPath = join(process.cwd(), filePath);

  if (!fs.existsSync(resolvedPath)) {
    throw new Error(`File not found: ${resolvedPath}`);
  }

  return fs.readFileSync(resolvedPath, "utf-8").trim();
}
