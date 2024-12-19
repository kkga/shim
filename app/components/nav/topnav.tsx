"use client"

import { Dialog } from "@/components/Dialog"
import { Separator } from "@/components/Separator"
import { Tooltip, TooltipTrigger } from "@/components/Tooltip"
import { GithubLogo, List, X, XLogo } from "@phosphor-icons/react"
import { Button, LinkButton } from "@ui/Button"
import { Link } from "@ui/Link"
import clsx from "clsx"
import { useState } from "react"
import { Logo } from "../logo"
import { Navigation, type NavItem } from "./navigation"
import { ThemeButton } from "./theme-button"

export function TopNav(props: { items: NavItem[] }) {
  let [isOpen, setOpen] = useState(false)

  return (
    <aside
      className={clsx(
        "fixed top-0 z-20 w-full lg:hidden",
        "border-neutral-4 bg-panel flex shrink-0 flex-col overflow-x-hidden overflow-y-scroll border-b px-1 text-sm",
      )}
    >
      <header className="bg-panel sticky top-0 flex h-10 shrink-0 items-center justify-between gap-1">
        <Link
          intent="neutral"
          className="flex items-center gap-1 px-2 no-underline"
          href="/"
        >
          <Logo />
        </Link>

        <div className="flex gap-1.5">
          <TooltipTrigger>
            <ThemeButton size={3} />
            <Tooltip>Toggle theme</Tooltip>
          </TooltipTrigger>

          <Separator className="my-1" orientation="vertical" />

          <Button
            size={3}
            onPress={() => setOpen(true)}
            isSquare
            variant="ghost"
            intent="neutral"
          >
            <List size={16} />
          </Button>

          <Dialog
            aria-label="Navigation"
            isOpen={isOpen}
            isDismissable
            onOpenChange={setOpen}
            className="h-full max-w-lg gap-0 p-0"
          >
            <div className="flex gap-1.5 p-3">
              <TooltipTrigger>
                <LinkButton
                  isSquare
                  size={3}
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
                  isSquare
                  size={3}
                  intent="neutral"
                  target="_blank"
                  variant="ghost"
                  href="https://github.com/kkga/shim"
                >
                  <GithubLogo size={16} weight="duotone" />
                </LinkButton>
                <Tooltip>Go to GitHub</Tooltip>
              </TooltipTrigger>

              <Button
                className="ml-auto"
                onPress={() => setOpen(false)}
                isSquare
                size={3}
                variant="soft"
                intent="neutral"
              >
                <X weight="bold" size={16} />
              </Button>
            </div>

            <div className="flex-1 overflow-auto">
              <Navigation
                size={2}
                onAction={() => setOpen(false)}
                items={props.items}
              />
            </div>
          </Dialog>
        </div>
      </header>
    </aside>
  )
}
