import type { Metadata } from "next";
import { DocHeader } from "../_components/doc-header";
import { Link } from "../_components/mdx-components";
import { getComponentDocs } from "./[slug]/utils";

export const metadata: Metadata = {
  title: "Components",
  description: "Browse all available components.",
};

export default function ComponentsPage() {
  let components = getComponentDocs({ excludePlanned: true });

  // Group components by category
  let grouped = components.reduce(
    (acc, item) => {
      let category = item.metadata.category || "Other";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item);
      return acc;
    },
    {} as Record<string, typeof components>
  );

  return (
    <>
      <DocHeader
        subtitle={metadata.description}
        title={String(metadata.title)}
      />

      {Object.entries(grouped)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([category, items]) => (
          <section key={category}>
            <h2 className="mb-4 font-semibold text-lg text-neutral-text-contrast">
              {category}
            </h2>
            <ul className="w-fit space-y-4">
              {items.map(({ metadata: componentMeta, slug }) => (
                <li key={slug}>
                  <Link
                    className="mb-1 inline-block"
                    href={`/components/${slug}`}
                  >
                    <h3 className="font-medium">{componentMeta.title}</h3>
                  </Link>
                  <p className="text-[15px]/normal text-neutral-text">
                    {componentMeta.description}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}
    </>
  );
}
