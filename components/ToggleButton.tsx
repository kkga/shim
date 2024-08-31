"use client"

import {
  ToggleButton as RACToggleButton,
  type ToggleButtonProps as RACToggleButtonProps,
} from "react-aria-components"

import {
  VariantProps,
  compose,
  cva,
  cxRenderProps,
  focusStyle,
} from "@lib/style"
import { Children, isValidElement } from "react"

const style = compose(
  focusStyle,
  cva({
    base: [
      "text-xs font-medium inline-flex items-center justify-center",
      // selected
      "data-selected:text-white",
      // disabled
      "data-disabled:text-neutral-placeholder data-disabled:bg-neutral-bg-subtle data-disabled:inset-ring data-disabled:inset-ring-neutral-line",
    ],
    variants: {
      variant: { soft: null, ghost: "bg-transparent" },
      intent: {
        neutral:
          "bg-neutral-bg data-hovered:bg-neutral-bg-hover data-pressed:bg-neutral-bg-active text-neutral-text data-selected:bg-neutral-solid",
        accent:
          "bg-accent-bg data-hovered:bg-accent-bg-hover data-pressed:bg-accent-bg-active text-accent-text data-selected:bg-accent-solid",
        success:
          "bg-success-bg data-hovered:bg-success-bg-hover data-pressed:bg-success-bg-active text-success-text data-selected:bg-success-solid",
        warning:
          "bg-warning-bg data-hovered:bg-warning-bg-hover data-pressed:bg-warning-bg-active text-warning-text data-selected:bg-warning-solid",
        error:
          "bg-error-bg data-hovered:bg-error-bg-hover data-pressed:bg-error-bg-active text-error-text data-selected:bg-error-solid",
      },
      size: {
        1: "text-xs h-6 px-1.5 rounded gap-1.5",
        2: "text-[13px] h-7 px-2 rounded gap-2",
        3: "text-sm h-8 px-2.5 rounded-md gap-2",
      },
      isSquare: { true: null, false: null },
    },
    compoundVariants: [
      { size: 1, isSquare: [true], className: "size-6 p-0" },
      { size: 2, isSquare: [true], className: "size-7 p-0" },
      { size: 3, isSquare: [true], className: "size-8 p-0" },
      {
        intent: ["neutral", "accent", "success", "warning", "error"],
        variant: "ghost",
        className: "bg-transparent",
      },
    ],
    defaultVariants: {
      variant: "soft",
      intent: "accent",
      size: 1,
    },
  }),
)

interface ToggleButtonProps
  extends RACToggleButtonProps,
    VariantProps<typeof style> {}

function ToggleButton({ className, ...props }: ToggleButtonProps) {
  return (
    <RACToggleButton
      {...props}
      className={cxRenderProps(
        className,
        style({
          ...props,
          isSquare:
            typeof props.isSquare === "boolean" ?
              props.isSquare
            : hasOnlySvgChild(props),
        }),
      )}
    />
  )
}

function hasOnlySvgChild(props: any): boolean {
  let children =
    typeof props.children !== "function" && Children.toArray(props.children)

  return (
    children &&
    children.length === 1 &&
    isValidElement(children[0]) &&
    children[0].type === "svg"
  )
}

export { ToggleButton, type ToggleButtonProps }
