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
            <Header className="text-neutral-text-contrast h-7 px-2 text-sm flex items-center font-semibold">
              {section}
            </Header>
            <Collection items={items}>
              {({ slug, name }) => (
                <ListBoxItem
                  textValue={name}
                  id={`/docs/${slug}`}
                  href={`/docs/${slug}`}
                  className={cx(
                    'px-2 h-7 flex items-center rounded text-sm',
                    'hover:bg-neutral-bg-hover',
                    'data-[selected]:text-neutral-text-contrast data-[selected]:bg-neutral-bg-active'
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
      className="overflow-scroll sticky top-0 max-h-svh text-sm flex flex-col"
    >
      <header className="px-6 py-4 flex justify-between items-baseline gap-1">
        <h1 className="text-lg font-black text-neutral-text-contrast">Shim</h1>
      </header>
      <div className="grow p-4">
        <Nav items={props.items} />
      </div>
      <div className="sticky bottom-0 p-4 bg-neutral-base flex justify-start">
        <ThemeSwitch />
      </div>
    </aside>
  )
}
