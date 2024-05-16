"use client"

import {
  Dialog as RACDialog,
  DialogTrigger as RACDialogTrigger,
  Popover as RACPopover,
  type PopoverProps as RACPopoverProps,
} from "react-aria-components"

import { animateMountStyle, compose, cva, cxRenderProps } from "@lib/style"
import { useThemeProps } from "@lib/theme"

const style = compose(
  animateMountStyle,
  cva({
    base: "z-20 min-w-[var(--trigger-width)] bg-[var(--color-bg-panel)] text-neutral-text text-xs ring shadow-xl ring-neutral-solid/20 outline-none",
    variants: {
      size: { 1: "rounded-lg", 2: "rounded-lg", 3: "rounded-[10px]" },
    },
    defaultVariants: { size: 1 },
  }),
)

interface PopoverProps extends Omit<RACPopoverProps, "children"> {
  children: React.ReactNode
  withDialog?: boolean
}

function Popover({
  className,
  children,
  offset = 4,
  withDialog,
  ...props
}: PopoverProps) {
  let { size } = useThemeProps({})
  return (
    <RACPopover
      {...props}
      offset={offset}
      className={cxRenderProps(className, style({ size }))}
    >
      {withDialog ?
        <RACDialog className="overflow-auto outline-none">{children}</RACDialog>
      : children}
    </RACPopover>
  )
}

const PopoverTrigger = RACDialogTrigger

export { Popover, PopoverTrigger, type PopoverProps }
