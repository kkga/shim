import { Demo } from '@/components/mdx/demo'
import { getMainDemo } from '@/components/mdx/demo-components'
import { postProcess, preProcess } from '@/lib/rehype-pre-raw'
import { H3, P, mdxComponents } from 'app/components/mdx/mdx-components'
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
import { InstallInstructions } from './install-instructions'

export function generateMetadata({ params }) {
  const doc = getAllDocs().find((doc) => doc.slug === params.slug)
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

export default async function Doc({ params }) {
  const doc = getAllDocs().find((doc) => doc.slug === params.slug)

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
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
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

      {/* <H3>Basic usage</H3> */}
      <Demo
        className={composes?.includes('Field') ? 'items-stretch' : ''}
        demo={<MainDemo />}
        code={demos.main}
      />

      <H3>Install</H3>
      <P>
        Run cURL command to download the file into your project or copy the
        source code below.
      </P>
      <InstallInstructions srcFilename={srcFilename} source={source} />

      <article className="prose">{content}</article>
    </>
  )
}
