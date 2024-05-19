"use client"

import {
  Intents,
  compose,
  cva,
  cxRenderProps,
  focusStyle,
  type Intent,
} from "@lib/style"
import { useThemeProps } from "@lib/theme"

import type { VariantProps } from "cva"
import { Children, isValidElement } from "react"
import {
  Link,
  LinkProps,
  Button as RACButton,
  type ButtonProps as RACButtonProps,
} from "react-aria-components"

const style = compose(
  focusStyle,
  cva({
    base: [
      "font-medium inline-flex items-center justify-center shrink-0",
      // disabled
      "data-disabled:text-neutral-placeholder data-disabled:bg-neutral-bg-subtle data-disabled:inset-ring data-disabled:inset-ring-neutral-line",
    ],
    variants: {
      variant: {
        soft: null,
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
        1: "text-xs h-6 px-1.5 rounded gap-1.5",
        2: "text-[13px] h-7 px-2 rounded gap-2",
        3: "text-sm h-8 px-2.5 rounded-md gap-2",
      },
      isSquare: { true: null, false: null },
    },
    compoundVariants: [
      { size: 1, isSquare: true, className: "size-6 p-0" },
      { size: 2, isSquare: true, className: "size-7 p-0" },
      { size: 3, isSquare: true, className: "size-8 p-0" },
      {
        intent: "neutral",
        variant: "soft",
        className:
          "text-neutral-text bg-neutral-bg data-hovered:bg-neutral-bg-hover data-pressed:bg-neutral-bg-active",
      },
      {
        intent: "neutral",
        variant: "ghost",
        className:
          "text-neutral-text bg-transparent data-hovered:bg-neutral-bg-hover data-pressed:bg-neutral-bg-active",
      },
      {
        intent: "neutral",
        variant: "solid",
        className:
          "text-white bg-neutral-solid data-hovered:bg-neutral-solid-hover data-pressed:brightness-90",
      },

      {
        intent: "accent",
        variant: "soft",
        className:
          "text-accent-text bg-accent-bg data-hovered:bg-accent-bg-hover data-pressed:bg-accent-bg-active",
      },
      {
        intent: "accent",
        variant: "ghost",
        className:
          "text-accent-text bg-transparent data-hovered:bg-accent-bg-hover data-pressed:bg-accent-bg-active",
      },
      {
        intent: "accent",
        variant: "solid",
        className:
          "text-white bg-accent-solid data-hovered:bg-accent-solid-hover data-pressed:brightness-90",
      },

      {
        intent: "success",
        variant: "soft",
        className:
          "text-success-text bg-success-bg data-hovered:bg-success-bg-hover data-pressed:bg-success-bg-active",
      },
      {
        intent: "success",
        variant: "ghost",
        className:
          "text-success-text bg-transparent data-hovered:bg-success-bg-hover data-pressed:bg-success-bg-active",
      },
      {
        intent: "success",
        variant: "solid",
        className:
          "text-white bg-success-solid data-hovered:bg-success-solid-hover data-pressed:brightness-90",
      },

      {
        intent: "warning",
        variant: "soft",
        className:
          "text-warning-text bg-warning-bg data-hovered:bg-warning-bg-hover data-pressed:bg-warning-bg-active",
      },
      {
        intent: "warning",
        variant: "ghost",
        className:
          "text-warning-text bg-transparent data-hovered:bg-warning-bg-hover data-pressed:bg-warning-bg-active",
      },
      {
        intent: "warning",
        variant: "solid",
        className:
          "text-white bg-warning-solid data-hovered:bg-warning-solid-hover data-pressed:brightness-90",
      },

      {
        intent: "error",
        variant: "soft",
        className:
          "text-error-text bg-error-bg data-hovered:bg-error-bg-hover data-pressed:bg-error-bg-active",
      },
      {
        intent: "error",
        variant: "ghost",
        className:
          "text-error-text bg-transparent data-hovered:bg-error-bg-hover data-pressed:bg-error-bg-active",
      },
      {
        intent: "error",
        variant: "solid",
        className:
          "text-white bg-error-solid data-hovered:bg-error-solid-hover data-pressed:brightness-90",
      },
    ],
    defaultVariants: { intent: "accent", variant: "soft", size: 1 },
  }),
)

interface ButtonProps extends RACButtonProps, VariantProps<typeof style> {}

function Button({ className, size, variant, intent, ...props }: ButtonProps) {
  let themeProps = useThemeProps({ size, buttonVariant: variant })
  return (
    <RACButton
      className={cxRenderProps(
        className,
        style({
          variant: themeProps.buttonVariant,
          intent: intent,
          size: themeProps.size,
          isSquare:
            typeof props.isSquare === "boolean" ?
              props.isSquare
            : hasOnlySvgChild(props),
        }),
      )}
      {...props}
    />
  )
}

function LinkButton({
  className,
  size,
  variant,
  intent,
  ...props
}: LinkProps & VariantProps<typeof style>) {
  let themeProps = useThemeProps({ size, buttonVariant: variant })

  return (
    <Link
      className={cxRenderProps(
        className,
        style({
          variant: themeProps.buttonVariant,
          intent: intent,
          size: themeProps.size,
          isSquare:
            typeof props.isSquare === "boolean" ?
              props.isSquare
            : hasOnlySvgChild(props),
        }),
      )}
      {...props}
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

export { Button, LinkButton, type ButtonProps }
