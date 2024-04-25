import { notFound } from 'next/navigation'
import { mdxComponents } from 'app/components/mdx/mdx-components'
import { getAllDocs } from 'app/docs/utils'
import { getComponentSource, getComponentDemos } from 'app/docs/utils'
import { baseUrl } from 'app/sitemap'
import { compileMDX } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  let docs = getAllDocs()

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
  let doc = getAllDocs().find((doc) => doc.slug === params.slug)

  if (!doc) {
    notFound()
  }

  const { sourcePath, demosPath } = doc.metadata

  const { content } = await compileMDX({
    source: doc.content,
    options: {
      scope: {
        demos: getComponentDemos({ componentDir: demosPath }),
        source: getComponentSource({ sourcePath: sourcePath }),
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
      <h1 className="text-neutral-text-contrast font-semibold text-2xl">
        {doc.metadata.name}
      </h1>
      <p className="text-neutral-text mt-2">{doc.metadata.description}</p>
      {/* TODO: display component metadata here */}
      <div className="flex justify-between items-center mt-2 mb-8 text-sm"></div>
      <article className="prose">{content}</article>
    </section>
  )
}
