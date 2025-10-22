import { useMemo } from "react";
import { NavHeader } from "./_components/nav/nav-header";
import { SideNav } from "./_components/nav/sidenav";
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
      {
        id: "github",
        src: "https://github.com/kkga/shim",
        name: "GitHub",
        category: "Overview",
      },
      {
        id: "twitter",
        src: "https://twitter.com/kkga_",
        name: "Twitter",
        category: "Overview",
      },
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
    <div className="flex min-h-svh flex-col lg:grid lg:grid-cols-[1fr_var(--sidebar-width)_var(--content-width)_1fr]">
      <div className="sticky top-0 z-20 col-start-2 flex flex-col overflow-auto border-neutral-3 bg-background lg:h-svh lg:border-x">
        <NavHeader navSections={navSections} />
        <SideNav className="hidden lg:block" navSections={navSections} />
      </div>

      <main className="@container/main min-h-screen w-full border-neutral-3 border-r bg-background text-[15px] leading-normal lg:col-3 lg:justify-self-center">
        {children}
      </main>
    </div>
  );
}
