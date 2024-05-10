"use client"

import {
  Tooltip as RACTooltip,
  TooltipTrigger as RACTooltipTrigger,
  type TooltipProps as RACTooltipProps,
  type TooltipTriggerComponentProps,
} from "react-aria-components"

import { animateMountStyle, compose, cva, cxRenderProps } from "@lib/utils"

const style = compose(
  animateMountStyle,
  cva({
    base: "overflow-hidden max-w-64 rounded bg-[var(--color-bg-panel)] py-0.5 px-1.5 text-[12px] font-medium text-neutral-text-contrast shadow-md outline-0 ring ring-neutral-solid/20",
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
