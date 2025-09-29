"use client";

import { cxRenderProps, focusStyle } from "@lib/style";
import {
  Link as RacLink,
  type LinkProps as RacLinkProps,
} from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";

const style = tv({
  extend: focusStyle,
  base: [
    "underline-offset-2",
    // hovered
    "data-hovered:underline",
    // disabled
    "data-disabled:cursor-default data-disabled:text-neutral-text-subtle data-disabled:no-underline",
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
});

interface LinkProps extends RacLinkProps, VariantProps<typeof style> {}

function Link({ className, intent, variant, ...props }: LinkProps) {
  return (
    <RacLink
      {...props}
      className={cxRenderProps(className, style({ intent, variant }))}
    />
  );
}

export { Link, type LinkProps };
