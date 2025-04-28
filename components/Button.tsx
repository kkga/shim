"use client"

import { focusStyle, INTENTS, type Intent } from "@lib/style"
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
  base: "leading-none! inline-flex shrink-0 items-center justify-center font-sans font-medium",
  variants: {
    variant: { soft: "", solid: "text-white", ghost: "bg-transparent" },
    intent: INTENTS.reduce(
      (acc, intent) => {
        acc[intent] = ""
        return acc
      },
      {} as Record<Intent, ClassValue>,
    ),
    size: {
      1: "h-6 gap-1 rounded-sm px-2 text-xs",
      2: "h-7 gap-2 rounded-sm px-2 text-sm",
      3: "h-8 gap-2 rounded-md px-2.5 text-base",
      4: "h-10 gap-2.5 rounded-lg px-3 text-base",
    },
    isDisabled: {
      true: "cursor-not-allowed",
    },
    isIconOnly: { true: "" },
    isPending: { true: "*:not-data-progress:invisible relative" },
  },
  compoundVariants: [
    { size: 1, isIconOnly: true, className: "size-6 p-0" },
    { size: 2, isIconOnly: true, className: "size-7 p-0" },
    { size: 3, isIconOnly: true, className: "size-8 p-0" },
    { size: 4, isIconOnly: true, className: "size-10 p-0" },
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
      intent: "danger",
      variant: "soft",
      className:
        "text-danger-text bg-danger-bg data-hovered:bg-danger-bg-hover data-pressed:bg-danger-bg-active",
    },
    {
      intent: "danger",
      variant: "ghost",
      className:
        "text-danger-text data-hovered:bg-danger-bg-hover data-pressed:bg-danger-bg-active bg-transparent",
    },
    {
      intent: "danger",
      variant: "solid",
      className:
        "bg-danger-solid data-hovered:bg-danger-solid-hover data-pressed:brightness-90 text-white",
    },
    {
      isDisabled: true,
      variant: ["soft", "solid"],
      intent: ["accent", "success", "warning", "danger", "neutral"],
      class: "text-neutral-text-subtle bg-neutral-bg!",
    },
    {
      isDisabled: true,
      variant: "ghost",
      intent: ["accent", "success", "warning", "danger", "neutral"],
      className: "text-neutral-text-subtle bg-transparent!",
    },
  ],
  defaultVariants: {
    intent: "neutral",
    variant: "soft",
    size: 1,
  },
})

const progressStyle = tv({
  slots: {
    container: "absolute inset-0 m-auto size-fit",
    circle: "",
  },
  variants: {
    size: {
      1: { circle: "size-4" },
      2: { circle: "size-5" },
      3: { circle: "size-6" },
      4: { circle: "size-7" },
    },
  },
})

interface ButtonProps extends RACButtonProps, VariantProps<typeof style> {}

function Button({
  size: _size,
  variant: _variant,
  intent,
  isIconOnly,
  ...props
}: ButtonProps) {
  let { buttonVariant, size } = useThemeProps({
    size: _size,
    buttonVariant: _variant,
  })
  let { container, circle } = progressStyle({ size })

  return (
    <RACButton
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        style({
          ...renderProps,
          variant: buttonVariant,
          intent,
          size,
          isIconOnly:
            typeof isIconOnly === "boolean" ? isIconOnly : (
              hasOnlySvgChild(props)
            ),
          className,
        }),
      )}
    >
      {composeRenderProps(props.children, (children, { isPending }) => (
        <>
          {isPending && (
            <div data-progress className={container()}>
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
  let [c, r] = ["50%", "calc(50% - 2px)"]

  return (
    <RACProgressBar {...props} aria-label="Loading">
      <svg viewBox="0 0 16 16" className={className} fill="none">
        <circle
          cx={c}
          cy={c}
          r={r}
          strokeWidth={1.5}
          stroke="currentColor"
          strokeOpacity={0.25}
        />
        <circle
          cx={c}
          cy={c}
          r={r}
          strokeWidth={1.5}
          stroke="currentColor"
          pathLength={100}
          strokeDasharray="100 200"
          strokeDashoffset={100 - 25}
          strokeLinecap="round"
          className="origin-center animate-[spin_700ms_linear_infinite]"
        />
      </svg>
    </RACProgressBar>
  )
}

function LinkButton({
  size: _size,
  variant: _variant,
  intent,
  isIconOnly,
  ...props
}: RACLinkProps & VariantProps<typeof style>) {
  let { buttonVariant, size } = useThemeProps({
    size: _size,
    buttonVariant: _variant,
  })

  return (
    <RACLink
      {...props}
      className={composeRenderProps(
        props.className,
        (className, { isDisabled, ...renderProps }) =>
          style({
            ...renderProps,
            variant: buttonVariant,
            intent,
            isDisabled,
            size,
            isIconOnly:
              typeof isIconOnly === "boolean" ? isIconOnly : (
                hasOnlySvgChild(props)
              ),
            className,
          }),
      )}
    />
  )
}

function hasOnlySvgChild(props: Partial<RACLinkProps> | Partial<ButtonProps>) {
  const children =
    typeof props.children !== "function" ?
      Children.toArray(props.children)
    : null

  return (
    Array.isArray(children) &&
    children.length === 1 &&
    isValidElement(children[0]) &&
    children[0].type === "svg"
  )
}

export { Button, LinkButton, type ButtonProps }
