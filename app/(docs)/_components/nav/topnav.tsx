"use client";

import {
  GithubLogoIcon,
  ListIcon,
  XIcon,
  XLogoIcon,
} from "@phosphor-icons/react";
import { useState } from "react";
import { Logo } from "@/app/_components/logo";
import { ThemeToggle } from "@/app/_components/theme-toggle";
import { Button, LinkButton } from "@/shim-ui/button";
import { Dialog } from "@/shim-ui/dialog";
import { Link } from "@/shim-ui/link";
import { Separator } from "@/shim-ui/separator";
import { Tooltip, TooltipTrigger } from "@/shim-ui/tooltip";
import { type NavItem, Navigation } from "./navigation";

export function TopNav(props: { items: NavItem[] }) {
  let [isOpen, setOpen] = useState(false);

  return (
    <aside className="sticky top-0 z-20 flex shrink-0 flex-col border-neutral-3 border-b bg-background px-1 text-sm lg:hidden">
      <header className="sticky top-0 flex shrink-0 items-center justify-between gap-1 p-1">
        <Link
          className="flex items-center gap-1 px-2 no-underline"
          href="/"
          intent="neutral"
        >
          <Logo size={2} />
        </Link>

        <div className="flex gap-1.5">
          <div className="flex items-stretch px-2">
            <ThemeToggle size={2} />
          </div>

          <Separator className="my-1" orientation="vertical" />

          <Button
            intent="neutral"
            isIconOnly
            onPress={() => setOpen(true)}
            size={4}
            variant="ghost"
          >
            <ListIcon size={16} />
          </Button>

          <Dialog
            aria-label="Navigation"
            className="h-full max-w-lg gap-0 p-0"
            isDismissable
            isOpen={isOpen}
            onOpenChange={setOpen}
          >
            <div className="flex gap-1.5 p-3">
              <TooltipTrigger>
                <LinkButton
                  href="https://twitter.com/kkga_"
                  intent="neutral"
                  isIconOnly
                  size={4}
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
                  isIconOnly
                  size={4}
                  target="_blank"
                  variant="ghost"
                >
                  <GithubLogoIcon size={16} weight="duotone" />
                </LinkButton>
                <Tooltip>Go to GitHub</Tooltip>
              </TooltipTrigger>

              <Button
                className="ml-auto"
                intent="neutral"
                isIconOnly
                onPress={() => setOpen(false)}
                size={4}
                variant="soft"
              >
                <XIcon size={16} weight="bold" />
              </Button>
            </div>

            <div className="flex-1 overflow-auto">
              <Navigation
                items={props.items}
                onAction={() => setOpen(false)}
                size={2}
              />
            </div>
          </Dialog>
        </div>
      </header>
    </aside>
  );
}
