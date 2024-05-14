"use client"

import { Size, SizeContext, cx, useSize } from "@lib/styleUtils"
import { CaretRight, Check } from "@phosphor-icons/react"
import { VariantProps } from "cva"
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
import {
  ListBoxSection,
  ListBoxSectionProps,
  itemStyle as listBoxItemStyle,
} from "./listbox"
import { Popover } from "./popover"

interface MenuProps<T> extends RACMenuProps<T> {
  placement?: RACPopoverProps["placement"]
  offset?: RACPopoverProps["offset"]
  size?: Size
}

function Menu<T extends object>(props: MenuProps<T>) {
  let size = useSize(props)

  return (
    <Popover placement={props.placement} className={"min-w-32"}>
      <SizeContext.Provider value={size}>
        <RACMenu
          {...props}
          className="flex max-h-[inherit] flex-col gap-px overflow-y-scroll p-1 outline-0"
        />
      </SizeContext.Provider>
    </Popover>
  )
}

const menuItemStyle = listBoxItemStyle

interface MenuItemProps
  extends RACMenuItemProps,
    VariantProps<typeof menuItemStyle> {}

function MenuItem({ className, intent, ...props }: MenuItemProps) {
  let size = useSize(props)

  return (
    <RACMenuItem {...props} className={menuItemStyle({ intent, size })}>
      {composeRenderProps(
        props.children,
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
            <span className="flex flex-1 items-center gap-1.5 truncate">
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
  let size = useSize(props)
  return (
    <RACSeparator
      {...props}
      className={cx(
        "my-1 h-px border-none bg-neutral-line",
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
