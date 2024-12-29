import { GithubLogo, XLogo } from "@phosphor-icons/react/dist/ssr"
import { LinkButton } from "@ui/Button"
import { Link } from "@ui/Link"
import { Separator } from "@ui/Separator"
import { Tooltip, TooltipTrigger } from "@ui/Tooltip"
import clsx from "clsx"
import { Logo } from "../logo"
import { Navigation, type NavItem } from "./navigation"
import { ThemeButton } from "./theme-button"

export function SideNav(props: { items: NavItem[] }) {
  return (
    <aside
      className={clsx(
        "sticky top-0 z-20 hidden h-svh lg:flex",
        "bg-panel shrink-0 flex-col overflow-auto text-sm",
      )}
      style={{ scrollbarWidth: "thin" }}
    >
      <header className="bg-panel sticky top-0 flex shrink-0 items-center justify-between gap-1 px-3 py-2">
        <Link
          intent="neutral"
          className="flex size-6 items-center justify-center no-underline"
          href="/"
        >
          <Logo withText={false} />
        </Link>

        <div className="flex gap-1.5">
          <TooltipTrigger>
            <ThemeButton />
            <Tooltip>Toggle appearance</Tooltip>
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

      <div className="grow overflow-auto">
        <Navigation items={props.items} />
      </div>
    </aside>
  )
}
