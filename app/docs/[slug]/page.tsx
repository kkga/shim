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
  const docs = getComponentDocs()
  const doc = docs.find((doc) => doc.slug === params.slug)

  if (!doc) {
    notFound()
  }

  const { name, srcFilename, composes, category } = doc.metadata

  const demos = getComponentDemos(srcFilename)
  const source = getComponentSource(srcFilename)
  const MainDemo = getMainDemo(srcFilename)

  const dependencies =
    composes ?
      (composes
        .map((name) => {
          const dep = docs.find((doc) => doc.metadata.name === name)
          return dep ? { name: dep.metadata.name, slug: dep.slug } : null
        })
        .filter((dep) => dep !== null) as { name: string; slug: string }[])
    : []

  const { content } = await mdxToHtml({
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
          srcFilename={srcFilename}
          source={source}
        />

        {content}
      </article>
    </>
  )
}
