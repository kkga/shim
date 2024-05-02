import { GithubLogo, XLogo } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { Navigation, type NavItem } from './navigation'
import { ThemeSwitch } from './theme-switch'

export function Sidebar(props: { items: NavItem[] }) {
  return (
    <aside
      style={{ gridArea: 'sidebar' }}
      className="sticky top-0 flex max-h-svh flex-col overflow-scroll border-r border-neutral-3 bg-[var(--color-bg-panel)] p-4 text-sm"
    >
      <header className="mb-4 flex items-center justify-between gap-1 pl-2">
        <Link className="flex items-center gap-1" href="/">
          <h1 className="text-sm font-medium text-neutral-text-contrast">
            Shim
          </h1>
        </Link>

        <div className="flex gap-2">
          <Link
            target="_blank"
            className="flex size-6 items-center justify-center rounded-full hover:bg-neutral-bg"
            href="https://twitter.com/kkga_"
            title="Twitter"
          >
            <XLogo size={16} weight="duotone" />
          </Link>

          <Link
            target="_blank"
            className="flex size-6 items-center justify-center rounded-full hover:bg-neutral-bg"
            href="https://github.com/kkga/shim"
            title="GitHub"
          >
            <GithubLogo size={16} weight="duotone" />
          </Link>
        </div>
      </header>

      <Navigation items={props.items} />

      <ThemeSwitch />
    </aside>
  )
}
