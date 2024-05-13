"use client"

import type { VariantProps } from "cva"
import {
  ToggleButton as RACToggleButton,
  type ToggleButtonProps as RACToggleButtonProps,
} from "react-aria-components"

import { compose, cva, cxRenderProps, focusStyle } from "@lib/utils"
import { Children, isValidElement } from "react"

const styles = compose(
  focusStyle,
  cva({
    base: [
      "text-xs font-medium inline-flex items-center justify-center",
      // selected
      "data-[selected]:text-white",
      // disabled
      "data-[disabled]:text-neutral-placeholder data-[disabled]:pointer-events-none data-[disabled]:bg-neutral-bg-subtle",
    ],
    variants: {
      variant: { soft: null, ghost: "bg-transparent" },
      intent: {
        neutral:
          "bg-neutral-bg hover:bg-neutral-bg-hover active:bg-neutral-bg-active text-neutral-text data-[selected]:bg-neutral-solid",
        accent:
          "bg-accent-bg hover:bg-accent-bg-hover active:bg-accent-bg-active text-accent-text data-[selected]:bg-accent-solid",
        success:
          "bg-success-bg hover:bg-success-bg-hover active:bg-success-bg-active text-success-text data-[selected]:bg-success-solid",
        warning:
          "bg-warning-bg hover:bg-warning-bg-hover active:bg-warning-bg-active text-warning-text data-[selected]:bg-warning-solid",
        error:
          "bg-error-bg hover:bg-error-bg-hover active:bg-error-bg-active text-error-text data-[selected]:bg-error-solid",
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
    VariantProps<typeof styles> {}

function ToggleButton({
  className,
  variant,
  intent,
  size,
  isSquare,
  ...props
}: ToggleButtonProps) {
  let children =
    typeof props.children !== "function" && Children.toArray(props.children)
  let hasOnlySvg =
    children &&
    children.length === 1 &&
    isValidElement(children[0]) &&
    children[0].type === "svg"

  return (
    <RACToggleButton
      {...props}
      className={cxRenderProps(
        className,
        styles({
          variant,
          size,
          intent,
          isSquare: typeof isSquare === "boolean" ? isSquare : hasOnlySvg,
        }),
      )}
    />
  )
}

export { ToggleButton, type ToggleButtonProps }
