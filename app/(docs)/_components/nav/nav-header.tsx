import { Logo } from "@/app/_components/logo";
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
    <header className="flex h-12 shrink-0 items-center justify-between border-neutral-3 border-b px-2 lg:px-3">
      <Link className="px-2" href="/" intent="neutral">
        <Logo className="text-neutral-text-contrast" />
      </Link>
      <NavPalette navSections={navSections} />
    </header>
  );
}
