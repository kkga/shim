import fs from "node:fs";
import { basename, extname, join } from "node:path";
import { getFrontmatter } from "next-mdx-remote-client/utils";
import type { ComponentMetadata, GuideMetadata } from "./types";

const DOCS_DIR = join(process.cwd(), "docs");
const GUIDES_DIR = join(process.cwd(), "guides");
const MDX_EXTENSION_REGEX = /\.mdx$/;

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
  let entries = fs
    .readdirSync(DOCS_DIR, { recursive: true, withFileTypes: true })
    .filter((dirent) => dirent.isFile() && extname(dirent.name) === ".mdx")
    .map((dirent) => basename(dirent.parentPath));

  return entries
    .map((name) => {
      let rawContent = fs.readFileSync(
        join(DOCS_DIR, name, "doc.mdx"),
        "utf-8"
      );
      let { frontmatter, strippedSource } =
        getFrontmatter<ComponentMetadata>(rawContent);
      let slug = slugify(name);
      return { metadata: frontmatter, slug, source: strippedSource };
    })
    .filter((component) => !exclude.includes(component.metadata.status));
}

export function getGuides() {
  let entries = fs
    .readdirSync(GUIDES_DIR, { withFileTypes: true })
    .filter((dirent) => dirent.isFile() && extname(dirent.name) === ".mdx")
    .map((dirent) => dirent.name);

  return entries
    .map((name) => {
      let rawContent = fs.readFileSync(join(GUIDES_DIR, name), "utf-8");
      let { frontmatter, strippedSource } =
        getFrontmatter<GuideMetadata>(rawContent);
      let slug = slugify(name.replace(MDX_EXTENSION_REGEX, ""));
      return { metadata: frontmatter, slug, source: strippedSource };
    })
    .sort((a, b) => (a.metadata.order ?? 0) - (b.metadata.order ?? 0));
}

export function getComponentSource(name: ComponentMetadata["name"]) {
  let filename = toKebabCase(name);
  return fs
    .readFileSync(join(process.cwd(), "components", `${filename}.tsx`), "utf-8")
    .trim();
}

export function getDemosSource(name: ComponentMetadata["name"]) {
  let dirname = toKebabCase(name);
  let path = join(DOCS_DIR, dirname);
  let demoFiles = fs
    .readdirSync(path)
    .filter((file) => extname(file) === ".tsx");

  let demos: Record<string, string> = {};

  for (let file of demoFiles) {
    let content = fs.readFileSync(join(path, file), "utf-8").trim();
    let slug = basename(file, extname(file));
    demos[slug] = content;
  }

  return demos;
}

export function getFileSource(filePath: string) {
  let resolvedPath = join(process.cwd(), filePath);
  return fs.readFileSync(resolvedPath, "utf-8").trim();
}
