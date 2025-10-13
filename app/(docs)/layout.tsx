import { useMemo } from "react";
import { SideNav } from "./_components/nav/sidenav";
import { TopNav } from "./_components/nav/topnav";
import { getGuides } from "./[slug]/utils";
import { getComponentDocs } from "./components/[slug]/utils";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let docs = getComponentDocs({ excludePlanned: false });
  let guides = getGuides();

  let navItems = useMemo(
    () => [
      ...guides.map((guide) => ({
        src: `${guide.slug}`,
        name: guide.metadata.title,
        category: "Intro",
      })),
      {
        src: "https://github.com/kkga/shim",
        name: "GitHub",
        category: "Intro",
      },
      {
        src: "https://twitter.com/kkga_",
        name: "Twitter",
        category: "Intro",
      },
      ...docs.map((doc) => ({
        src: `components/${doc.slug}`,
        name: doc.metadata.title,
        category: doc.metadata.category,
        status: doc.metadata.status,
      })),
    ],
    [docs, guides]
  );

  return (
    <div className="flex min-h-svh flex-col lg:grid lg:grid-cols-[1fr_var(--sidebar-width)_var(--content-width)_1fr]">
      <SideNav items={navItems} />
      <TopNav items={navItems} />

      <main className="min-h-screen w-full border-neutral-3 border-r bg-background text-[15px] leading-normal lg:col-3 lg:justify-self-center">
        {children}
      </main>
    </div>
  );
}
