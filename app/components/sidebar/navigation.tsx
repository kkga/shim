"use client"

import { focusStyle } from "@lib/style"
import {
  Article,
  Calendar,
  Cards,
  CheckFat,
  CursorClick,
  HandGrabbing,
  HouseSimple,
  Path,
  Rows,
  Textbox,
  WarningDiamond,
} from "@phosphor-icons/react"
import { Badge } from "@ui/Badge"
import { SearchField } from "@ui/SearchField"
import { usePathname } from "next/navigation"
import { useMemo, useState } from "react"
import {
  Collection,
  Header,
  ListBox,
  ListBoxItem,
  ListBoxSection as RACListBoxSection,
} from "react-aria-components"
import { tv } from "tailwind-variants"

export interface NavItem {
  name: string
  slug: string
  category: string
  status?: string
}

const categoryIcons: Record<string, React.ReactNode> = {
  Intro: (
    <HouseSimple weight="duotone" className="text-neutral-text" size={16} />
  ),
  Overlays: <Cards weight="duotone" className="text-neutral-text" size={16} />,
  Forms: <Textbox weight="duotone" className="text-neutral-text" size={16} />,
  Status: (
    <WarningDiamond weight="duotone" className="text-neutral-text" size={16} />
  ),
  Buttons: (
    <CursorClick weight="duotone" className="text-neutral-text" size={16} />
  ),
  Pickers: (
    <CheckFat weight="duotone" className="text-neutral-text" size={16} />
  ),
  Navigation: <Path weight="duotone" className="text-neutral-text" size={16} />,
  Collections: (
    <Rows weight="duotone" className="text-neutral-text" size={16} />
  ),
  Content: <Article weight="duotone" className="text-neutral-text" size={16} />,
  "Date and time": (
    <Calendar weight="duotone" className="text-neutral-text" size={16} />
  ),
  "Drag and drop": (
    <HandGrabbing weight="duotone" className="text-neutral-text" size={16} />
  ),
}

const categorizeItems = (items: NavItem[]) => {
  const categories = Array.from(
    new Set(items.map((item) => item.category)),
  ).sort((a, b) =>
    a === "Intro" ? -1
    : b === "Intro" ? 1
    : a.localeCompare(b),
  )

  return categories.reduce(
    (acc, category) => {
      acc[category] = items.filter((item) => item.category === category)
      return acc
    },
    {} as Record<string, NavItem[]>,
  )
}

const filterItems = (items: NavItem[], filter?: string) => {
  if (!items || !filter) return items

  const lowerFilter = filter.toLowerCase()
  return items.filter(
    ({ name, category }) =>
      name.toLowerCase().includes(lowerFilter) ||
      category.toLowerCase().includes(lowerFilter),
  )
}

const itemStyle = tv({
  extend: focusStyle,
  base: [
    "font-book text-neutral-text flex h-6 items-center gap-1.5 rounded px-1.5 text-xs",
    // hovered
    "data-[hovered]:bg-neutral-bg-hover",
    // selected
    "data-[selected]:bg-neutral-bg-active data-[selected]:text-neutral-text-contrast",
  ],
})

export function Navigation({ items }: { items: NavItem[] }) {
  let pathname = usePathname()
  let [filter, setFilter] = useState("")

  let sections = useMemo(() => {
    let filteredItems = filterItems(items, filter)
    let itemsByCategory = categorizeItems(filteredItems)
    return [
      ...Object.entries(itemsByCategory).map(([section, items]) => ({
        section,
        items,
      })),
    ]
  }, [filter, items])

  return (
    <>
      <div className="sticky top-10 flex flex-col">
        <div className="bg-panel pb-1">
          <SearchField
            aria-label="Filter navigation items"
            prefixIcon={null}
            placeholder="Filter"
            value={filter}
            onChange={setFilter}
            onClear={() => setFilter("")}
            className="w-full"
          />
        </div>
        <div className="from-panel h-4 bg-gradient-to-b to-transparent" />
      </div>

      <nav className="shrink-0 grow pb-8 pt-2">
        <ListBox
          key={`${items.length}-${filter}`}
          selectionMode="single"
          aria-label="Navigation"
          className="flex flex-col gap-6"
          items={sections}
          selectedKeys={[pathname]}
          layout="grid"
          renderEmptyState={() => (
            <p className="text-neutral-placeholder text-center text-sm">
              Nothing found
            </p>
          )}
        >
          {({ section, items }) => (
            <RACListBoxSection
              id={section}
              className="grid grid-cols-2 gap-0.5"
            >
              <Header className="text-neutral-text-contrast col-span-full flex h-6 items-center gap-1.5 px-1.5 text-xs font-medium">
                {categoryIcons[section]}
                {section}
                <div className="bg-neutral-4 h-px grow" />
              </Header>
              <Collection items={items}>
                {({ slug, name, status }) => (
                  <ListBoxItem
                    textValue={name}
                    id={`/docs/${slug}`}
                    href={status !== "planned" ? `/docs/${slug}` : undefined}
                    className={itemStyle({
                      class:
                        status === "planned" ? "text-neutral-placeholder!" : "",
                    })}
                    isDisabled={status === "planned"}
                  >
                    {name}
                    {status && (
                      <Badge size={1} intent="neutral" className="text-current">
                        {status[0].toUpperCase() + status.slice(1)}
                      </Badge>
                    )}
                  </ListBoxItem>
                )}
              </Collection>
            </RACListBoxSection>
          )}
        </ListBox>
      </nav>
    </>
  )
}
