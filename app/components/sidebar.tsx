'use client'

import { cx } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import {
  Collection,
  Header,
  ListBox,
  ListBoxItem,
  Section,
} from 'react-aria-components'
import { ThemeSwitch } from './theme-switch'

interface NavProps {
  items: { section: string; items: { slug: string; name: string }[] }[]
}

function Nav({ items }: NavProps) {
  const pathname = usePathname()

  return (
    <nav>
      <ListBox
        selectionMode="single"
        aria-label="Navigation"
        className="flex flex-col gap-3"
        items={items}
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
                    'flex h-6 items-center rounded px-2 text-sm text-neutral-text',
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
  )
}

export function Sidebar(props: NavProps) {
  return (
    <aside
      style={{ gridArea: 'aside' }}
      className="sticky top-0 flex max-h-svh flex-col overflow-scroll text-sm"
    >
      <header className="flex items-baseline justify-between gap-1 py-4 px-6">
        <h1 className="text-sm font-black text-neutral-text-contrast">Shim</h1>
      </header>
      <div className="grow p-4">
        <Nav items={props.items} />
      </div>
      <div className="sticky bottom-0 flex justify-start bg-neutral-base p-4">
        <ThemeSwitch />
      </div>
    </aside>
  )
}
