import { Demo } from "@/components/mdx/demo"
import { getMainDemo } from "@/components/mdx/demo-components"
import {
  getComponentDemos,
  getComponentDocs,
  getComponentSource,
} from "@/docs/lib/utils"
import { baseUrl } from "app/sitemap"
import { notFound } from "next/navigation"
import { DocHeader } from "../doc-header"
import { mdxToHtml } from "../lib/mdx"
import { MetadataRow } from "./component-metadata"
import { InstallInstructions } from "./install-instructions"
import { assert } from "console"

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
      type: "article",
      url: `${baseUrl}/docs/${doc.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
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
  let docs = getComponentDocs()
  let doc = docs.find((doc) => doc.slug === params.slug)

  if (!doc) {
    notFound()
  }

  let { name, composes, category } = doc.metadata
  let filename = name.replace(/-/g, "").toLowerCase()
  let demos = getComponentDemos(filename)
  let source = getComponentSource(filename)
  let MainDemo = getMainDemo(filename)

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
          filename={filename}
          source={source}
        />

        {content}
      </article>
    </>
  )
}
