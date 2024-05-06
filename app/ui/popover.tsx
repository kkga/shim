"use client"

import {
  Dialog as RACDialog,
  DialogTrigger as RACDialogTrigger,
  Popover as RACPopover,
  type PopoverProps as RACPopoverProps,
} from "react-aria-components"

import { animateMountStyle, compose, cva, cxRenderProps } from "@lib/utils"

const popoverStyle = compose(
  animateMountStyle,
  cva({
    base: "z-20 rounded-lg bg-[var(--color-bg-panel)] text-neutral-text text-sm ring shadow-xl ring-neutral-solid/20 outline-none",
  }),
)

interface PopoverProps extends Omit<RACPopoverProps, "children"> {
  children: React.ReactNode
}

function Popover({ className, children, offset = 4, ...props }: PopoverProps) {
  return (
    <RACPopover
      offset={offset}
      className={cxRenderProps(className, popoverStyle())}
      {...props}
    >
      <RACDialog className="overflow-auto outline-none">{children}</RACDialog>
    </RACPopover>
  )
}

const PopoverTrigger = RACDialogTrigger

export { Popover, PopoverTrigger, popoverStyle, type PopoverProps }
