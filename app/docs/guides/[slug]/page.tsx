import { DocHeader } from "@/app/_components/doc-header"
import Toc from "@/app/_components/toc"
import { mdxToHtml } from "@/app/_lib/mdx"
import { getFileSource, getGuides } from "@/app/_lib/utils"
import { Suspense } from "react"

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
  let { metadata, source } = guide
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

  let { content, scope } = await mdxToHtml({
    source,
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
    <article className="text-neutral-text grid grid-cols-1 text-[15px] leading-normal md:grid-cols-[3fr_1fr]">
      <DocHeader title={title} subtitle={description} />
      <section className="p-6 lg:p-8">
        <Suspense fallback={<p>Loading...</p>}>{content}</Suspense>
      </section>
      <aside className="border-neutral-3 hidden min-w-[16rem] border-l px-6 py-6 md:block">
        <nav className="sticky top-6">
          <Toc toc={scope.toc} />
        </nav>
      </aside>
    </article>
  )
}
