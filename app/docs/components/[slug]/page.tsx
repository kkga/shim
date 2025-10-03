import type { MDXComponents } from "next-mdx-remote-client/rsc";
import { Suspense } from "react";
import { Demo } from "@/app/_components/demo";
import { DocHeader } from "@/app/_components/doc-header";
import { Metadata } from "@/app/_components/metadata";
import { Note } from "@/app/_components/note";
import { mdxToHtml } from "@/app/_lib/mdx";
import { Link } from "@/shim-ui/link";
import { demoComponents, getMainDemo } from "./demo-components";
import { getComponentDocs, getComponentSource, getDemosSource } from "./utils";

export const dynamicParams = false;
export function generateStaticParams() {
  let params = getComponentDocs().map((doc) => ({
    slug: doc.slug,
  }));
  return params;
}

const API_URL = "https://shim.kkga.me/api";
const GITHUB_FILE_URL = "https://github.com/kkga/shim/blob/master/components";

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  let { slug } = await params;

  let docs = getComponentDocs();
  let doc = docs.find((d) => d.slug === slug);
  if (!doc) {
    throw new Error(`Document not found for slug: ${slug}`);
  }
  let { name, title, description, ariaUrl, docUrl } = doc.metadata;
  let demos = getDemosSource(name);
  let source = getComponentSource(name);
  let MainDemo = getMainDemo(name);

  let curlCommand = `curl -o ${name}.tsx '${API_URL}?c=${name}'`;
  let sourceUrl = `${GITHUB_FILE_URL}/${name}.tsx`;

  let dependencies = doc.metadata.dependencies
    .map((depName) => {
      const dep = docs.find((depDoc) => depDoc.metadata.name === depName);
      return dep ? { name: dep.metadata.title, slug: dep.slug } : null;
    })
    .filter((dep): dep is { name: string; slug: string } => dep !== null);

  let { content } = await mdxToHtml({
    source: doc.source,
    scope: {
      ...doc.metadata,
      demos,
      source,
    },
    components: demoComponents as MDXComponents,
  });

  return (
    <article className="grid grid-cols-1 place-content-start gap-x-8 divide-y divide-neutral-3 pb-12 *:last:border-neutral-3 *:last:border-b md:grid-cols-[2fr_3fr] md:gap-x-12">
      <DocHeader subtitle={description} title={title}>
        <Metadata
          ariaUrl={ariaUrl}
          dependencies={dependencies}
          docUrl={docUrl}
          title={title}
        />
      </DocHeader>

      <Demo
        code={[{ content: demos.main, title: `${title} example` }]}
        demo={<MainDemo />}
      />

      <Demo
        code={[
          {
            title: "Command",
            content: curlCommand,
          },
          {
            title: "Source code",
            content: source,
            sourceUrl,
          },
        ]}
        title="Install"
      >
        <p>
          To install the component, run the command in your terminal or copy the
          source code into your project.
        </p>

        {dependencies && dependencies.length > 0 && (
          <Note className="mt-4" intent="warning" title="Dependencies">
            <p>
              {name} depends on{" "}
              {dependencies.map(({ name: depName, slug: depSlug }, i) => (
                <span key={depName}>
                  {i > 0
                    ? (() => {
                        if (i === dependencies.length - 1) {
                          return " and ";
                        }
                        return ", ";
                      })()
                    : ""}
                  <Link
                    href={`/docs/components/${depSlug}`}
                    variant="underline"
                  >
                    {depName}
                  </Link>
                  {i === dependencies.length - 1 ? "." : ""}
                </span>
              ))}{" "}
              Install the dependencies before using the component.
            </p>
          </Note>
        )}
      </Demo>

      <Suspense fallback={<p>Loading...</p>}>{content}</Suspense>
    </article>
  );
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
