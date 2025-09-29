import { type EvaluateOptions, evaluate } from "next-mdx-remote-client/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkFlexibleToc, { type TocItem } from "remark-flexible-toc";
import { mdxComponents as components } from "@/app/_components/mdx-components";
import { postProcess, preProcess } from "./rehype-pre-raw";

interface Scope {
  toc?: TocItem[];
  [key: string]: unknown;
}

let options: EvaluateOptions<Scope> = {
  vfileDataIntoScope: "toc",
  mdxOptions: {
    remarkPlugins: [[remarkFlexibleToc, { maxDepth: 3 }]],
    rehypePlugins: [
      preProcess,
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behaviour: "append",
          properties: {
            ariaHidden: true,
            tabIndex: -1,
            className: "hash-link",
          },
        },
      ],
      postProcess,
    ],
  },
};

export async function mdxToHtml({
  source,
  scope,
}: {
  source: string;
  scope?: Scope;
}) {
  return await evaluate({
    source,
    components,
    options: { ...options, scope },
  });
}
