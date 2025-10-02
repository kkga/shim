import fs from "node:fs";
import { basename, extname, join } from "node:path";
import type { ComponentMetadata } from "@/app/_lib/types";
import { getFileSource, slugify, toKebabCase } from "@/app/_lib/utils";
import registry from "@/registry.json" with { type: "json" };

const DOCS_DIR = join(
  process.cwd(),
  "app",
  "docs",
  "components",
  "[slug]",
  "content"
);

function readMdxContent(filePath: string) {
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return fs.readFileSync(filePath, "utf-8");
}

export function getComponentDocs({ exclude }: { exclude?: string[] } = {}) {
  return registry.items
    .filter((component) => !exclude?.includes(component.name))
    .map((component) => {
      let docPath = join(DOCS_DIR, component.name, "doc.mdx");
      let source = readMdxContent(docPath) || "";
      let slug = slugify(component.name);

      return {
        metadata: component,
        slug,
        source,
      };
    });
}

export function getComponentSource(name: ComponentMetadata["name"]) {
  let filename = toKebabCase(name);
  return getFileSource(`components/${filename}.tsx`);
}

export function getDemosSource(name: ComponentMetadata["name"]) {
  let dirname = toKebabCase(name);
  let path = join(DOCS_DIR, dirname);

  if (!fs.existsSync(path)) {
    return {};
  }

  let demoFiles = fs
    .readdirSync(path)
    .filter((file) => extname(file) === ".tsx");

  let demos: Record<string, string> = {};

  for (let file of demoFiles) {
    let slug = basename(file, extname(file));
    demos[slug] = getFileSource(
      `app/docs/components/[slug]/content/${dirname}/${file}`
    );
  }

  return demos;
}
