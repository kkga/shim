import fs from "node:fs";
import matter from "gray-matter";
import type { ComponentMetadata } from "@/app/_lib/types";

export function readMdxFile<T extends Record<string, unknown>>(
  filePath: string
) {
  if (!fs.existsSync(filePath)) {
    return null;
  }
  let rawContent = fs.readFileSync(filePath, "utf-8");
  let { data, content } = matter(rawContent);

  return {
    frontmatter: data as T,
    strippedSource: content,
  };
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
