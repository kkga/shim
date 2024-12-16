"use client"

import { cxRenderProps } from "@lib/style"
import { Size, Theme, useThemeProps } from "@lib/theme"
import type { DisclosureGroupProps as RACDisclosureGroupProps } from "react-aria-components"
import {
  composeRenderProps,
  DisclosureGroup as RACDisclosureGroup,
} from "react-aria-components"
import { tv } from "tailwind-variants"

const style = tv({
  base: "border-neutral-line border",
  variants: {
    size: {
      1: "rounded-md",
      2: "rounded-[7px]",
      3: "rounded-lg",
      4: "rounded-xl",
    },
  },
})

interface DisclosureGroupProps extends RACDisclosureGroupProps {
  size?: Size
}

function DisclosureGroup({
  children,
  className,
  size: _size,
  ...props
}: DisclosureGroupProps) {
  let { size } = useThemeProps({ size: _size })

  return (
    <RACDisclosureGroup
      {...props}
      className={cxRenderProps(className, style({ size }))}
    >
      {composeRenderProps(children, (children) => (
        <Theme size={size}>{children}</Theme>
      ))}
    </RACDisclosureGroup>
  )
}

export { DisclosureGroup }
export type { DisclosureGroupProps }
