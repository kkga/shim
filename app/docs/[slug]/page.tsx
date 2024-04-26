import { ArrowSquareOut, ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import { mdxComponents } from 'app/components/mdx/mdx-components'
import {
  getAllDocs,
  getComponentDemos,
  getComponentSource,
} from 'app/docs/utils'
import { baseUrl } from 'app/sitemap'
import { compileMDX } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const docs = getAllDocs()

  return docs.map((doc) => ({
    slug: doc.slug,
  }))
}

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

  const { sourcePath, demosPath, docUrl, category, composes } = doc.metadata

  const { content } = await compileMDX({
    source: doc.content,
    options: {
      scope: {
        demos: getComponentDemos({ componentDir: demosPath }),
        source: getComponentSource({ sourcePath: sourcePath }),
      },
      parseFrontmatter: true,
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
      <h1 className="text-neutral-text-contrast font-semibold text-3xl">
        {doc.metadata.name}
      </h1>
      <p className="text-neutral-text mt-2">{doc.metadata.description}</p>

      <div className="flex gap-8 mt-6 pt-6 mb-12 before:w-12 before:h-px before:absolute before:top-0 relative before:bg-neutral-border">
        {docUrl && (
          <div className="flex flex-col gap-2">
            <span className="text-xs text-neutral-text font-medium">
              Documentation
            </span>

            <a
              href={docUrl}
              className="flex items-center gap-0.5 text-sm text-accent-text underline-offset-2 decoration-accent-border hover:underline"
              rel="noreferrer"
              target="_blank"
              title={`View React Aria ${doc.metadata.name} documentation`}
            >
              React Aria {doc.metadata.name}
              <ArrowUpRight size={16} />
            </a>
          </div>
        )}

        {composes && (
          <div className="flex flex-col gap-2">
            <span className="text-xs text-neutral-text font-medium">
              Composes
            </span>
            <div className="flex flex-wrap gap-2">
              {composes.map((component) => (
                <a
                  key={component}
                  href={`/docs/${component}`}
                  className="text-sm text-accent-text underline-offset-2 decoration-accent-border hover:underline"
                  title={`View ${component} documentation`}
                >
                  {component}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
      <article className="prose">{content}</article>
    </section>
  )
}
