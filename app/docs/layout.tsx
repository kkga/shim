import { SideNav } from "@/app/_components/nav/sidenav"
import { TopNav } from "@/app/_components/nav/topnav"
import { getComponentDocs, getGuides } from "@/app/_lib/utils"
import { useMemo } from "react"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let docs = getComponentDocs()
  let guides = getGuides()

  let navItems = useMemo(() => {
    return [
      ...guides.map((guide) => ({
        slug: `guides/${guide.slug}`,
        name: guide.metadata.title,
        category: "Intro",
      })),
      ...docs.map((doc) => ({
        slug: `components/${doc.slug}`,
        name: doc.metadata.name,
        category: doc.metadata.category,
        status: doc.metadata.status,
      })),
    ]
  }, [docs, guides])

  return (
    <div className="flex min-h-svh flex-col lg:grid lg:grid-cols-[var(--sidebar-width)_1fr]">
      <SideNav items={navItems} />
      <TopNav items={navItems} />

      <main className="font-book overflow-auto text-sm leading-normal">
        {children}
      </main>
    </div>
  )
}
