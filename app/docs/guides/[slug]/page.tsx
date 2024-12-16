import { DocHeader } from "@/docs/doc-header"
import { mdxToHtml } from "@/docs/lib/mdx"
import { getGuides, getThemeCssSource, getUtilsSource } from "@/docs/lib/utils"
import { baseUrl } from "@/sitemap"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return getGuides().map((guide) => ({
    params: { slug: guide.slug },
  }))
}

export default async function GuidePage(props) {
  const params = await props.params
  const guide = getGuides().find((guide) => guide.slug === params.slug)
  const utilsSource = getUtilsSource()
  const themeCssSource = getThemeCssSource()

  if (!guide) {
    notFound()
  }

  const { title, description } = guide.metadata

  const { content } = await mdxToHtml({
    source: guide.content,
    scope: { utilsSource, themeCssSource },
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
