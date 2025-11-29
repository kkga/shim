import { spawnSync } from "node:child_process";
import { detectPackageManager } from "./pm.js";
import { findProjectRoot } from "./project.js";

// List of required dependencies for Shim (excluding Tailwind)
export const SHIM_DEPENDENCIES = [
  "react-aria-components",
  "tailwind-variants",
  "@radix-ui/colors",
  "@phosphor-icons/react",
];

export function installDependencies(deps: string[], dev = false): void {
  const pm = detectPackageManager();
  const root = findProjectRoot();
  let args: string[] = [];

  switch (pm) {
    case "pnpm": {
      args = ["add", ...deps];
      break;
    }
    case "yarn": {
      args = ["add", ...deps];
      break;
    }
    case "npm": {
      args = ["install", ...deps];
      break;
    }
    case "bun": {
      args = ["add", ...deps];
      break;
    }
    default: {
      process.stderr.write(`Unknown package manager: ${pm}\n`);
      process.exit(1);
    }
  }

  if (dev) {
    if (pm === "npm") {
      args.push("--save-dev");
    } else {
      args.push("-D");
    }
  }

  process.stdout.write(
    `Installing dependencies with ${pm}: ${deps.join(", ")}\n`
  );
  const result = spawnSync(pm, args, { stdio: "inherit", cwd: root });
  if (result.status !== 0) {
    process.stderr.write(
      `\nFailed to install dependencies with ${pm}. Please install them manually.\n`
    );
    process.exit(1);
  }
}
