"use client"

import { cxRenderProps, focusStyle, INTENTS, type Intent } from "@lib/style"
import { useThemeProps } from "@lib/theme"

import { Children, isValidElement } from "react"
import {
  Link,
  LinkProps,
  Button as RACButton,
  type ButtonProps as RACButtonProps,
} from "react-aria-components"
import { tv, VariantProps } from "tailwind-variants"

const style = tv({
  extend: focusStyle,
  base: [
    "inline-flex shrink-0 items-center justify-center font-medium",
    // disabled
    "data-disabled:text-neutral-placeholder data-disabled:bg-neutral-bg-subtle data-disabled:inset-ring data-disabled:inset-ring-neutral-line",
  ],
  variants: {
    variant: {
      soft: null,
      solid: "text-white",
      ghost: "bg-transparent",
    },
    intent: INTENTS.reduce(
      (acc, intent) => {
        acc[intent] = ""
        return acc
      },
      {} as Record<Intent, string>,
    ),
    size: {
      1: "h-6 gap-1.5 rounded px-1.5 text-xs",
      2: "h-7 gap-2 rounded px-2 text-[13px]",
      3: "h-8 gap-2 rounded-md px-2.5 text-sm",
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
        "text-neutral-text data-hovered:bg-neutral-bg-hover data-pressed:bg-neutral-bg-active bg-transparent",
    },
    {
      intent: "neutral",
      variant: "solid",
      className:
        "bg-neutral-solid data-hovered:bg-neutral-solid-hover data-pressed:brightness-90 text-white",
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
        "text-accent-text data-hovered:bg-accent-bg-hover data-pressed:bg-accent-bg-active bg-transparent",
    },
    {
      intent: "accent",
      variant: "solid",
      className:
        "bg-accent-solid data-hovered:bg-accent-solid-hover data-pressed:brightness-90 text-white",
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
        "text-success-text data-hovered:bg-success-bg-hover data-pressed:bg-success-bg-active bg-transparent",
    },
    {
      intent: "success",
      variant: "solid",
      className:
        "bg-success-solid data-hovered:bg-success-solid-hover data-pressed:brightness-90 text-white",
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
        "text-warning-text data-hovered:bg-warning-bg-hover data-pressed:bg-warning-bg-active bg-transparent",
    },
    {
      intent: "warning",
      variant: "solid",
      className:
        "bg-warning-solid data-hovered:bg-warning-solid-hover data-pressed:brightness-90 text-white",
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
        "text-error-text data-hovered:bg-error-bg-hover data-pressed:bg-error-bg-active bg-transparent",
    },
    {
      intent: "error",
      variant: "solid",
      className:
        "bg-error-solid data-hovered:bg-error-solid-hover data-pressed:brightness-90 text-white",
    },
  ],
  defaultVariants: { intent: "accent", variant: "soft", size: 1 },
})

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
      {...props}
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
    />
  )
}

function hasOnlySvgChild(props: Partial<LinkProps> | Partial<ButtonProps>) {
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
