import type { ReactNode } from "react";
import { getFileSource } from "@/app/_lib/utils";
import { DocHeader } from "@/app/(docs)/_components/doc-header";
import { DocSection } from "@/app/(docs)/_components/doc-section";
import { Metadata } from "@/app/(docs)/_components/metadata";
import { Note } from "@/app/(docs)/_components/note";
import { Link } from "@/shim-ui/link";
import { toKebabCase } from "../../_lib/utils";
import { getMainDemo } from "./demo-registry";
import {
  getComponentDocs,
  getDemosSource,
  loadDocSections,
  resolveSection,
} from "./utils";

export const dynamicParams = false;
export function generateStaticParams() {
  return getComponentDocs().map((doc) => ({
    slug: doc.slug,
  }));
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
  let {
    name,
    title,
    description,
    ariaUrl,
    docUrl,
    files,
    dependencies: dependencyNames = [],
  } = doc.metadata;
  let demos = getDemosSource(name);
  let source = getFileSource(files[0]);
  let MainDemo = getMainDemo(name);
  let sections = await loadDocSections(name);

  if (!demos.main) {
    let expectedPath = `app/(docs)/docs/components/[slug]/content/${toKebabCase(name)}/main.tsx`;
    throw new Error(
      `Missing main demo for "${name}". Expected source at "${expectedPath}".`
    );
  }

  let curlCommand = `curl -o ${name}.tsx '${API_URL}?c=${name}'`;
  let sourceUrl = `${GITHUB_FILE_URL}/${name}.tsx`;

  let dependencies = dependencyNames
    .map((depName) => {
      let dep = docs.find((depDoc) => depDoc.metadata.name === depName);
      return dep ? { name: dep.metadata.title, slug: dep.slug } : null;
    })
    .filter((dep): dep is { name: string; slug: string } => dep !== null);

  return (
    <article className="grid grid-cols-1 place-content-start gap-x-8 pb-12 md:grid-cols-[2fr_3fr] md:gap-x-12">
      <DocHeader subtitle={description} title={title}>
        <Metadata
          ariaUrl={ariaUrl}
          dependencies={dependencies}
          docUrl={docUrl}
          title={title}
        />
      </DocHeader>

      <DocSection
        code={[{ content: demos.main, title: `${title} example` }]}
        demo={<MainDemo />}
      />

      <DocSection
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

        <DependenciesNote dependencies={dependencies} name={name} />
      </DocSection>

      {sections.map((section) => {
        let { anchorId, code, DemoComponent } = resolveSection(section, {
          componentName: name,
          demos,
          slug,
        });

        return (
          <DocSection
            className={section.className}
            code={code}
            demo={<DemoComponent />}
            id={anchorId}
            key={anchorId}
            title={section.title}
          >
            {section.description}
          </DocSection>
        );
      })}
    </article>
  );
}

function DependenciesNote({
  dependencies,
  name,
}: {
  dependencies: Array<{ name: string; slug: string }>;
  name: string;
}) {
  if (dependencies.length === 0) {
    return null;
  }

  let links = buildDependencyLinks(dependencies);

  return (
    <Note className="mt-4" intent="warning" title="Dependencies">
      <p>
        {name} depends on {links}. Install the dependencies before using the
        component.
      </p>
    </Note>
  );
}

function buildDependencyLinks(
  dependencies: Array<{ name: string; slug: string }>
) {
  let nodes: ReactNode[] = [];
  dependencies.forEach((dependency, index) => {
    if (index > 0) {
      nodes.push(index === dependencies.length - 1 ? " and " : ", ");
    }

    nodes.push(
      <Link
        href={`/docs/components/${dependency.slug}`}
        key={dependency.slug}
        variant="underline"
      >
        {dependency.name}
      </Link>
    );
  });

  return nodes;
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
