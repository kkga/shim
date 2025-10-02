import { Suspense } from "react";
import { DocHeader } from "@/app/_components/doc-header";
import Toc from "@/app/_components/toc";
import { mdxToHtml } from "@/app/_lib/mdx";
import { getFileSource } from "@/app/_lib/utils";
import { getGuides } from "./utils";

export const dynamicParams = false;
export function generateStaticParams() {
  let params = getGuides().map((guide) => ({ slug: guide.slug }));
  return params;
}

const GITHUB_FILE_URL = "https://github.com/kkga/shim/blob/master";

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  let { slug } = await params;

  let guide = getGuides().find((g) => g.slug === slug);
  if (!guide) {
    throw new Error(`Guide not found for slug: ${slug}`);
  }
  let { metadata, source } = guide;
  let { title, description } = metadata;

  let [styleUtilsSrc, themeUtilsSrc, themeCssSrc] = [
    getFileSource("lib/style.ts"),
    getFileSource("lib/theme.tsx"),
    getFileSource("theme/theme.css"),
  ];

  let [styleUtilsUrl, themeUtilsUrl, themeCssUrl] = [
    `${GITHUB_FILE_URL}/lib/style.ts`,
    `${GITHUB_FILE_URL}/lib/theme.tsx`,
    `${GITHUB_FILE_URL}/theme/theme.css`,
  ];

  let { content, scope } = await mdxToHtml({
    source,
    scope: {
      styleUtilsSrc,
      themeUtilsSrc,
      themeCssSrc,
      styleUtilsUrl,
      themeUtilsUrl,
      themeCssUrl,
    },
  });

  return (
    <article className="grid grid-cols-1 text-[15px] text-neutral-text leading-normal md:grid-cols-[3fr_1fr]">
      <DocHeader subtitle={description} title={title} />
      <section className="p-6 lg:p-8">
        <Suspense fallback={<p>Loading...</p>}>{content}</Suspense>
      </section>
      {scope.toc && scope.toc.length > 0 && (
        <aside className="hidden min-w-[16rem] border-neutral-3 border-l px-6 py-6 md:block">
          <nav className="sticky top-6">
            <Toc toc={scope.toc} />
          </nav>
        </aside>
      )}
    </article>
  );
}
