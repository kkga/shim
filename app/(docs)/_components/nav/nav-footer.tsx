import { GithubLogoIcon, XLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { ThemeToggle } from "@/app/_components/theme-toggle";
import { LinkButton } from "@/shim-ui/button";

export function NavFooter() {
  return (
    <footer className="hidden h-12 shrink-0 items-center gap-1 border-neutral-3 border-t px-3 lg:flex">
      <LinkButton
        href="https://github.com/kkga/shim"
        intent="neutral"
        size={1}
        target="_blank"
        variant="ghost"
      >
        <GithubLogoIcon size={16} />
        GitHub
      </LinkButton>
      <LinkButton
        className="mr-auto"
        href="https://twitter.com/kkga_"
        intent="neutral"
        size={1}
        target="_blank"
        variant="ghost"
      >
        <XLogoIcon size={16} />
        kkga_
      </LinkButton>

      <ThemeToggle size={1} />
    </footer>
  );
}
