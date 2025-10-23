import fs from "node:fs";
import { basename, extname, join } from "node:path";
import type { ComponentType } from "react";
import { getFileSource } from "@/app/_lib/utils";
import type { ComponentMetadata } from "@/app/(docs)/_lib/types";
import { COMPONENT_DEMOS_PATH, demoRegistry } from "@/app/(docs)/demo-registry";
import registry from "@/shim-ui/registry/registry.json" with { type: "json" };
import { slugify, toKebabCase } from "../../_lib/utils";
import type { DocModule, DocSection } from "../schema";

const DOCS_DIR = join(
  process.cwd(),
  "app",
  "(docs)",
  "components",
  "[slug]",
  "_content"
);

export function getComponentDocs({
  excludePlanned = true,
}: {
  excludePlanned?: boolean;
} = {}) {
  return registry.items
    .filter((component) => !(excludePlanned && component.status === "planned"))
    .map((component) => {
      let slug = slugify(component.name);

      return {
        metadata: component,
        slug,
      };
    });
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
      `${COMPONENT_DEMOS_PATH.replace("@", "")}/${dirname}/${file}`
    );
  }

  return demos;
}

const DOC_IMPORT_BASE = "./_content";

export async function loadDocSections(name: ComponentMetadata["name"]) {
  let dirname = toKebabCase(name);

  try {
    let module = (await import(`${DOC_IMPORT_BASE}/${dirname}/doc`)) as {
      default: DocModule;
    };

    let docModule = module.default;
    if (!docModule) {
      return [];
    }

    let { sections } = docModule;
    if (!Array.isArray(sections)) {
      return [];
    }

    return sections;
  } catch (_error) {
    return [];
  }
}

export function buildSectionAnchorId(section: DocSection, slug: string) {
  if (section.demo.group === slug) {
    return `${slug}-${section.demo.name}`;
  }

  return `${slug}-${section.demo.group}-${section.demo.name}`;
}

export function getDemoComponent(section: DocSection) {
  let group = demoRegistry[section.demo.group];
  if (!group) {
    return null;
  }

  return group[section.demo.name] ?? null;
}

export function resolveSection(
  section: DocSection,
  {
    componentName,
    componentTitle,
    demos,
    slug,
  }: {
    componentName: string;
    componentTitle: string;
    demos: Record<string, string | undefined>;
    slug: string;
  }
): {
  anchorId: string;
  code: Array<{ content: string; title: string }> | undefined;
  DemoComponent: ComponentType | null;
} {
  let DemoComponent = getDemoComponent(section);
  if (!DemoComponent) {
    throw new Error(
      `Unknown demo component for "${componentName}" -> group "${section.demo.group}", name "${section.demo.name}".`
    );
  }

  let codeKey = section.code ?? toKebabCase(section.demo.name);
  let codeContent = codeKey ? demos[codeKey] : undefined;

  if (codeKey && !codeContent) {
    throw new Error(
      `Missing code snippet "${codeKey}" for "${componentName}". Ensure "app/(docs)/components/[slug]/_content/${toKebabCase(componentName)}/${codeKey}.tsx" exists.`
    );
  }

  let code = codeContent
    ? [
        {
          content: codeContent,
          title:
            section.codeTitle ??
            `${section.title ? `${section.title} example` : `${componentTitle} example`}`,
        },
      ]
    : undefined;

  return {
    anchorId: buildSectionAnchorId(section, slug),
    code,
    DemoComponent,
  };
}
