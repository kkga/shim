import { DocHeader } from '@/docs/doc-header'
import { mdxToHtml } from '@/docs/lib/mdx'
import { getGuides } from '@/docs/lib/utils'
import { baseUrl } from '@/sitemap'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return getGuides().map((guide) => ({
    params: { slug: guide.slug },
  }))
}

export default async function GuidePage({ params }) {
  const guide = getGuides().find((guide) => guide.slug === params.slug)

  if (!guide) {
    notFound()
  }

  const { title, description } = guide.metadata

  const { content } = await mdxToHtml({
    source: guide.content,
  })

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: title,
            description: description,
            image: `/og?title=${encodeURIComponent(title)}`,
            url: `${baseUrl}/docs/${guide.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
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
