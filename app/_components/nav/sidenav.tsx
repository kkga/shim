import { GithubLogo, XLogo } from "@phosphor-icons/react/dist/ssr"
import { LinkButton } from "@ui/Button"
import { Link } from "@ui/Link"
import { Tooltip, TooltipTrigger } from "@ui/Tooltip"
import { Logo } from "../logo"
import { Navigation, type NavItem } from "./navigation"
import { ThemeToggle } from "./theme-toggle"

export function SideNav(props: { items: NavItem[] }) {
  return (
    <aside
      className="bg-background border-neutral-3 sticky top-0 z-20 hidden h-svh shrink-0 flex-col overflow-auto border-r text-sm lg:flex"
      style={{ scrollbarWidth: "thin" }}
    >
      <header className="sticky top-0 flex shrink-0 items-center gap-1 py-2 pl-3 pr-3">
        <Link intent="neutral" className="px-2" href="/">
          <Logo className="text-neutral-text-contrast" />
        </Link>

        <div className="ml-auto px-1">
          <ThemeToggle />
        </div>

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
      </header>

      <div className="grow overflow-auto">
        <Navigation items={props.items} />
      </div>
    </aside>
  )
}
