import Link from 'next/link'
import { Navigation, type NavItem } from './navigation'
import { ThemeSwitch } from './theme-switch'

export function Sidebar(props: { items: NavItem[] }) {
  return (
    <aside
      style={{ gridArea: 'aside' }}
      className="sticky top-0 flex max-h-svh flex-col overflow-scroll text-sm"
    >
      <header className="flex items-baseline justify-between gap-1 pt-4 px-6">
        <Link href="/">
          <h1 className="text-sm font-black text-neutral-text-contrast">
            Shim
          </h1>
        </Link>
      </header>

      <div className="grow px-4">
        <Navigation items={props.items} />
      </div>
      <div className="sticky bottom-0 flex justify-start bg-neutral-base p-4">
        <ThemeSwitch />
      </div>
    </aside>
  )
}
