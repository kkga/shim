'use client'

import { cx } from '@lib/utils'
import { SearchField } from '@ui/search-field'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo, useState } from 'react'
import {
  Collection,
  Header,
  ListBox,
  ListBoxItem,
  Section,
} from 'react-aria-components'
import { ThemeSwitch } from './theme-switch'

interface NavItem {
  name: string
  slug: string
  category: string
}

interface NavProps {
  items: NavItem[]
  filter?: string
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

function Nav({ items, filter }: NavProps) {
  const pathname = usePathname()

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
    <nav>
      {sections.length > 0 ?
        <ListBox
          key={`${items.length}-${filter}`}
          selectionMode="single"
          aria-label="Navigation"
          className="flex flex-col gap-3"
          items={sections}
          selectedKeys={[pathname]}
        >
          {({ section, items }) => (
            <Section id={section} className="flex flex-col gap-px">
              <Header className="flex h-6 items-center px-2 text-sm font-semibold text-neutral-text-contrast">
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
      : <p className="text-center text-sm text-neutral-placeholder">
          Nothing found
        </p>
      }
    </nav>
  )
}

export function Sidebar(props: NavProps) {
  const [filter, setFilter] = useState('')

  return (
    <aside
      style={{ gridArea: 'aside' }}
      className="sticky top-0 flex max-h-svh flex-col overflow-scroll text-sm"
    >
      <header className="flex items-baseline justify-between gap-1 py-4 px-6">
        <Link href="/">
          <h1 className="text-sm font-black text-neutral-text-contrast">
            Shim
          </h1>
        </Link>
      </header>

      <div className="sticky top-0 flex justify-start bg-neutral-base py-2 px-4">
        <SearchField
          aria-label="Filter navigation items"
          prefixIcon={'filter'}
          placeholder="Filter"
          value={filter}
          onChange={setFilter}
          onClear={() => setFilter('')}
          className="w-full"
        />
      </div>

      <div className="grow p-4">
        <Nav filter={filter} items={props.items} />
      </div>
      <div className="sticky bottom-0 flex justify-start bg-neutral-base p-4">
        <ThemeSwitch />
      </div>
    </aside>
  )
}
