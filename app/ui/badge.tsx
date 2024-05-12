"use client"

import type { VariantProps } from "cva"

import { cva, cx } from "@lib/utils"
import { Children, isValidElement } from "react"

const badgeStyles = cva({
  base: "inline-flex w-min items-center justify-center font-book",
  variants: {
    intent: {
      neutral:
        "border border-neutral-line bg-neutral-bg-subtle text-neutral-text",
      accent: "border border-accent-line bg-accent-bg-subtle text-accent-text",
      success:
        "border border-success-line bg-success-bg-subtle text-success-text",
      warning:
        "border border-warning-line bg-warning-bg-subtle text-warning-text",
      error: "border border-error-line bg-error-bg-subtle text-error-text",
    },
    size: {
      1: "h-4 px-[3px] gap-1 rounded text-[11px]",
      2: "h-5 px-1 gap-1 rounded text-xs",
      3: "h-6 px-1.5 gap-1.5 rounded-md text-[13px]",
    },
    isSquare: {
      true: "",
    },
  },
  defaultVariants: {
    intent: "accent",
    size: 2,
  },
  compoundVariants: [
    {
      isSquare: true,
      size: 1,
      className: "size-4 p-0!",
    },
    {
      isSquare: true,
      size: 2,
      className: "size-5 p-0!",
    },
    {
      isSquare: true,
      size: 3,
      className: "size-6 p-0!",
    },
  ],
})

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeStyles> {}

function Badge({ className, intent, isSquare, size, ...props }: BadgeProps) {
  let children = Children.toArray(props.children)
  let hasOnlySvg =
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
