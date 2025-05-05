import { Demo } from "@/app/_components/demo"
import { getMainDemo } from "@/app/_components/demo-components"
import { DocHeader } from "@/app/_components/doc-header"
import { Metadata } from "@/app/_components/metadata"
import { Note } from "@/app/_components/note"
import { mdxToHtml } from "@/app/_lib/mdx"
import {
  getComponentDocs,
  getComponentSource,
  getDemosSource,
} from "@/app/_lib/utils"
import { Link } from "@/components/Link"
import { assert } from "console"

export const dynamicParams = false
export async function generateStaticParams() {
  let params = getComponentDocs({ exclude: ["planned"] }).map((doc) => ({
    slug: doc.slug,
  }))
  return params
}

const API_URL = "https://shim.kkga.me/api"
const GITHUB_FILE_URL = "https://github.com/kkga/shim/blob/master/components"

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  let { slug } = await params

  let docs = getComponentDocs({ exclude: ["planned"] })
  let doc = docs.find((doc) => doc.slug === slug)
  let { metadata, content } = doc
  let { name, description, composes } = metadata
  let demos = getDemosSource(name)
  let source = getComponentSource(name)
  let MainDemo = getMainDemo(name)

  let curlCommand = `curl -o ${name}.tsx '${API_URL}?c=${name}'`
  let sourceUrl = `${GITHUB_FILE_URL}/${name}.tsx`

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
    <article className="divide-neutral-3 grid grid-cols-1 place-content-start gap-x-8 divide-y md:grid-cols-[2fr_3fr] md:gap-x-12">
      <DocHeader title={name} subtitle={description}>
        <Metadata
          dependencies={dependencies.length > 0 ? dependencies : undefined}
          {...metadata}
        />
      </DocHeader>

      <Demo
        demo={<MainDemo />}
        hideTitle
        code={[{ content: demos.main, title: `${name} example` }]}
      />

      <Demo
        title="Install"
        code={[
          {
            title: "Command",
            content: curlCommand,
          },
          {
            title: "Source code",
            content: source,
            sourceUrl: sourceUrl,
          },
        ]}
      >
        <p>
          To install the component, run the command in your terminal or copy the
          source code into your project.
        </p>

        {dependencies && dependencies.length > 0 && (
          <Note intent="warning" title="Dependencies" className="mt-4">
            <p>
              {name} depends on{" "}
              {dependencies.map(({ name, slug }, i) => (
                <span key={name}>
                  {i > 0 ?
                    i === dependencies.length - 1 ?
                      " and "
                    : ", "
                  : ""}
                  <Link variant="underline" href={`/docs/components/${slug}`}>
                    {name}
                  </Link>
                  {i === dependencies.length - 1 ? "." : ""}
                </span>
              ))}{" "}
              Install the dependencies before using the component.
            </p>
          </Note>
        )}
      </Demo>

      {html}
    </article>
  )
}

// TODO: Uncomment this when the metadata is ready
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
