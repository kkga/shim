"use client";

import {
  Link as RacLink,
  type LinkProps as RacLinkProps,
} from "react-aria-components";
import { type ClassValue, tv, type VariantProps } from "tailwind-variants";
import { cnRenderProps } from "@/shim-ui/lib/style";
import type { Intent } from "@/shim-ui/lib/theme";

const style = tv({
  base: [
    "focus-ring underline-offset-2",
    "data-hovered:underline",
    "data-disabled:cursor-default data-disabled:text-neutral-text-subtle data-disabled:no-underline",
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
      danger:
        "text-danger-text decoration-danger-line data-hovered:decoration-danger-border-hover",
    } satisfies Record<Intent, ClassValue>,
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
      className={cnRenderProps(className, style({ intent, variant }))}
    />
  );
}

export { Link, type LinkProps };
