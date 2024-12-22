import { Demo } from "@/app/components/demo"
import { getMainDemo } from "@/app/components/mdx/demo-components"
import {
  getComponentDocs,
  getComponentSource,
  getDemosSource,
} from "@/app/docs/lib/utils"
import { assert } from "console"
import { DocHeader } from "../doc-header"
import { mdxToHtml } from "../lib/mdx"
import { MetadataRow } from "./component-metadata"
import { InstallInstructions } from "./install-instructions"

export const dynamicParams = false
export async function generateStaticParams() {
  let docs = getComponentDocs({ exclude: ["planned"] })
  let params = docs.map((doc) => ({ slug: doc.slug }))
  return params
}

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>
// }): Promise<Metadata> {
//   const slug = (await params).slug
//   const doc = getComponentDocs().find((doc) => doc.slug === slug)

//   if (!doc) {
//     notFound()
//   }

//   const { name, description } = doc.metadata
//   const ogImage = `${baseUrl}/og?title=${encodeURIComponent(name)}`

//   return {
//     title: name,
//     description,
//     openGraph: {
//       title: name,
//       description,
//       type: "article",
//       url: `${baseUrl}/docs/${doc.slug}`,
//       images: [{ url: ogImage }],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: name,
//       description,
//       images: [ogImage],
//     },
//   }
// }

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  let { slug } = await params

  let docs = getComponentDocs({ exclude: ["planned"] })
  let doc = docs.find((doc) => doc.slug === slug)
  let { metadata, content } = doc
  let { name, description, category, composes } = metadata
  let demos = getDemosSource(name)
  let source = getComponentSource(name)
  let MainDemo = getMainDemo(name)

  assert(demos.main, `Main demo not found for ${name}`)
  assert(source, `Source code not found for ${name}`)
  assert(MainDemo, `Main demo component not found for ${name}`)

  let dependencies =
    composes ?
      composes
        .map((name) => {
          const dep = docs.find((doc) => doc.metadata.name === name)
          return dep ? { name: dep.metadata.name, slug: dep.slug } : null
        })
        .filter((dep) => dep !== null)
    : []

  let { content: html } = await mdxToHtml({
    source: content,
    scope: {
      ...metadata,
      demos,
      source,
    },
  })

  return (
    <article className="bg-background container grid min-h-screen max-w-6xl grid-cols-1 gap-6 p-6 md:grid-cols-[2fr_3fr] lg:gap-8 lg:p-8">
      <DocHeader title={name} subtitle={description}>
        <MetadataRow
          dependencies={dependencies.length > 0 ? dependencies : undefined}
          {...metadata}
        />
      </DocHeader>

      <Demo
        demo={<MainDemo />}
        code={demos.main}
        className={category === "Buttons" ? "items-start" : ""}
      />

      <InstallInstructions
        dependencies={dependencies.length > 0 ? dependencies : undefined}
        name={name}
        source={source}
      />

      {html}
    </article>
  )
}
