import fs from "node:fs";
import matter from "gray-matter";

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

export function toKebabCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

export function toTitleCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}
