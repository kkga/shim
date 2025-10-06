import fs from "node:fs";
import { join } from "node:path";

export function getFileSource(filePath: string) {
  let resolvedPath = join(process.cwd(), filePath);

  if (!fs.existsSync(resolvedPath)) {
    throw new Error(`File not found: ${resolvedPath}`);
  }

  return fs.readFileSync(resolvedPath, "utf-8").trim();
}
