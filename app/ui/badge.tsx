"use client"

import type { VariantProps } from "cva"

import { cva, cx } from "@lib/utils"
import { Children, isValidElement } from "react"

const badgeStyles = cva({
  base: "inline-flex w-min items-center justify-center font-regular",
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
    isSquare: {
      true: "",
    },
  },
  defaultVariants: {
    intent: "accent",
    size: 1,
  },
  compoundVariants: [
    {
      isSquare: true,
      size: 1,
      className: "size-5 p-0!",
    },
    {
      isSquare: true,
      size: 2,
      className: "size-6 p-0!",
    },
  ],
})

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeStyles> {}

const Badge = ({ className, intent, isSquare, size, ...props }: BadgeProps) => {
  const children = Children.toArray(props.children)
  const hasOnlySvg =
    children.length === 1 &&
    isValidElement(children[0]) &&
    children[0].type === "svg"

  return (
    <div
      className={cx(
        badgeStyles({
          intent,
          size,
          isSquare: typeof isSquare === "boolean" ? isSquare : hasOnlySvg,
        }),
        className,
      )}
      {...props}
    />
  )
}

export { Badge, type BadgeProps }
