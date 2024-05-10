import { Link } from "@ui/link"
import { Navigation, type NavItem } from "./navigation"
import { ThemeSwitch } from "./theme-switch"

export function Sidebar(props: { items: NavItem[] }) {
  return (
    <aside
      style={{ scrollbarWidth: "thin" }}
      className="fixed inset-0 right-auto flex w-[inherit] flex-col overflow-x-hidden overflow-y-scroll px-4 text-sm"
    >
      <header className="sticky top-0 flex h-10 shrink-0 items-center items-center justify-between gap-1 bg-[var(--color-bg-body)] px-2">
        <Link className="flex items-center gap-1 no-underline" href="/">
          <h1 className="text-sm font-semibold text-neutral-text">Shim</h1>
        </Link>

        <div className="flex gap-3">
          <Link
            intent="neutral"
            target="_blank"
            href="https://twitter.com/kkga_"
          >
            X
          </Link>

          <Link
            intent="neutral"
            target="_blank"
            href="https://github.com/kkga/shim"
          >
            GitHub
          </Link>
        </div>
      </header>

      <Navigation items={props.items} />

      <div className="sticky bottom-0 shrink-0 self-center p-2 pb-4">
        <ThemeSwitch />
      </div>
    </aside>
  )
}
