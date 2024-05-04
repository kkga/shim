'use client'

import { compose, cva, focusInsetStyle } from '@lib/utils'
import {
  Cards,
  CursorClick,
  HouseSimple,
  List,
  Path,
  Rows,
  Textbox,
  WarningDiamond,
} from '@phosphor-icons/react'
import { SearchField } from '@ui/search-field'
import { usePathname } from 'next/navigation'
import { useMemo, useState } from 'react'
import {
  Collection,
  Header,
  ListBox,
  ListBoxItem,
  Section,
} from 'react-aria-components'

export interface NavItem {
  name: string
  slug: string
  category: string
}

const itemStyle = compose(
  focusInsetStyle,
  cva({
    base: [
      'flex h-6 items-center rounded-md px-2 text-sm text-neutral-text-contrast',
      // hovered
      'hover:bg-accent-bg-hover',
      // focused
      // '-outline-offset-1 outline-accent-focus-ring focus:outline-1',
      // selected
      'data-[selected]:bg-accent-bg-active data-[selected]:text-accent-text-contrast',
    ],
  }),
)

export function Navigation({ items }: { items: NavItem[] }) {
  const pathname = usePathname()
  const [filter, setFilter] = useState('')

  const filteredItems = useMemo(
    () => filterItems(items, filter),
    [items, filter],
  )

  const sections = useMemo(() => {
    const itemsByCategory = getItemsByCategory(filteredItems)
    return [
      ...Object.entries(itemsByCategory).map(([section, items]) => ({
        section,
        items,
      })),
    ]
  }, [filteredItems])

  return (
    <>
      <SearchField
        aria-label="Filter navigation items"
        prefixIcon={null}
        placeholder="Filter"
        value={filter}
        onChange={setFilter}
        onClear={() => setFilter('')}
        className="w-full"
        variant="soft"
      />

      <nav
        className="grow overflow-y-scroll py-5"
        style={{
          maskImage:
            'linear-gradient(transparent, black 2rem, black calc(100% - 2rem), transparent)',
        }}
      >
        <ListBox
          key={`${items.length}-${filter}`}
          selectionMode="single"
          aria-label="Navigation"
          className="flex flex-col gap-6"
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
            <Section id={section} className="grid grid-cols-2 gap-1">
              <Header className="col-span-full flex h-6 items-center gap-1.5  text-xs font-medium text-neutral-9">
                {categoryIcons[section]}
                {section}
                <div className="h-px grow bg-neutral-4"></div>
              </Header>
              <Collection items={items}>
                {({ slug, name }) => (
                  <ListBoxItem
                    textValue={name}
                    id={`/docs/${slug}`}
                    href={`/docs/${slug}`}
                    className={itemStyle()}
                  >
                    {name}
                  </ListBoxItem>
                )}
              </Collection>
            </Section>
          )}
        </ListBox>
      </nav>
    </>
  )
}

const getItemsByCategory = (items: NavItem[]) => {
  return items.reduce(
    (acc, { name, category, slug }) => {
      if (!acc[category]) {
        acc[category] = []
      }

      acc[category].push({ name, slug, category })

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

const categoryIcons: Record<string, React.ReactNode> = {
  Intro: <HouseSimple weight="duotone" size={16} />,
  Overlays: <Cards weight="duotone" size={16} />,
  Forms: <Textbox weight="duotone" size={16} />,
  Status: <WarningDiamond weight="duotone" size={16} />,
  Buttons: <CursorClick weight="duotone" size={16} />,
  Pickers: <List weight="duotone" size={16} />,
  Navigation: <Path weight="duotone" size={16} />,
  Collections: <Rows weight="duotone" size={16} />,
}
