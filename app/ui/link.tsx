"use client"

import { compose, cva, cxRenderProps, focusStyle } from "@lib/utils"
import type { VariantProps } from "cva"
import {
  Link as RACLink,
  type LinkProps as RACLinkProps,
} from "react-aria-components"

const style = compose(
  focusStyle,
  cva({
    base: [
      "underline underline-offset-2",
      // disabled
      "data-disabled:no-underline data-disabled:cursor-default data-disabled:text-neutral-placeholder",
      // current
      "data-current:text-neutral-text",
    ],
    variants: {
      intent: {
        neutral:
          "text-neutral-text decoration-neutral-line hover:decoration-neutral-border-hover",
        accent:
          "text-accent-text decoration-accent-line hover:decoration-accent-border-hover",
        warning:
          "text-warning-text decoration-warning-line hover:decoration-warning-border-hover",
        success:
          "text-success-text decoration-success-line hover:decoration-success-border-hover",
        error:
          "text-error-text decoration-error-line hover:decoration-error-border-hover",
      },
    },
    defaultVariants: {
      intent: "accent",
    },
  }),
)

interface LinkProps extends RACLinkProps, VariantProps<typeof style> {}

function Link({ className, intent, ...props }: LinkProps) {
  return (
    <RACLink
      {...props}
      className={cxRenderProps(className, style({ intent }))}
    />
  )
}

export { Link, type LinkProps }
