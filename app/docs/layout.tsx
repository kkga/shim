import { Sidebar } from "@/components/sidebar"
import { getComponentDocs, getGuides } from "@/docs/lib/utils"
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
        slug: doc.slug,
        name: doc.metadata.name,
        category: doc.metadata.category,
        status: doc.metadata.status,
      })),
    ]
  }, [docs, guides])

  return (
    <div className="flex min-h-svh">
      <div className="w-80 shrink-0">
        <Sidebar items={navItems} />
      </div>

      <main className="flex-1 px-8 py-16">
        <div className="mx-auto max-w-4xl text-[14px] leading-normal [&_.s-box]:-mx-4">
          {children}
        </div>
      </main>
    </div>
  )
}
