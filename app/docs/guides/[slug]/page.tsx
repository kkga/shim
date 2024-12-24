import { DocHeader } from "@/app/_components/doc-header"
import { mdxToHtml } from "@/app/_lib/mdx"
import { getFileSource, getGuides } from "@/app/_lib/utils"

export const dynamicParams = false
export async function generateStaticParams() {
  let params = getGuides().map((guide) => ({ slug: guide.slug }))
  return params
}

const GITHUB_FILE_URL = "https://github.com/kkga/shim/blob/master"

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

  let [styleUtilsUrl, themeUtilsUrl, themeCssUrl] = [
    `${GITHUB_FILE_URL}/lib/style.ts`,
    `${GITHUB_FILE_URL}/lib/theme.tsx`,
    `${GITHUB_FILE_URL}/theme/theme.css`,
  ]

  let { content: html } = await mdxToHtml({
    source: content,
    scope: {
      styleUtilsSrc,
      themeUtilsSrc,
      themeCssSrc,
      styleUtilsUrl,
      themeUtilsUrl,
      themeCssUrl,
    },
  })

  return (
    <article className="bg-background text-neutral-text-contrast container min-h-screen max-w-4xl p-6 text-[15px] leading-6 lg:p-8">
      <DocHeader title={title} subtitle={description} />
      {html}
    </article>
  )
}
