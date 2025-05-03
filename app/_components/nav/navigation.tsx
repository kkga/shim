"use client"

import { focusStyle } from "@lib/style"
import {
  ArrowSquareOut,
  Article,
  Calendar,
  Cards,
  CheckFat,
  CursorClick,
  FlagBanner,
  GithubLogo,
  HandGrabbing,
  HouseSimple,
  Lightning,
  Palette,
  Path,
  Rows,
  Swatches,
  Textbox,
  WarningDiamond,
  XLogo,
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
  ListBoxSection,
} from "react-aria-components"
import { tv } from "tailwind-variants"

export interface NavItem {
  name: string
  src: string
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
  Color: <Palette weight="duotone" size={16} />,
}

const guideIcons: Record<string, React.ReactNode> = {
  "Get started": <FlagBanner weight="duotone" size={16} />,
  Theming: <Swatches weight="duotone" size={16} />,
  Changelog: <Lightning weight="duotone" size={16} />,
  GitHub: <GithubLogo weight="duotone" size={16} />,
  Twitter: <XLogo weight="duotone" size={16} />,
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
      "text-neutral-text col-span-full flex items-center font-medium leading-none",
    headerIcon: "text-neutral-text flex items-center justify-center",
    item: [
      focusStyle(),
      "font-book text-neutral-text-contrast flex items-center rounded leading-none",
    ],
  },
  variants: {
    size: {
      1: {
        header: "h-7 gap-2 px-2 text-xs leading-7",
        headerIcon: "size-7",
        item: "h-7 gap-2 px-2 text-sm leading-7",
      },
      2: {
        header: "h-8 gap-2 px-2 text-[13px] leading-8",
        headerIcon: "size-8",
        item: "h-8 gap-2 px-2 text-sm leading-8",
      },
    },
    isDisabled: {
      true: { item: "text-neutral-text-subtle" },
    },
    isHovered: {
      true: { item: "bg-neutral-bg-hover" },
    },
    isSelected: {
      true: { item: "bg-neutral-bg-active text-neutral-text-contrast" },
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
  let { header: headerStyle, item: itemStyle } = style({ size })

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
      <div className="px-3 py-0.5">
        <SearchField
          variant="outline"
          size={size > 1 ? 3 : 2}
          aria-label="Filter navigation items"
          prefixIcon={null}
          placeholder="Filter"
          value={filter}
          onChange={setFilter}
          onClear={() => setFilter("")}
        />
      </div>

      <nav
        className="grow overflow-y-scroll px-3 py-4"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black 16px )",
        }}
      >
        <ListBox
          key={`${items.length}-${filter}`}
          selectionMode="single"
          aria-label="Navigation"
          className="grid auto-cols-fr gap-1"
          items={sections}
          selectedKeys={[pathname]}
          layout="grid"
          renderEmptyState={() => (
            <p className="text-neutral-text-subtle p-4 text-center text-sm font-medium">
              Nothing found
            </p>
          )}
        >
          {({ section, items }) => (
            <ListBoxSection
              id={section}
              className="col-span-full mb-4 grid grid-cols-subgrid gap-y-0.5"
            >
              {section !== "Intro" && (
                <Header className={headerStyle()} key={section}>
                  {categoryIcons[section]}
                  {section}
                  <div className="bg-neutral-4 h-px grow" />
                </Header>
              )}
              <Collection items={items}>
                {({ src, name, status }) => (
                  <ListBoxItem
                    onAction={onAction}
                    textValue={name}
                    id={src.startsWith("http") ? src : `/docs/${src}`}
                    key={src.startsWith("http") ? src : `/docs/${src}`}
                    href={
                      status !== "planned" ?
                        src.startsWith("http") ?
                          src
                        : `/docs/${src}`
                      : undefined
                    }
                    target={src.startsWith("http") ? "_blank" : undefined}
                    className={({ isHovered, isSelected, isDisabled }) =>
                      itemStyle({
                        isHovered,
                        isSelected,
                        isDisabled,
                      })
                    }
                    isDisabled={status === "planned"}
                  >
                    {({ isHovered }) => (
                      <>
                        {section === "Intro" ? guideIcons[name] : null}
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

                        {isHovered && src.startsWith("http") && (
                          <ArrowSquareOut
                            className="text-neutral-text ml-auto"
                            size={16}
                          />
                        )}
                      </>
                    )}
                  </ListBoxItem>
                )}
              </Collection>
            </ListBoxSection>
          )}
        </ListBox>
      </nav>
    </div>
  )
}
