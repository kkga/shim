import path from "node:path";
import { fetchComponent } from "../lib/api.js";
import { loadConfig } from "../lib/config.js";
import {
  ensureDirectoryExists,
  fileExists,
  overwriteFile,
  resolveOutputPath,
  writeFile,
} from "../lib/files.js";
import { transformImports } from "../lib/transforms.js";

interface AddOptions {
  path?: string;
  overwrite?: boolean;
}

function checkExistingFiles(
  files: Array<{ path: string; content: string }>,
  outputDir: string,
  overwrite: boolean
): void {
  const existingFiles: string[] = [];

  for (const file of files) {
    const filePath = path.join(outputDir, file.path);
    if (fileExists(filePath) && !overwrite) {
      existingFiles.push(filePath);
    }
  }

  if (existingFiles.length > 0) {
    process.stderr.write("The following files already exist:\n");
    for (const file of existingFiles) {
      process.stderr.write(`   ${file}\n`);
    }
    process.stderr.write("Use --overwrite to force overwrite existing files\n");
    process.exit(1);
  }
}

function installFiles(
  files: Array<{ path: string; content: string }>,
  outputDir: string,
  overwrite: boolean
): void {
  for (const file of files) {
    const filePath = path.join(outputDir, file.path);

    if (overwrite && fileExists(filePath)) {
      overwriteFile(filePath, file.content);
    } else {
      writeFile(filePath, file.content);
    }
  }
}

export async function addCommand(
  components: string[],
  options: AddOptions
): Promise<void> {
  const config = loadConfig();

  async function fetchAndInstall(componentName: string): Promise<void> {
    const outputDir = resolveOutputPath(
      options.path || config.componentsPath,
      "components"
    );
    ensureDirectoryExists(outputDir);

    const { files, dependencies } = await fetchComponent(componentName);
    const transformedFiles = transformImports(files, config);

    const overwrite = Boolean(options.overwrite);

    checkExistingFiles(transformedFiles, outputDir, overwrite);
    installFiles(transformedFiles, outputDir, overwrite);

    if (dependencies && dependencies.length > 0) {
      for (const dependency of dependencies) {
        await fetchAndInstall(dependency);
      }
    }

    process.stdout.write(`Installed ${componentName}\n`);
  }

  for (const component of components) {
    await fetchAndInstall(component);
  }
}
