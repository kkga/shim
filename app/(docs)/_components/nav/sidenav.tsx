import { Logo } from "@/app/_components/logo";
import { ThemeToggle } from "@/app/_components/theme-toggle";
import { Link } from "@/shim-ui/link";
import { type NavItem, Navigation } from "./navigation";

export function SideNav(props: { items: NavItem[] }) {
  return (
    <aside
      className="sticky top-0 z-20 hidden h-svh shrink-0 flex-col overflow-auto bg-panel text-sm lg:flex"
      style={{ scrollbarWidth: "thin" }}
    >
      <header className="sticky top-0 flex shrink-0 items-center gap-1 px-2 pt-3 pb-2">
        <Link className="mr-auto px-2" href="/" intent="neutral">
          <Logo className="text-neutral-text-contrast" />
        </Link>

        <div className="px-1">
          <ThemeToggle />
        </div>
      </header>

      <div className="grow overflow-auto">
        <Navigation items={props.items} />
      </div>
    </aside>
  );
}
