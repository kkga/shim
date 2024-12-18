import { Demo } from "@/app/components/mdx/demo"
import { getMainDemo } from "@/app/components/mdx/demo-components"
import {
  getComponentDocs,
  getComponentSource,
  getDemosSource,
} from "@/app/docs/lib/utils"
import { baseUrl } from "@/app/sitemap"
import { assert } from "console"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { DocHeader } from "../doc-header"
import { mdxToHtml } from "../lib/mdx"
import { MetadataRow } from "./component-metadata"
import { InstallInstructions } from "./install-instructions"

export async function generateStaticParams() {
  return getComponentDocs().map((doc) => ({
    params: { slug: doc.slug },
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const slug = (await params).slug
  const doc = getComponentDocs().find((doc) => doc.slug === slug)

  if (!doc) {
    notFound()
  }

  const { name, description } = doc.metadata
  const ogImage = `${baseUrl}/og?title=${encodeURIComponent(name)}`

  return {
    title: name,
    description,
    openGraph: {
      title: name,
      description,
      type: "article",
      url: `${baseUrl}/docs/${doc.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: name,
      description,
      images: [ogImage],
    },
  }
}

export const dynamicParams = false
export default async function Doc({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  let docs = getComponentDocs()
  let doc = docs.find((doc) => doc.slug === slug)

  if (!doc) {
    notFound()
  }

  let { name, composes, category } = doc.metadata
  let demos = getDemosSource(name)
  let source = getComponentSource(name)
  let MainDemo = getMainDemo(name)

  assert(demos.main, `Main demo not found for ${name}`)
  assert(source, `Source code not found for ${name}`)
  assert(MainDemo, `Main demo component not found for ${name}`)

  let dependencies =
    composes ?
      (composes
        .map((name) => {
          const dep = docs.find((doc) => doc.metadata.name === name)
          return dep ? { name: dep.metadata.name, slug: dep.slug } : null
        })
        .filter((dep) => dep !== null) as { name: string; slug: string }[])
    : []

  let { content } = await mdxToHtml({
    source: doc.content,
    scope: {
      ...doc.metadata,
      demos,
      source,
    },
  })

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: doc.metadata.name,
            description: doc.metadata.description,
            image: `/og?title=${encodeURIComponent(doc.metadata.name)}`,
            url: `${baseUrl}/docs/${doc.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />

      <article>
        <DocHeader
          title={doc.metadata.name}
          subtitle={doc.metadata.description}
        >
          <MetadataRow
            dependencies={dependencies.length > 0 ? dependencies : undefined}
            {...doc.metadata}
          />
        </DocHeader>

        <Demo
          className={category === "Buttons" ? "items-start" : ""}
          stacked={name === "Toolbar"}
          demo={<MainDemo />}
          code={demos.main}
        />

        <InstallInstructions
          dependencies={dependencies.length > 0 ? dependencies : undefined}
          filename={name}
          source={source}
        />

        {content}
      </article>
    </>
  )
}
