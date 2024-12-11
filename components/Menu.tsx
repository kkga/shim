"use client"

import { cx, cxRenderProps } from "@lib/style"
import { Size, Theme, useThemeProps } from "@lib/theme"
import { CaretRight, Check } from "@phosphor-icons/react"
import {
  Menu as RACMenu,
  MenuItem as RACMenuItem,
  MenuItemProps as RACMenuItemProps,
  MenuProps as RACMenuProps,
  MenuTrigger as RACMenuTrigger,
  PopoverProps as RACPopoverProps,
  Separator as RACSeparator,
  SeparatorProps as RACSeparatorProps,
  SubmenuTrigger as RACSubmenuTrigger,
  composeRenderProps,
} from "react-aria-components"
import { VariantProps } from "tailwind-variants"
import { ListBoxSection, ListBoxSectionProps, itemStyle } from "./ListBox"
import { Popover } from "./Popover"

interface MenuProps<T> extends RACMenuProps<T> {
  placement?: RACPopoverProps["placement"]
  offset?: RACPopoverProps["offset"]
  size?: Size
}

function Menu<T extends object>({
  placement,
  className,
  offset,
  ...props
}: MenuProps<T>) {
  let themeProps = useThemeProps(props)

  return (
    <Theme {...themeProps}>
      <Popover offset={offset} placement={placement} className={"min-w-32"}>
        <RACMenu
          {...props}
          className={cx(
            "flex max-h-[inherit] flex-col gap-px overflow-y-scroll p-1 outline-0",
            className,
          )}
        />
      </Popover>
    </Theme>
  )
}

const menuItemStyle = itemStyle

interface MenuItemProps
  extends RACMenuItemProps,
    VariantProps<typeof menuItemStyle> {}

function MenuItem({ className, children, intent, ...props }: MenuItemProps) {
  let { size } = useThemeProps({ size: props.size })

  return (
    <RACMenuItem
      {...props}
      className={cxRenderProps(
        className,
        menuItemStyle({
          intent,
          size,
          className: props.href ? "cursor-pointer" : "cursor-default",
        }),
      )}
    >
      {composeRenderProps(
        children,
        (children, { selectionMode, isSelected, hasSubmenu }) => (
          <>
            {selectionMode !== "none" && (
              <span
                className={cx("flex items-center", size === 1 ? "w-3" : "w-4")}
              >
                {isSelected && (
                  <Check
                    size={size === 1 ? 12 : 16}
                    aria-hidden
                    weight="bold"
                  />
                )}
              </span>
            )}
            <span
              className={cx(
                "flex flex-1 items-center gap-1.5",
                typeof children === "string" ? "truncate" : "",
              )}
            >
              {children}
            </span>
            {hasSubmenu && <CaretRight size={12} weight="bold" aria-hidden />}
          </>
        ),
      )}
    </RACMenuItem>
  )
}

function MenuSeparator(props: RACSeparatorProps) {
  let { size } = useThemeProps()

  return (
    <RACSeparator
      {...props}
      className={cx(
        "bg-neutral-line my-1 h-px border-none",
        size === 1 && "mx-1.5",
        size === 2 && "mx-2",
        size === 3 && "mx-2.5",
      )}
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

export type { MenuItemProps, MenuProps }
