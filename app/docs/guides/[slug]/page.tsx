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
    <article className="text-neutral-text grid grid-cols-1 text-base leading-normal md:grid-cols-[3fr_1fr]">
      <DocHeader title={title} subtitle={description} />
      <section className="doc-section">{html}</section>
      <nav className="border-neutral-3 sticky top-6 hidden min-w-[16rem] overflow-y-auto border-l px-6 py-6 md:block"></nav>
    </article>
  )
}
