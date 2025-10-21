import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import { getFileSource } from "@/app/_lib/utils";
import { DocHeader } from "@/app/(docs)/_components/doc-header";
import { DocMetadata } from "@/app/(docs)/_components/doc-metadata";
import { DocSection } from "@/app/(docs)/_components/doc-section";
import { baseUrl } from "@/app/sitemap";
import { toKebabCase } from "../../_lib/utils";
import { InstallSection } from "./_components/install-section";
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
  // let MainDemo = getMainDemo(name);
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
    <article className="space-y-12">
      <DocHeader className="col-span-full" subtitle={description} title={title}>
        <DocMetadata
          ariaUrl={ariaUrl}
          dependencies={dependencies}
          docUrl={docUrl}
          name={name}
          title={title}
        />
      </DocHeader>

      {sections.map((section) => {
        let { anchorId, code, DemoComponent } = resolveSection(section, {
          componentName: name,
          componentTitle: title,
          demos,
          slug,
        });

        return (
          <Fragment key={anchorId}>
            <DocSection
              className={section.className}
              code={code}
              demo={<DemoComponent />}
              demoLayout={section.demoLayout}
              id={anchorId}
              key={anchorId}
              stacked={section.stacked}
              title={section.title}
            >
              {section.description}
            </DocSection>

            {section.demo.name === "main" && (
              <InstallSection
                command={command}
                componentTitle={title}
                dependencies={dependencies}
                source={source}
                sourceUrl={sourceUrl}
              />
            )}
          </Fragment>
        );
      })}
    </article>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  let { slug } = await params;
  let docs = getComponentDocs();
  let doc = docs.find((d) => d.slug === slug);
  if (!doc) {
    notFound();
  }
  let { title, description } = doc.metadata;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${baseUrl}/components/${doc.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
