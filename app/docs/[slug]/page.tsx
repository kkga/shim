import { Demo } from '@/components/mdx/demo'
import { getMainDemo } from '@/components/mdx/demo-components'
import { postProcess, preProcess } from '@/docs/lib/rehype-pre-raw'
import {
  getComponentDemos,
  getComponentDocs,
  getComponentSource,
} from '@/docs/lib/utils'
import { mdxComponents } from 'app/components/mdx/mdx-components'
import { baseUrl } from 'app/sitemap'
import { compileMDX } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import { DocHeader } from '../doc-header'
import { InstallInstructions } from './install-instructions'

export function generateMetadata({ params }) {
  const doc = getComponentDocs().find((doc) => doc.slug === params.slug)
  if (!doc) {
    return
  }

  const { name, description } = doc.metadata
  const ogImage = `${baseUrl}/og?title=${encodeURIComponent(name)}`

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

export async function generateStaticParams() {
  return getComponentDocs().map((doc) => ({
    params: { slug: doc.slug },
  }))
}

export default async function Doc({ params }) {
  const doc = getComponentDocs().find((doc) => doc.slug === params.slug)

  if (!doc) {
    notFound()
  }

  const { srcFilename, docUrl, aria, composes } = doc.metadata

  const demos = getComponentDemos(srcFilename)
  const source = getComponentSource(srcFilename)
  const MainDemo = getMainDemo(srcFilename)

  const { content } = await compileMDX({
    source: doc.content,
    components: mdxComponents,
    options: {
      scope: { demos, source, docUrl, aria, composes },
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

      <article>
        <DocHeader metadata={doc.metadata} />

        <Demo
          className={composes?.includes('Field') ? 'items-stretch' : ''}
          demo={<MainDemo />}
          code={demos.main}
        />

        <InstallInstructions srcFilename={srcFilename} source={source} />

        {content}
      </article>
    </>
  )
}
