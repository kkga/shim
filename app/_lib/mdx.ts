import { mdxComponents } from "@/app/_components/mdx-components"
import { compileMDX } from "next-mdx-remote/rsc"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"
import { postProcess, preProcess } from "./rehype-pre-raw"

export const mdxToHtml = async ({
  source,
  scope,
}: {
  source: string
  scope?: Record<string, unknown>
}) =>
  await compileMDX({
    source: source,
    components: mdxComponents,
    options: {
      scope: scope,
      mdxOptions: {
        remarkPlugins: [],
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
    },
  })
