#!/usr/bin/env node
import { Command } from "commander";
import packageJson from "../package.json" with { type: "json" };
import { addCommand } from "./commands/add.js";
import { initCommand } from "./commands/init.js";

const program = new Command();

program
  .name("shim")
  .description("CLI for installing UI components from Shim")
  .version(packageJson.version);

program
  .command("add")
  .description("Install components to your project")
  .argument("<components...>", "component names to install")
  .option("-p, --path <path>", "custom path for components")
  .option("-f, --overwrite", "overwrite existing files")
  .action(addCommand);

program
  .command("init")
  .description("Initialize configuration file, install utility and theme files")
  .option("-f, --force", "overwrite existing config file")
  .option(
    "--components-path <path>",
    "custom path for components (default: components)"
  )
  .option(
    "--utils-path <path>",
    "custom path for utility files (default: utils)"
  )
  .option("--css-path <path>", "custom path for CSS files (default: styles)")
  .action(initCommand);

program.parse(process.argv);
