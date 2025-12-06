import { useMemo } from "react";
import { Nav } from "./_components/nav/nav";
import { categorizeItems, type NavItem } from "./_components/nav/utils";
import { getGuides } from "./[slug]/utils";
import { getComponentDocs } from "./components/[slug]/utils";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let docs = getComponentDocs({ excludePlanned: false });
  let guides = getGuides();

  let navItems: NavItem[] = useMemo(
    () => [
      ...guides.map((guide) => ({
        id: guide.slug,
        src: `${guide.slug}`,
        name: guide.metadata.title,
        category: "Overview",
      })),
      ...docs.map((doc) => ({
        id: doc.slug,
        src: `components/${doc.slug}`,
        name: doc.metadata.title,
        category: doc.metadata.category,
        status: doc.metadata.status,
      })),
    ],
    [docs, guides]
  );

  let navSections = useMemo(() => {
    let itemsByCategory = categorizeItems(navItems);
    return [
      ...Object.entries(itemsByCategory).map(([section, categoryItems]) => ({
        id: section,
        section,
        items: categoryItems.map((item) => ({
          ...item,
          id: item.name,
        })),
      })),
    ];
  }, [navItems]);

  return (
    <div className="flex min-h-svh flex-col bg-background-subtle lg:grid lg:grid-cols-[var(--sidebar-width)_var(--content-width)_1fr] dark:bg-pure">
      <Nav navSections={navSections} />
      <main className="@container/main flex w-full grow flex-col border-neutral-3 bg-background text-base lg:border-x">
        <article className="flex grow flex-col">{children}</article>
      </main>
    </div>
  );
}
