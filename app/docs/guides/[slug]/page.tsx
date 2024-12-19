import { DocHeader } from "@/app/docs/doc-header"
import { mdxToHtml } from "@/app/docs/lib/mdx"
import { getFileSource, getGuides } from "@/app/docs/lib/utils"

export const dynamicParams = false
export async function generateStaticParams() {
  let params = getGuides().map((guide) => ({ slug: guide.slug }))
  return params
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  let { slug } = await params

  let guide = getGuides().find((guide) => guide.slug === slug)
  let { metadata, content } = guide
  let { title, description } = metadata

  let [styleUtilsSrc, themeUtilsSrc, themeCssSrc] = [
    getFileSource("lib/style.ts"),
    getFileSource("lib/theme.tsx"),
    getFileSource("theme/theme.css"),
  ]

  let { content: html } = await mdxToHtml({
    source: content,
    scope: { styleUtilsSrc, themeUtilsSrc, themeCssSrc },
  })

  return (
    <article>
      <DocHeader title={title} subtitle={description} />
      {html}
    </article>
  )
}
