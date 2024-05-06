"use client"

import {
  Menu as RACMenu,
  MenuItem as RACMenuItem,
  MenuItemProps as RACMenuItemProps,
  MenuProps as RACMenuProps,
  MenuTrigger as RACMenuTrigger,
  Popover as RACPopover,
  PopoverProps as RACPopoverProps,
  Separator as RACSeparator,
  SeparatorProps as RACSeparatorProps,
  SubmenuTrigger as RACSubmenuTrigger,
  composeRenderProps,
} from "react-aria-components"

import { CaretRight, Check } from "@phosphor-icons/react"

import { compose, cx, focusInsetStyle } from "@lib/utils"
import { VariantProps, cva } from "cva"
import { ListBoxSection, ListBoxSectionProps, itemBaseStyle } from "./listbox"
import { popoverStyle } from "./popover"

interface MenuProps<T> extends RACMenuProps<T> {
  placement?: RACPopoverProps["placement"]
  offset?: RACPopoverProps["offset"]
}

function Menu<T extends object>(props: MenuProps<T>) {
  return (
    <RACPopover
      placement={props.placement}
      offset={props.offset ?? 4}
      className={cx(popoverStyle(), "min-w-32")}
    >
      <RACMenu
        {...props}
        className="flex max-h-[inherit] flex-col gap-px overflow-auto p-1 outline-0 [clip-path:inset(0_0_0_0_round_.75rem)]"
      />
    </RACPopover>
  )
}

const menuItemStyle = compose(
  focusInsetStyle,
  itemBaseStyle,
  cva({
    base: [
      // selection mode
      "data-[selection-mode]:pl-1 data-[selection-mode]:gap-1.5",
    ],
    variants: {
      intent: {
        neutral:
          "text-neutral-text data-[hovered]:bg-neutral-bg-hover data-[pressed]:bg-neutral-bg-active data-[open]:bg-neutral-bg-hover data-[selected]:text-neutral-text-contrast",
        accent:
          "text-accent-text data-[hovered]:bg-accent-bg-hover data-[pressed]:bg-accent-bg-active data-[open]:bg-accent-bg-hover data-[selected]:text-accent-text-contrast",
        success:
          "text-success-text data-[hovered]:bg-success-bg-hover data-[pressed]:bg-success-bg-active data-[open]:bg-success-bg-hover data-[selected]:text-success-text-contrast",
        warning:
          "text-warning-text data-[hovered]:bg-warning-bg-hover data-[pressed]:bg-warning-bg-active data-[open]:bg-warning-bg-hover data-[selected]:text-warning-contrast",
        error:
          "text-error-text data-[hovered]:bg-error-bg-hover data-[pressed]:bg-error-bg-active data-[open]:bg-error-bg-hover data-[selected]:text-error-text-contrast",
      },
    },
    defaultVariants: {
      intent: "neutral",
    },
  }),
)

interface MenuItemProps
  extends RACMenuItemProps,
    VariantProps<typeof menuItemStyle> {}

function MenuItem(props: MenuItemProps) {
  return (
    <RACMenuItem {...props} className={menuItemStyle({ intent: props.intent })}>
      {composeRenderProps(
        props.children,
        (children, { selectionMode, isSelected, hasSubmenu }) => (
          <>
            {selectionMode !== "none" && (
              <span className="flex w-3 items-center">
                {isSelected && <Check size={12} aria-hidden weight="bold" />}
              </span>
            )}
            <span className="flex flex-1 items-center gap-2 truncate font-normal">
              {children}
            </span>
            {hasSubmenu && (
              <CaretRight
                size={12}
                weight="bold"
                aria-hidden
                className="absolute right-2"
              />
            )}
          </>
        ),
      )}
    </RACMenuItem>
  )
}

function MenuSeparator(props: RACSeparatorProps) {
  return (
    <RACSeparator
      {...props}
      className="mx-2 my-1 border-b border-neutral-line"
    />
  )
}

function MenuSection<T extends object>(props: ListBoxSectionProps<T>) {
  return <ListBoxSection {...props} />
}

const MenuTrigger = RACMenuTrigger
const SubmenuTrigger = RACSubmenuTrigger

export {
  Menu,
  MenuItem,
  MenuSection,
  MenuSeparator,
  MenuTrigger,
  SubmenuTrigger,
}
