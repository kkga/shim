import {
  type EvaluateOptions,
  evaluate,
  type MDXComponents,
} from "next-mdx-remote-client/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkFlexibleToc, { type TocItem } from "remark-flexible-toc";
import { mdxComponents } from "@/app/_components/mdx-components";
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
          behavior: "wrap",
        },
      ],
      postProcess,
    ],
  },
};

export async function mdxToHtml({
  source,
  scope,
  components,
}: {
  source: string;
  scope?: Scope;
  components?: MDXComponents;
}) {
  return await evaluate({
    source,
    components: { ...mdxComponents, ...components },
    options: { ...options, scope },
  });
}
