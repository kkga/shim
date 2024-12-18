import { DocHeader } from "@/app/docs/doc-header"
import { mdxToHtml } from "@/app/docs/lib/mdx"
import {
  getGuides,
  getStyleUtilsSource,
  getThemeCssSource,
  getThemeUtilsSource,
} from "@/app/docs/lib/utils"

export const dynamicParams = false
export async function generateStaticParams() {
  let guides = getGuides()
  let params = guides.map((guide) => ({ slug: guide.slug }))
  return params
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  let { slug } = await params

  let guides = getGuides()
  let guide = guides.find((guide) => guide.slug === slug)
  let { metadata, content } = guide
  let { title, description } = metadata

  let styleUtilsSource = getStyleUtilsSource()
  let themeUtilsSource = getThemeUtilsSource()
  let themeCssSource = getThemeCssSource()

  let { content: html } = await mdxToHtml({
    source: content,
    scope: { styleUtilsSource, themeUtilsSource, themeCssSource },
  })

  return (
    <article>
      <DocHeader title={title} subtitle={description} />
      {html}
    </article>
  )
}
