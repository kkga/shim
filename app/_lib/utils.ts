import fs from "node:fs";
import { join } from "node:path";

const fileSourceCache = new Map<string, string>();

export function getFileSource(filePath: string) {
  const resolvedPath = join(process.cwd(), filePath);

  const cached = fileSourceCache.get(resolvedPath);
  if (cached !== undefined) {
    return cached;
  }

  if (!fs.existsSync(resolvedPath)) {
    throw new Error(`File not found: ${resolvedPath}`);
  }

  const content = fs.readFileSync(resolvedPath, "utf-8").trim();
  fileSourceCache.set(resolvedPath, content);
  return content;
}
