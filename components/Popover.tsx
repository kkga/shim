"use client"

import { cxRenderProps } from "@lib/style"
import { useThemeProps } from "@lib/theme"
import {
  composeRenderProps,
  Dialog as RACDialog,
  DialogTrigger as RACDialogTrigger,
  Popover as RACPopover,
  type PopoverProps as RACPopoverProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"

const style = tv({
  base: [
    "animate-slide bg-panel text-neutral-text z-20 min-w-[var(--trigger-width)] overflow-auto text-xs shadow-[var(--shadow-lg)] outline-none",
    "data-[trigger=SubmenuTrigger]:-mt-1 data-[trigger=SubmenuTrigger]:data-[placement=left]:-mr-1 data-[trigger=SubmenuTrigger]:data-[placement=right]:-ml-1",
  ],
  variants: {
    size: {
      1: "rounded-lg",
      2: "rounded-lg",
      3: "rounded-[10px]",
      4: "rounded-xl",
    },
  },
})

type PopoverProps = RACPopoverProps

function Popover({ className, offset = 4, ...props }: PopoverProps) {
  let { size } = useThemeProps()
  return (
    <RACPopover
      {...props}
      offset={offset}
      className={cxRenderProps(className, style({ size }))}
    >
      {composeRenderProps(props.children, (children, {}) =>
        props.isNonModal ?
          <div className="overflow-auto outline-none">{children}</div>
        : <RACDialog className="overflow-auto outline-none">
            {children}
          </RACDialog>,
      )}
    </RACPopover>
  )
}

const PopoverTrigger = RACDialogTrigger

export { Popover, PopoverTrigger }
export type { PopoverProps }
