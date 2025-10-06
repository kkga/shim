import path from "node:path";
import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const preRawPlugin = path.join(__dirname, "app/(docs)/_lib/rehype-pre-raw.mjs");
const postRawPlugin = path.join(
  __dirname,
  "app/(docs)/_lib/rehype-post-raw.mjs"
);

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      "remark-frontmatter",
      "remark-mdx-frontmatter",
      ["remark-flexible-toc", { maxDepth: 3 }],
    ],
    rehypePlugins: [
      preRawPlugin,
      "rehype-slug",
      ["rehype-autolink-headings", { behavior: "wrap" }],
      postRawPlugin,
    ],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

export default withMDX(nextConfig);
