import { postProcess, preProcess } from '@/docs/lib/rehype-pre-raw'
import { getGuides } from '@/docs/lib/utils'
import { baseUrl } from '@/sitemap'
import { compileMDX } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

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

  const { content } = await compileMDX({
    source: guide.content,
    options: {
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [
          preProcess,
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behaviour: 'append',
              properties: {
                ariaHidden: true,
                tabIndex: -1,
                className: 'hash-link',
              },
            },
          ],
          postProcess,
        ],
      },
    },
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

      <article>{content}</article>
    </>
  )
}
