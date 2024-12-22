"use client"

import { focusStyle } from "@lib/style"
import { useThemeProps } from "@lib/theme"
import { Children, isValidElement, useContext } from "react"
import {
  composeRenderProps,
  ToggleButton as RACToggleButton,
  ToggleGroupStateContext,
  type ToggleButtonProps as RACToggleButtonProps,
} from "react-aria-components"
import { tv, VariantProps } from "tailwind-variants"

const style = tv({
  extend: focusStyle,
  base: "inline-flex items-center justify-center text-xs font-medium",
  variants: {
    variant: {
      soft: "",
      solid: "",
      ghost: "bg-transparent",
    },
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
      1: "h-6 gap-1.5 rounded px-1.5 text-xs",
      2: "h-7 gap-2 rounded px-2 text-[13px]",
      3: "h-8 gap-2 rounded-md px-2.5 text-sm",
      4: "h-10 gap-2 rounded-lg px-3 text-base",
    },
    isSelected: {
      true: "text-white",
    },
    isDisabled: {
      true: "text-neutral-placeholder! bg-neutral-bg-subtle! inset-ring inset-ring-neutral-line cursor-not-allowed",
    },
    isSquare: { true: null, false: null },
    // TODO improve the group styling
    isInGroup: {
      true: [
        "peer -ml-px flex-1 shrink-0",
        "not-first:not-last:rounded-none first:rounded-r-none last:rounded-l-none",
      ],
    },
  },
  compoundVariants: [
    { size: 1, isSquare: [true], isInGroup: [false], className: "size-6 p-0" },
    { size: 2, isSquare: [true], isInGroup: [false], className: "size-7 p-0" },
    { size: 3, isSquare: [true], isInGroup: [false], className: "size-8 p-0" },
    { size: 4, isSquare: [true], isInGroup: [false], className: "size-10 p-0" },
    {
      intent: ["neutral", "accent", "success", "warning", "error"],
      variant: "ghost",
      className: "bg-transparent",
    },
  ],
  defaultVariants: {
    variant: "soft",
    intent: "neutral",
    size: 1,
  },
})

interface ToggleButtonProps
  extends RACToggleButtonProps,
    Omit<VariantProps<typeof style>, "isInGroup"> {
  variant?: "soft" | "ghost"
}

function ToggleButton({
  variant: _variant,
  size: _size,
  intent,
  ...props
}: ToggleButtonProps) {
  let isInGroup = useContext(ToggleGroupStateContext) !== null
  let { buttonVariant, size } = useThemeProps({
    size: _size,
    buttonVariant: _variant,
  })

  return (
    <RACToggleButton
      {...props}
      className={composeRenderProps(
        props.className,
        (className, { isSelected, isDisabled }) =>
          style({
            isInGroup,
            isSelected,
            isDisabled,
            size,
            intent,
            variant: buttonVariant,
            isSquare:
              typeof props.isSquare === "boolean" ?
                props.isSquare
              : hasOnlySvgChild(props),
            className,
          }),
      )}
    />
  )
}

function hasOnlySvgChild(props: Partial<ToggleButtonProps>): boolean {
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
