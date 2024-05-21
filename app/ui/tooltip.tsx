"use client"

import {
  Tooltip as RACTooltip,
  TooltipTrigger as RACTooltipTrigger,
  type TooltipProps as RACTooltipProps,
  type TooltipTriggerComponentProps,
} from "react-aria-components"

import { animateMountStyle, compose, cva, cxRenderProps } from "@lib/style"

const style = compose(
  animateMountStyle,
  cva({
    base: "flex items-center gap-1 overflow-hidden max-w-64 rounded bg-panel py-0.5 px-1.5 text-[12px] font-book text-neutral-text-contrast shadow-[var(--shadow-sm)] outline-0",
  }),
)

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
