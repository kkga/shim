import { postProcess, preProcess } from '@/lib/rehype-pre-raw'
import { mdxComponents } from 'app/components/mdx/mdx-components'
import {
  getAllDocs,
  getComponentDemos,
  getComponentSource,
} from 'app/docs/utils'
import { baseUrl } from 'app/sitemap'
import { compileMDX } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import { DocHeader } from '../doc-header'

export function generateMetadata({ params }) {
  let doc = getAllDocs().find((doc) => doc.slug === params.slug)
  if (!doc) {
    return
  }

  let { name, description } = doc.metadata
  let ogImage = `${baseUrl}/og?title=${encodeURIComponent(name)}`

  return {
    title: name,
    description,
    openGraph: {
      title: name,
      description,
      type: 'article',
      url: `${baseUrl}/docs/${doc.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: name,
      description,
      images: [ogImage],
    },
  }
}

export default async function Doc({ params }) {
  const doc = getAllDocs().find((doc) => doc.slug === params.slug)

  if (!doc) {
    notFound()
  }

  const { srcFilename, docUrl, aria, composes } = doc.metadata

  const demos = getComponentDemos(srcFilename)
  const source = getComponentSource(srcFilename)

  const { content } = await compileMDX({
    source: doc.content,
    options: {
      scope: { demos, source },
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
    components: mdxComponents,
  })

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: doc.metadata.name,
            description: doc.metadata.description,
            image: `/og?title=${encodeURIComponent(doc.metadata.name)}`,
            url: `${baseUrl}/docs/${doc.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />

      <DocHeader metadata={doc.metadata} />

      <article className="prose">{content}</article>
    </section>
  )
}
