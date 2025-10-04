import type { ShimConfig } from "./config.js";

export function transformImports(
  files: Array<{ path: string; content: string }>,
  shimConfig: ShimConfig
): Array<{ path: string; content: string }> {
  const componentsPath = shimConfig.componentsPath || "components";
  const utilsPath = shimConfig.utilsPath || "utils";

  return files.map((file) => ({
    ...file,
    content: file.content
      .replace(
        /from ["']@\/shim-ui\/lib\/([^"']+)["']/g,
        `from "@/${utilsPath}/$1"`
      )
      .replace(
        /from ["']@\/shim-ui\/([^"']+)["']/g,
        `from "@/${componentsPath}/$1"`
      ),
  }));
}
