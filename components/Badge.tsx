"use client"

import { useThemeProps } from "@lib/theme"
import { Children, isValidElement } from "react"
import { tv, VariantProps } from "tailwind-variants"

const style = tv({
  base: "font-book inline-flex w-fit items-center justify-center bg-clip-padding leading-none",
  variants: {
    intent: {
      neutral:
        "border-neutral-line bg-neutral-bg-subtle text-neutral-text border",
      accent: "border-accent-line bg-accent-bg-subtle text-accent-text border",
      success:
        "border-success-line bg-success-bg-subtle text-success-text border",
      warning:
        "border-warning-line bg-warning-bg-subtle text-warning-text border",
      error: "border-error-line bg-error-bg-subtle text-error-text border",
    },
    size: {
      1: "rounded-xs h-4 gap-1 px-[3px] text-[11px]",
      2: "h-5 gap-1 rounded-[3px] px-1 text-xs",
      3: "h-6 gap-1.5 rounded-sm px-1.5 text-[13px]",
      4: "h-7 gap-2 rounded-md px-2 text-sm",
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
      className: "p-0! size-4",
    },
    {
      isSquare: true,
      size: 2,
      className: "p-0! size-5",
    },
    {
      isSquare: true,
      size: 3,
      className: "p-0! size-6",
    },
    {
      isSquare: true,
      size: 4,
      className: "p-0! size-8",
    },
  ],
})

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof style> {}

function Badge({
  className,
  intent,
  isSquare,
  size: _size,
  ...props
}: BadgeProps) {
  let { size } = useThemeProps({ size: _size })
  let children = Children.toArray(props.children)
  let hasOnlySvg =
    children.length === 1 &&
    isValidElement(children[0]) &&
    children[0].type === "svg"

  return (
    <div
      className={style({
        intent,
        size: size,
        isSquare: typeof isSquare === "boolean" ? isSquare : hasOnlySvg,
        className,
      })}
      {...props}
    />
  )
}

export { Badge, type BadgeProps }
