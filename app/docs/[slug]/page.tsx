import { postProcess, preProcess } from '@/lib/rehype-pre-raw'
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
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
      <h1 className="text-3xl font-semibold text-neutral-text-contrast">
        {doc.metadata.name}
      </h1>
      <p className="mt-4 text-neutral-text">{doc.metadata.description}</p>

      <div className="relative mt-6 mb-12 flex gap-8 pt-6 before:absolute before:top-0 before:h-px before:w-12 before:bg-neutral-border">
        {docUrl && (
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium text-neutral-text">
              Documentation
            </span>

            <a
              href={docUrl}
              className="flex items-center gap-0.5 text-sm text-accent-text decoration-accent-border underline-offset-2 hover:underline"
              rel="noreferrer"
              target="_blank"
              title={`View React Aria documentation`}
            >
              React Aria docs
              <ArrowUpRight size={16} />
            </a>
          </div>
        )}

        {aria && (
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium text-neutral-text">
              Pattern
            </span>

            <a
              href={`https://www.w3.org/WAI/ARIA/apg/patterns/${aria}`}
              className="flex items-center gap-0.5 text-sm text-accent-text decoration-accent-border underline-offset-2 hover:underline"
              title={`View ARIA pattern`}
              rel="noreferrer"
              target="_blank"
            >
              W3C ARIA pattern
              <ArrowUpRight size={16} />
            </a>
          </div>
        )}

        {composes && (
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium text-neutral-text">
              Composes
            </span>
            <div className="flex flex-wrap gap-2">
              {composes.map((component) => (
                <a
                  key={component}
                  href={`/docs/${component}`}
                  className="text-sm text-accent-text decoration-accent-border underline-offset-2 hover:underline"
                  title={`View ${component} documentation`}
                  rel="noreferrer"
                  target="_blank"
                >
                  {component}
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col gap-2">
          <span className="text-xs font-medium text-neutral-text">
            Source code
          </span>
          <div className="flex flex-wrap gap-2">
            <a
              href={`https://github.com/kkga/shim-ui/blob/master/app/ui/${srcFilename}.tsx`}
              className="text-sm text-accent-text decoration-accent-border underline-offset-2 hover:underline"
              title={`View ${srcFilename} source`}
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <article className="prose">{content}</article>
    </section>
  )
}
