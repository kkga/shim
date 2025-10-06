import fs from "node:fs";
import { extname, join } from "node:path";

import type { GuideMetadata } from "@/app/(docs)/_lib/types";
import { readMdxFile, slugify } from "../_lib/utils";

const GUIDES_DIR = join(process.cwd(), "app", "(docs)", "[slug]", "content");
const MDX_EXTENSION_REGEX = /\.mdx$/;

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
