"use client"

import {
  Tooltip as RACTooltip,
  TooltipTrigger as RACTooltipTrigger,
  type TooltipProps as RACTooltipProps,
  type TooltipTriggerComponentProps,
} from "react-aria-components"

import { animateMountStyle, cxRenderProps } from "@lib/style"
import { tv } from "tailwind-variants"

const style = tv({
  extend: animateMountStyle,
  base: "bg-panel font-book text-neutral-text-contrast flex max-w-64 items-center gap-1 overflow-hidden rounded px-1.5 py-0.5 text-[12px] shadow-[var(--shadow-sm)] outline-0",
})

function Tooltip({ className, offset = 4, ...props }: RACTooltipProps) {
  return (
    <RACTooltip
      {...props}
      offset={offset}
      className={cxRenderProps(className, style())}
    />
  )
}

function TooltipTrigger(props: TooltipTriggerComponentProps) {
  let { delay = 500, closeDelay = 0, ...rest } = props
  return <RACTooltipTrigger delay={delay} closeDelay={closeDelay} {...rest} />
}

export { Tooltip, TooltipTrigger }
