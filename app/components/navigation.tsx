'use client'

import { SearchField } from '@ui/search-field'
import { cx } from 'cva'
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
      <div className="flex justify-start">
        <SearchField
          aria-label="Filter navigation items"
          prefixIcon={null}
          placeholder="Filter"
          value={filter}
          onChange={setFilter}
          onClear={() => setFilter('')}
          className="w-full"
        />
      </div>

      <nav
        className="grow overflow-scroll py-6"
        style={{
          maskImage:
            'linear-gradient(transparent, black 5%, black 95%, transparent)',
        }}
      >
        <ListBox
          key={`${items.length}-${filter}`}
          selectionMode="single"
          aria-label="Navigation"
          className="flex flex-col gap-3"
          items={sections}
          selectedKeys={[pathname]}
          renderEmptyState={() => (
            <p className="text-center text-sm text-neutral-placeholder">
              Nothing found
            </p>
          )}
        >
          {({ section, items }) => (
            <Section id={section} className="flex flex-col gap-px">
              <Header className="flex h-6 items-center px-2 text-sm font-medium text-neutral-text-contrast">
                {section}
              </Header>
              <Collection items={items}>
                {({ slug, name }) => (
                  <ListBoxItem
                    textValue={name}
                    id={`/docs/${slug}`}
                    href={`/docs/${slug}`}
                    className={cx(
                      'flex h-6 items-center rounded-md px-2 text-sm text-neutral-text',
                      '-outline-offset-1 outline-accent-focus-ring focus:outline-1',
                      'hover:bg-accent-bg-hover',
                      'data-[selected]:bg-accent-bg-active data-[selected]:text-accent-text-contrast',
                    )}
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
