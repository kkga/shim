import Link from 'next/link'
import { Navigation, type NavItem } from './navigation'
import { ThemeSwitch } from './theme-switch'

export function Sidebar(props: { items: NavItem[] }) {
  return (
    <aside
      style={{ gridArea: 'sidebar' }}
      className="sticky top-0 flex max-h-svh flex-col overflow-scroll p-4 text-sm"
    >
      <header className="mb-4 flex items-baseline justify-between gap-1 px-2">
        <Link href="/">
          <h1 className="text-sm font-black text-neutral-text-contrast">
            Shim
          </h1>
        </Link>
      </header>

      <Navigation items={props.items} />

      <ThemeSwitch />
    </aside>
  )
}
