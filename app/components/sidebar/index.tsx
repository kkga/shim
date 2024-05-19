import { GithubLogo, Shapes, XLogo } from "@phosphor-icons/react/dist/ssr"
import { LinkButton } from "@ui/button"
import { Link } from "@ui/link"
import { Separator } from "@ui/separator"
import { Tooltip, TooltipTrigger } from "@ui/tooltip"
import { Navigation, type NavItem } from "./navigation"
import { ThemeButton } from "./theme-button"

export function Sidebar(props: { items: NavItem[] }) {
  return (
    <aside
      style={{ scrollbarWidth: "thin" }}
      className="fixed inset-0 right-auto flex w-[inherit] flex-col overflow-x-hidden overflow-y-scroll border-r border-neutral-4 bg-panel px-4 text-sm"
    >
      <header className="sticky top-0 flex h-10 shrink-0 items-center items-center justify-between gap-1 bg-panel pl-1.5">
        <Link className="flex items-center gap-1.5 no-underline" href="/">
          <Shapes
            size={16}
            weight="fill"
            className="text-neutral-text-contrast"
          />
          <h1 className="text-xs font-medium text-neutral-text-contrast">
            Shim
          </h1>
        </Link>

        <div className="flex gap-1.5">
          <TooltipTrigger>
            <ThemeButton />
            <Tooltip>Toggle theme</Tooltip>
          </TooltipTrigger>

          <Separator className="my-1" orientation="vertical" />

          <TooltipTrigger>
            <LinkButton
              intent="neutral"
              target="_blank"
              variant="ghost"
              href="https://twitter.com/kkga_"
            >
              <XLogo size={16} weight="duotone" />
            </LinkButton>
            <Tooltip>Go to Twitter</Tooltip>
          </TooltipTrigger>

          <TooltipTrigger>
            <LinkButton
              intent="neutral"
              target="_blank"
              variant="ghost"
              href="https://github.com/kkga/shim"
            >
              <GithubLogo size={16} weight="duotone" />
            </LinkButton>
            <Tooltip>Go to GitHub</Tooltip>
          </TooltipTrigger>
        </div>
      </header>

      <Navigation items={props.items} />
    </aside>
  )
}
