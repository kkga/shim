"use client";

import type { VariantProps } from "cva";

import { cx, cva } from "@lib/utils";

const badgeStyles = cva({
  base: "inline-flex w-min items-center font-regular",
  variants: {
    intent: {
      neutral:
        "border border-neutral-border bg-neutral-bg-subtle text-neutral-text",
      accent:
        "border border-accent-border bg-accent-bg-subtle text-accent-text",
      success:
        "border border-success-border bg-success-bg-subtle text-success-text",
      warning:
        "border border-warning-border bg-warning-bg-subtle text-warning-text",
      error: "border border-error-border bg-error-bg-subtle text-error-text",
    },
    size: {
      1: "h-5 px-1 gap-1 text-[12px] rounded",
      2: "h-6 px-1.5 gap-1.5 text-xs rounded-md",
    },
  },
  defaultVariants: {
    intent: "neutral",
    size: 1,
  },
});

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeStyles> {}

const Badge = ({ className, intent, size, ...props }: BadgeProps) => {
  return (
    <div className={cx(badgeStyles({ intent, size }), className)} {...props} />
  );
};

export { Badge, type BadgeProps };
