import fs from "node:fs";
import { basename, extname, join } from "node:path";
import { getFrontmatter } from "next-mdx-remote-client/utils";
import type { ComponentMetadata, GuideMetadata } from "./types";

const DOCS_DIR = join(process.cwd(), "docs");
const GUIDES_DIR = join(process.cwd(), "guides");
const MDX_EXTENSION_REGEX = /\.mdx$/;

function readMdxFile<T extends Record<string, unknown>>(filePath: string) {
  if (!fs.existsSync(filePath)) {
    return null;
  }
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return getFrontmatter<T>(rawContent);
}

function slugify(str: string) {
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

export function getComponentDocs(
  { exclude }: { exclude: ComponentMetadata["status"][] } = {
    exclude: [],
  }
) {
  if (!fs.existsSync(DOCS_DIR)) {
    return [];
  }

  let entries = fs
    .readdirSync(DOCS_DIR, { recursive: true, withFileTypes: true })
    .filter((dirent) => dirent.isFile() && extname(dirent.name) === ".mdx")
    .map((dirent) => basename(dirent.parentPath));

  return entries
    .map((name) => {
      let result = readMdxFile<ComponentMetadata>(
        join(DOCS_DIR, name, "doc.mdx")
      );
      if (!result) {
        return null;
      }

      let { frontmatter, strippedSource } = result;
      let slug = slugify(name);
      return { metadata: frontmatter, slug, source: strippedSource };
    })
    .filter((component): component is NonNullable<typeof component> =>
      Boolean(component)
    )
    .filter((component) => !exclude.includes(component.metadata.status));
}

export function getGuides() {
  if (!fs.existsSync(GUIDES_DIR)) {
    return [];
  }

  let entries = fs
    .readdirSync(GUIDES_DIR, { withFileTypes: true })
    .filter((dirent) => dirent.isFile() && extname(dirent.name) === ".mdx")
    .map((dirent) => dirent.name);

  return entries
    .map((name) => {
      let result = readMdxFile<GuideMetadata>(join(GUIDES_DIR, name));
      if (!result) {
        return null;
      }

      let { frontmatter, strippedSource } = result;
      let slug = slugify(name.replace(MDX_EXTENSION_REGEX, ""));
      return { metadata: frontmatter, slug, source: strippedSource };
    })
    .filter((guide): guide is NonNullable<typeof guide> => Boolean(guide))
    .sort((a, b) => (a.metadata.order ?? 0) - (b.metadata.order ?? 0));
}

export function getFileSource(filePath: string) {
  let resolvedPath = join(process.cwd(), filePath);

  if (!fs.existsSync(resolvedPath)) {
    throw new Error(`File not found: ${resolvedPath}`);
  }

  return fs.readFileSync(resolvedPath, "utf-8").trim();
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
    demos[slug] = getFileSource(`docs/${dirname}/${file}`);
  }

  return demos;
}
