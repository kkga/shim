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
  Intro: <HouseSimple weight="duotone" size={16} />,
  Overlays: <Cards weight="duotone" size={16} />,
  Forms: <Textbox weight="duotone" size={16} />,
  Status: <WarningDiamond weight="duotone" size={16} />,
  Buttons: <CursorClick weight="duotone" size={16} />,
  Pickers: <CheckFat weight="duotone" size={16} />,
  Navigation: <Path weight="duotone" size={16} />,
  Collections: <Rows weight="duotone" size={16} />,
  Content: <Article weight="duotone" size={16} />,
  "Date and time": <Calendar weight="duotone" size={16} />,
  "Drag and drop": <HandGrabbing weight="duotone" size={16} />,
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

const style = tv({
  slots: {
    header:
      "text-neutral-text-contrast col-span-full flex items-center font-medium",
    headerIcon: "text-neutral-text-contrast flex items-center justify-center",
    item: [
      focusStyle(),
      "font-book text-neutral-text flex items-center rounded",
    ],
  },
  variants: {
    size: {
      1: {
        header: "h-6 gap-1 text-xs",
        headerIcon: "size-6",
        item: "h-6 gap-1.5 px-1.5 text-xs",
      },
      2: {
        header: "h-8 text-sm",
        headerIcon: "size-8",
        item: "h-8 gap-2 px-2 text-sm",
      },
    },
    isDisabled: {
      true: {
        item: "text-neutral-placeholder",
      },
    },
    isHovered: {
      true: {
        item: "bg-neutral-bg-hover",
      },
    },
    isSelected: {
      true: {
        item: "bg-neutral-bg-active text-neutral-text-contrast",
      },
    },
  },
})

export function Navigation({
  items,
  onAction,
  size = 1,
}: {
  items: NavItem[]
  onAction?: () => void
  size?: 1 | 2
}) {
  let pathname = usePathname()
  let [filter, setFilter] = useState("")
  let {
    header: headerStyle,
    headerIcon: headerIconStyle,
    item: itemStyle,
  } = style({ size })

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
    <div className="relative flex h-full flex-col overflow-auto">
      <div className="bg-panel border-neutral-4 border-b p-3 pt-0.5">
        <SearchField
          size={size > 1 ? 3 : 1}
          variant="soft"
          aria-label="Filter navigation items"
          prefixIcon={null}
          placeholder="Filter"
          value={filter}
          onChange={setFilter}
          onClear={() => setFilter("")}
          className="w-full"
        />
      </div>

      <nav className="grow overflow-y-scroll p-3 pb-4">
        <ListBox
          key={`${items.length}-${filter}`}
          selectionMode="single"
          aria-label="Navigation"
          className="flex flex-col gap-6"
          items={sections}
          selectedKeys={[pathname]}
          onSelectionChange={() => {
            console.log("onSelectionChange")
          }}
          layout="grid"
          renderEmptyState={() => (
            <p className="text-neutral-placeholder p-4 text-center text-sm font-medium">
              Nothing found
            </p>
          )}
        >
          {({ section, items }) => (
            <RACListBoxSection
              id={section}
              className="grid grid-cols-2 gap-0.5"
            >
              {section !== "Intro" && (
                <Header className={headerStyle()} key={section}>
                  <div className={headerIconStyle()}>
                    {categoryIcons[section]}
                  </div>
                  {section}
                  <div className="bg-neutral-4 h-px grow" />
                </Header>
              )}
              <Collection items={items}>
                {({ slug, name, status }) => (
                  <ListBoxItem
                    onAction={onAction}
                    textValue={name}
                    id={`/docs/${slug}`}
                    href={status !== "planned" ? `/docs/${slug}` : undefined}
                    className={({ isHovered, isSelected, isDisabled }) =>
                      itemStyle({
                        isHovered,
                        isSelected,
                        isDisabled,
                      })
                    }
                    isDisabled={status === "planned"}
                  >
                    {name}
                    {status && (
                      <Badge
                        size={size}
                        intent="neutral"
                        className="text-current"
                      >
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
    </div>
  )
}
