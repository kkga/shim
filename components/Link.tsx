"use client"

import { cxRenderProps, focusStyle } from "@lib/style"
import {
  Link as RACLink,
  type LinkProps as RACLinkProps,
} from "react-aria-components"
import { tv, VariantProps } from "tailwind-variants"

const style = tv({
  extend: focusStyle,
  base: [
    "underline-offset-2",
    // hovered
    "data-hovered:underline",
    // disabled
    "data-disabled:no-underline data-disabled:cursor-default data-disabled:text-neutral-placeholder",
    // current
    "data-current:text-neutral-text",
  ],
  variants: {
    variant: {
      underline: "underline underline-offset-2",
    },
    intent: {
      neutral:
        "text-neutral-text decoration-neutral-line data-hovered:decoration-neutral-border-hover",
      accent:
        "text-accent-text decoration-accent-line data-hovered:decoration-accent-border-hover",
      warning:
        "text-warning-text decoration-warning-line data-hovered:decoration-warning-border-hover",
      success:
        "text-success-text decoration-success-line data-hovered:decoration-success-border-hover",
      error:
        "text-error-text decoration-error-line data-hovered:decoration-error-border-hover",
    },
  },
  defaultVariants: {
    intent: "accent",
  },
})

interface LinkProps extends RACLinkProps, VariantProps<typeof style> {}

function Link({ className, intent, variant, ...props }: LinkProps) {
  return (
    <RACLink
      {...props}
      className={cxRenderProps(className, style({ intent, variant }))}
    />
  )
}

export { Link, type LinkProps }
