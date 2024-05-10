import { GithubLogo, XLogo } from "@phosphor-icons/react/dist/ssr"
import { Link } from "@ui/link"
import { ButtonLink } from "./button-link"
import { Navigation, type NavItem } from "./navigation"
import { ThemeButton } from "./theme-button"
import { Separator } from "@ui/separator"
import { Tooltip, TooltipTrigger } from "@ui/tooltip"

export function Sidebar(props: { items: NavItem[] }) {
  return (
    <aside
      style={{ scrollbarWidth: "thin" }}
      className="fixed inset-0 right-auto flex w-[inherit] flex-col overflow-x-hidden overflow-y-scroll px-4 text-sm"
    >
      <header className="sticky top-0 flex h-10 shrink-0 items-center items-center justify-between gap-1 bg-[var(--color-bg-body)] pl-2">
        <Link className="flex items-center gap-1 no-underline" href="/">
          <h1 className="text-sm font-semibold text-neutral-text">Shim</h1>
        </Link>

        <div className="flex gap-2">
          <TooltipTrigger>
            <ThemeButton />
            <Tooltip>Toggle theme</Tooltip>
          </TooltipTrigger>

          <Separator className="my-1" orientation="vertical" />

          <TooltipTrigger>
            <ButtonLink
              intent="neutral"
              target="_blank"
              isSquare
              variant="ghost"
              href="https://twitter.com/kkga_"
            >
              <XLogo size={16} weight="duotone" />
            </ButtonLink>
            <Tooltip>Go to Twitter</Tooltip>
          </TooltipTrigger>

          <TooltipTrigger>
            <ButtonLink
              intent="neutral"
              target="_blank"
              isSquare
              variant="ghost"
              href="https://github.com/kkga/shim"
            >
              <GithubLogo size={16} weight="duotone" />
            </ButtonLink>
            <Tooltip>Go to GitHub</Tooltip>
          </TooltipTrigger>
        </div>
      </header>

      <Navigation items={props.items} />
    </aside>
  )
}
