"use client"

import { compose, cva, focusInsetStyle } from "@lib/utils"
import {
  Article,
  Cards,
  CheckFat,
  CursorClick,
  HouseSimple,
  Path,
  Rows,
  Textbox,
  WarningDiamond,
} from "@phosphor-icons/react"
import { Badge } from "@ui/badge"
import { SearchField } from "@ui/search-field"
import { usePathname } from "next/navigation"
import { useMemo, useState } from "react"
import {
  Collection,
  Header,
  ListBox,
  ListBoxItem,
  Section as RACSection,
} from "react-aria-components"

export interface NavItem {
  name: string
  slug: string
  category: string
  status?: string
}

const categoryIcons: Record<string, React.ReactNode> = {
  Intro: <HouseSimple weight="duotone" size={16} />,
  Overlays: <Cards weight="duotone" size={16} />,
  Forms: <Textbox weight="duotone" size={16} />,
  Status: <WarningDiamond weight="duotone" size={16} />,
  Buttons: <CursorClick weight="duotone" size={16} />,
  Pickers: <CheckFat weight="duotone" size={16} />,
  Navigation: <Path weight="duotone" size={16} />,
  Collections: <Rows weight="duotone" size={16} />,
  Content: <Article weight="duotone" size={16} />,
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

const itemStyle = compose(
  focusInsetStyle,
  cva({
    base: [
      "flex h-6 gap-2 items-center rounded-md pl-2 pr-1 text-sm text-neutral-text",
      // hovered
      "data-[hovered]:bg-neutral-bg-hover",
      // selected
      "data-[selected]:bg-neutral-bg-active data-[selected]:text-neutral-text-contrast",
    ],
  }),
)

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
      <div className="px-4">
        <SearchField
          aria-label="Filter navigation items"
          prefixIcon={null}
          placeholder="Filter"
          value={filter}
          onChange={setFilter}
          onClear={() => setFilter("")}
          className="w-full"
          variant="soft"
        />
      </div>

      <nav
        className="grow overflow-y-scroll py-6 px-4"
        style={{
          maskImage:
            "linear-gradient(transparent, black 2rem, black calc(100% - 2rem), transparent)",
        }}
      >
        <ListBox
          key={`${items.length}-${filter}`}
          selectionMode="single"
          aria-label="Navigation"
          className="flex flex-col gap-4"
          items={sections}
          selectedKeys={[pathname]}
          layout="grid"
          renderEmptyState={() => (
            <p className="text-center text-sm text-neutral-placeholder">
              Nothing found
            </p>
          )}
        >
          {({ section, items }) => (
            <RACSection id={section} className="grid grid-cols-2 gap-1">
              <Header className="col-span-full flex h-6 items-center gap-1.5 text-xs font-medium text-neutral-10">
                {categoryIcons[section]}
                {section}
                <div className="h-px grow bg-neutral-3" />
              </Header>
              <Collection items={items}>
                {({ slug, name, status }) => (
                  <ListBoxItem
                    textValue={name}
                    id={`/docs/${slug}`}
                    href={`/docs/${slug}`}
                    className={itemStyle}
                  >
                    {name}
                    {status && (
                      <Badge size={1} intent="neutral">
                        {status[0].toUpperCase() + status.slice(1)}
                      </Badge>
                    )}
                  </ListBoxItem>
                )}
              </Collection>
            </RACSection>
          )}
        </ListBox>
      </nav>
    </>
  )
}
