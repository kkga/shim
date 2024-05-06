"use client"

import {
  Intents,
  compose,
  cva,
  cxRenderProps,
  focusStyle,
  type Intent,
} from "@lib/utils"

import type { VariantProps } from "cva"
import { Children, isValidElement } from "react"
import {
  Button as RACButton,
  type ButtonProps as RACButtonProps,
} from "react-aria-components"

const buttonStyle = cva({
  base: [
    "font-medium inline-flex items-center justify-center shrink-0 truncate",
    // disabled
    "data-[disabled]:text-neutral-placeholder data-[disabled]:cursor-not-allowed data-[disabled]:pointer-events-none data-[disabled]:bg-neutral-bg-subtle",
  ],
  variants: {
    variant: {
      soft: "",
      solid: "text-white",
      ghost: "bg-transparent",
    },
    intent: Intents.reduce(
      (acc, intent) => {
        acc[intent] = ""
        return acc
      },
      {} as Record<Intent, string>,
    ),
    size: {
      1: "text-sm h-6 px-2 rounded-md gap-1.5",
      2: "text-sm h-8 px-2.5 rounded-lg gap-2",
    },
    isSquare: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      size: 1,
      isSquare: [true],
      className: "size-6 p-0",
    },
    {
      size: 2,
      isSquare: [true],
      className: "size-8 p-0",
    },
    {
      intent: "neutral",
      variant: "soft",
      className:
        "text-neutral-text bg-neutral-bg hover:bg-neutral-bg-hover active:bg-neutral-bg-active",
    },
    {
      intent: "neutral",
      variant: "ghost",
      className:
        "text-neutral-text bg-transparent hover:bg-neutral-bg-hover active:bg-neutral-bg-active",
    },
    {
      intent: "neutral",
      variant: "solid",
      className:
        "text-white bg-neutral-solid hover:bg-neutral-solid-hover active:brightness-90",
    },

    {
      intent: "accent",
      variant: "soft",
      className:
        "text-accent-text bg-accent-bg hover:bg-accent-bg-hover active:bg-accent-bg-active",
    },
    {
      intent: "accent",
      variant: "ghost",
      className:
        "text-accent-text bg-transparent hover:bg-accent-bg-hover active:bg-accent-bg-active",
    },
    {
      intent: "accent",
      variant: "solid",
      className:
        "text-white bg-accent-solid hover:bg-accent-solid-hover active:brightness-90",
    },

    {
      intent: "success",
      variant: "soft",
      className:
        "text-success-text bg-success-bg hover:bg-success-bg-hover active:bg-success-bg-active",
    },
    {
      intent: "success",
      variant: "ghost",
      className:
        "text-success-text bg-transparent hover:bg-success-bg-hover active:bg-success-bg-active",
    },
    {
      intent: "success",
      variant: "solid",
      className:
        "text-white bg-success-solid hover:bg-success-solid-hover active:brightness-90",
    },

    {
      intent: "warning",
      variant: "soft",
      className:
        "text-warning-text bg-warning-bg hover:bg-warning-bg-hover active:bg-warning-bg-active",
    },
    {
      intent: "warning",
      variant: "ghost",
      className:
        "text-warning-text bg-transparent hover:bg-warning-bg-hover active:bg-warning-bg-active",
    },
    {
      intent: "warning",
      variant: "solid",
      className:
        "text-white bg-warning-solid hover:bg-warning-solid-hover active:brightness-90",
    },

    {
      intent: "error",
      variant: "soft",
      className:
        "text-error-text bg-error-bg hover:bg-error-bg-hover active:bg-error-bg-active",
    },
    {
      intent: "error",
      variant: "ghost",
      className:
        "text-error-text bg-transparent hover:bg-error-bg-hover active:bg-error-bg-active",
    },
    {
      intent: "error",
      variant: "solid",
      className:
        "text-white bg-error-solid hover:bg-error-solid-hover active:brightness-90",
    },
  ],
  defaultVariants: {
    intent: "accent",
    variant: "soft",
    size: 1,
  },
})

const styles = compose(focusStyle, buttonStyle)

interface ButtonProps extends RACButtonProps, VariantProps<typeof styles> {}

function Button({
  className,
  variant,
  intent,
  size,
  isSquare,
  ...props
}: ButtonProps) {
  let children =
    typeof props.children !== "function" && Children.toArray(props.children)

  let hasOnlySvg =
    children &&
    children.length === 1 &&
    isValidElement(children[0]) &&
    children[0].type === "svg"

  return (
    <RACButton
      className={cxRenderProps(
        className,
        styles({
          variant,
          intent,
          size,
          isSquare: typeof isSquare === "boolean" ? isSquare : hasOnlySvg,
          className,
        }),
      )}
      {...props}
    />
  )
}

export { Button, type ButtonProps }
