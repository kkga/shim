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
        src: `guides/${guide.slug}`,
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
        name: doc.metadata.name,
        category: doc.metadata.category,
        status: doc.metadata.status,
      })),
    ]
  }, [docs, guides])

  return (
    <div className="flex min-h-svh flex-col lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(1rem,1fr)_minmax(var(--content-width-min),var(--content-width-max))_minmax(1rem,1fr)]">
      <SideNav items={navItems} />
      <TopNav items={navItems} />

      <main className="lg:col-3 lg:border-neutral-3 font-book bg-background min-h-screen w-full text-sm leading-normal lg:justify-self-center lg:border-x">
        {children}
      </main>
    </div>
  )
}
