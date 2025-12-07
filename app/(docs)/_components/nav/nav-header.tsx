import { GithubLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "@/app/_components/logo";
import { ThemeToggle } from "@/app/_components/theme-toggle";
import { Link } from "@/shim-ui/link";
import { Separator } from "@/shim-ui/separator";
import { NavPalette } from "./nav-palette";
import type { NavItem } from "./utils";

interface Props {
  navSections: {
    section: string;
    items: NavItem[];
  }[];
}

export function NavHeader({ navSections }: Props) {
  return (
    <header className="flex h-12 shrink-0 items-center justify-between px-2 lg:px-3">
      <Link className="px-2" href="/" intent="neutral">
        <Logo className="text-neutral-text-contrast" />
      </Link>

      <div className="flex items-center gap-2">
        <Link
          className="flex items-center gap-2 px-2 text-sm lg:hidden"
          href="https://github.com/kkga/shim"
          intent="neutral"
          target="_blank"
        >
          <GithubLogoIcon size={16} />
          GitHub
        </Link>

        <Separator
          className="my-1 bg-neutral-3 lg:hidden"
          orientation="vertical"
        />

        <NavPalette navSections={navSections} />
        <div className="flex lg:hidden">
          <ThemeToggle size={3} />
        </div>

        <div className="hidden lg:flex">
          <ThemeToggle size={2} />
        </div>
      </div>
    </header>
  );
}
