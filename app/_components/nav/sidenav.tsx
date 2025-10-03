import { GithubLogoIcon, XLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { LinkButton } from "@/shim-ui/button";
import { Link } from "@/shim-ui/link";
import { Tooltip, TooltipTrigger } from "@/shim-ui/tooltip";
import { Logo } from "../logo";
import { ThemeToggle } from "../theme-toggle";
import { type NavItem, Navigation } from "./navigation";

export function SideNav(props: { items: NavItem[] }) {
  return (
    <aside
      className="sticky top-0 z-20 hidden h-svh shrink-0 flex-col overflow-auto border-neutral-3 border-r bg-background text-sm lg:flex"
      style={{ scrollbarWidth: "thin" }}
    >
      <header className="sticky top-0 flex shrink-0 items-center gap-1 py-2 pr-3 pl-3">
        <Link className="px-2" href="/" intent="neutral">
          <Logo className="text-neutral-text-contrast" />
        </Link>

        <div className="ml-auto px-1">
          <ThemeToggle />
        </div>

        <TooltipTrigger>
          <LinkButton
            href="https://twitter.com/kkga_"
            intent="neutral"
            target="_blank"
            variant="ghost"
          >
            <XLogoIcon size={16} weight="duotone" />
          </LinkButton>
          <Tooltip>Go to Twitter</Tooltip>
        </TooltipTrigger>

        <TooltipTrigger>
          <LinkButton
            href="https://github.com/kkga/shim"
            intent="neutral"
            target="_blank"
            variant="ghost"
          >
            <GithubLogoIcon size={16} weight="duotone" />
          </LinkButton>
          <Tooltip>Go to GitHub</Tooltip>
        </TooltipTrigger>
      </header>

      <div className="grow overflow-auto">
        <Navigation items={props.items} />
      </div>
    </aside>
  );
}
