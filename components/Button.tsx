"use client"

import { cxRenderProps, focusStyle, INTENTS, type Intent } from "@lib/style"
import { useThemeProps } from "@lib/theme"

import { Children, isValidElement } from "react"
import {
  composeRenderProps,
  Button as RACButton,
  Link as RACLink,
  LinkProps as RACLinkProps,
  ProgressBar as RACProgressBar,
  type ButtonProps as RACButtonProps,
  type ProgressBarProps as RACProgressBarProps,
} from "react-aria-components"
import { ClassValue, tv, VariantProps } from "tailwind-variants"

const style = tv({
  extend: focusStyle,
  base: [
    "relative inline-flex shrink-0 items-center justify-center font-medium",
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
      {} as Record<Intent, ClassValue>,
    ),
    size: {
      1: "h-6 gap-1.5 rounded px-1.5 text-xs",
      2: "h-7 gap-2 rounded px-2 text-[13px]",
      3: "h-8 gap-2 rounded-md px-2.5 text-sm",
    },
    isSquare: { true: null, false: null },
    isPending: {
      true: "*:not-data-progress:invisible",
    },
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

const progressStyle = tv({
  slots: {
    base: "absolute inset-0 flex items-center justify-center",
    circle: "",
  },
  variants: {
    size: {
      1: { circle: "size-4" },
      2: { circle: "size-5" },
      3: { circle: "size-6" },
    },
  },
})

interface ButtonProps
  extends RACButtonProps,
    Omit<VariantProps<typeof style>, "isPending"> {}

function Button({
  className,
  size: _size,
  variant: _variant,
  intent,
  ...props
}: ButtonProps) {
  let { buttonVariant, size } = useThemeProps({
    size: _size,
    buttonVariant: _variant,
  })
  let { base, circle } = progressStyle({ size })

  return (
    <RACButton
      className={cxRenderProps(
        className,
        style({
          variant: buttonVariant,
          intent: intent,
          size: size,
          isPending: props.isPending,
          isSquare:
            typeof props.isSquare === "boolean" ?
              props.isSquare
            : hasOnlySvgChild(props),
        }),
      )}
      {...props}
    >
      {composeRenderProps(props.children, (children, { isPending }) => (
        <>
          {isPending && (
            <div data-progress className={base()}>
              <ProgressCircle className={circle()} />
            </div>
          )}
          <span className="contents">{children}</span>
        </>
      ))}
    </RACButton>
  )
}

interface ProgressCircleProps extends Omit<RACProgressBarProps, "className"> {
  className?: string
}

function ProgressCircle({ className, ...props }: ProgressCircleProps) {
  return (
    <RACProgressBar {...props} aria-label="Loading">
      <svg viewBox="0 0 24 24" className={className}>
        <path
          fill="currentColor"
          d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
          opacity=".25"
        />
        <path
          fill="currentColor"
          d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="0.75s"
            values="0 12 12;360 12 12"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </RACProgressBar>
  )
}

function LinkButton({
  className,
  size,
  variant,
  intent,
  ...props
}: RACLinkProps & VariantProps<typeof style>) {
  let themeProps = useThemeProps({ size, buttonVariant: variant })

  return (
    <RACLink
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

function hasOnlySvgChild(props: Partial<RACLinkProps> | Partial<ButtonProps>) {
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
