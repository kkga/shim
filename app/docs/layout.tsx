import { SideNav } from "@/app/components/nav/sidenav"
import { getComponentDocs, getGuides } from "@/app/docs/lib/utils"
import { useMemo } from "react"
import { TopNav } from "../components/nav/topnav"

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
        slug: doc.slug,
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

      <main className="overflow-auto text-sm leading-normal">{children}</main>
    </div>
  )
}
