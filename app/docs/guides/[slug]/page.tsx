import { DocHeader } from "@/app/docs/doc-header"
import { mdxToHtml } from "@/app/docs/lib/mdx"
import {
  getGuides,
  getStyleUtilsSource,
  getThemeCssSource,
  getThemeUtilsSource,
} from "@/app/docs/lib/utils"
import { baseUrl } from "@/app/sitemap"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return getGuides().map((guide) => ({
    params: { slug: guide.slug },
  }))
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const guide = getGuides().find((guide) => guide.slug === slug)
  const styleUtilsSource = getStyleUtilsSource()
  const themeUtilsSource = getThemeUtilsSource()
  const themeCssSource = getThemeCssSource()

  if (!guide) {
    notFound()
  }

  const { title, description } = guide.metadata

  const { content } = await mdxToHtml({
    source: guide.content,
    scope: { styleUtilsSource, themeUtilsSource, themeCssSource },
  })

  return (
    <>
      {/* TODO: figure this out */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            description: description,
            image: `/og?title=${encodeURIComponent(title)}`,
            url: `${baseUrl}/docs/${guide.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />

      <article>
        <DocHeader title={title} subtitle={description} />
        {content}
      </article>
    </>
  )
}
