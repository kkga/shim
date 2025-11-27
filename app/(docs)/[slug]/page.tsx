import { cx } from "tailwind-variants";
import { getFileSource } from "@/app/_lib/utils";
import { DocHeader } from "@/app/(docs)/_components/doc-header";
import { mdxComponents } from "@/app/(docs)/_components/mdx-components";
import { Toc } from "@/app/(docs)/_components/toc";
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
  let { metadata } = guide;
  let { title, description } = metadata;

  let [styleUtilsSrc, themeUtilsSrc, themeCssSrc] = [
    getFileSource("shim-ui/lib/style.ts"),
    getFileSource("shim-ui/lib/theme.tsx"),
    getFileSource("shim-ui/css/theme.css"),
  ];

  let [styleUtilsUrl, themeUtilsUrl, themeCssUrl] = [
    `${GITHUB_FILE_URL}/lib/style.ts`,
    `${GITHUB_FILE_URL}/lib/theme.tsx`,
    `${GITHUB_FILE_URL}/css/theme.css`,
  ];

  let { default: GuideContent, toc } = await import(`./_content/${slug}.mdx`);
  let hasToc = toc && toc.length > 0;

  return (
    <>
      <DocHeader subtitle={description} title={title} />

      <div className="flex grow">
        <div className={cx("prose", slug === "changelog" && "prose-changelog")}>
          <GuideContent
            components={mdxComponents}
            styleUtilsSrc={styleUtilsSrc}
            styleUtilsUrl={styleUtilsUrl}
            themeCssSrc={themeCssSrc}
            themeCssUrl={themeCssUrl}
            themeUtilsSrc={themeUtilsSrc}
            themeUtilsUrl={themeUtilsUrl}
          />
        </div>

        {hasToc && (
          <aside className="hidden w-60 shrink-0 border-neutral-3 border-l xl:block">
            <nav className="sticky top-0 p-4">
              <Toc toc={toc} />
            </nav>
          </aside>
        )}
      </div>
    </>
  );
}
