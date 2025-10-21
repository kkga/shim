import { Logo } from "@/app/_components/logo";
import { ThemeToggle } from "@/app/_components/theme-toggle";
import { Link } from "@/shim-ui/link";
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
    <header className="sticky top-0 flex shrink-0 items-center gap-3 border-neutral-3 border-b bg-background px-4 py-3">
      <Link className="mr-auto px-2" href="/" intent="neutral">
        <Logo className="text-neutral-text-contrast" />
      </Link>

      <ThemeToggle size={1} />
      <NavPalette navSections={navSections} />
    </header>
  );
}
