import { getFileSource } from "@/app/_lib/utils";
import { DocHeader } from "@/app/(docs)/_components/doc-header";
import { DocSection } from "@/app/(docs)/_components/doc-section";
import { Metadata } from "@/app/(docs)/_components/metadata";
import { Separator } from "@/shim-ui/separator";
import { toKebabCase } from "../../_lib/utils";
import { InstallSection } from "./_components/install-section";
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

const GITHUB_FILE_URL = "https://github.com/kkga/shim/blob/master/shim-ui";

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

  let command = `pnpm dlx @kkga/shim add ${name}`;
  let sourceUrl = `${GITHUB_FILE_URL}/${name}.tsx`;

  let dependencies = dependencyNames
    .map((depName) => {
      let dep = docs.find((depDoc) => depDoc.metadata.name === depName);
      return dep ? { name: dep.metadata.title, slug: dep.slug } : null;
    })
    .filter((dep): dep is { name: string; slug: string } => dep !== null);

  return (
    <article>
      <DocHeader className="col-span-full" subtitle={description} title={title}>
        <Metadata
          ariaUrl={ariaUrl}
          dependencies={dependencies}
          docUrl={docUrl}
          name={name}
          title={title}
        />
      </DocHeader>

      <DocSection
        code={[{ content: demos.main, title: `${title} example` }]}
        demo={<MainDemo />}
      />

      <InstallSection
        command={command}
        componentTitle={title}
        dependencies={dependencies}
        source={source}
        sourceUrl={sourceUrl}
      />

      <Separator className="my-12" />

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
            stacked={section.stacked}
            title={section.title}
          >
            {section.description}
          </DocSection>
        );
      })}
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
