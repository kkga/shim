"use client";

import { focusStyle, INTENTS, type Intent } from "@lib/style";
import { useThemeProps } from "@lib/theme";
import { Children, isValidElement } from "react";
import {
  composeRenderProps,
  Button as RacButton,
  type ButtonProps as RacButtonProps,
  Link as RacLink,
  type LinkProps as RacLinkProps,
  ProgressBar as RacProgressBar,
  type ProgressBarProps as RacProgressBarProps,
} from "react-aria-components";
import { type ClassValue, tv, type VariantProps } from "tailwind-variants";

const style = tv({
  extend: focusStyle,
  base: "inline-flex shrink-0 items-center justify-center font-medium font-sans leading-none!",
  variants: {
    variant: { soft: "", solid: "text-white", ghost: "bg-transparent" },
    intent: INTENTS.reduce(
      (acc, intent) => {
        acc[intent] = "";
        return acc;
      },
      {} as Record<Intent, ClassValue>
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
    isPending: { true: "relative *:not-data-progress:invisible" },
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
        "bg-neutral-bg text-neutral-text data-hovered:bg-neutral-bg-hover data-pressed:bg-neutral-bg-active",
    },
    {
      intent: "neutral",
      variant: "ghost",
      className:
        "bg-transparent text-neutral-text data-hovered:bg-neutral-bg-hover data-pressed:bg-neutral-bg-active",
    },
    {
      intent: "neutral",
      variant: "solid",
      className:
        "bg-neutral-solid text-white data-hovered:bg-neutral-solid-hover data-pressed:brightness-90",
    },

    {
      intent: "accent",
      variant: "soft",
      className:
        "bg-accent-bg text-accent-text data-hovered:bg-accent-bg-hover data-pressed:bg-accent-bg-active",
    },
    {
      intent: "accent",
      variant: "ghost",
      className:
        "bg-transparent text-accent-text data-hovered:bg-accent-bg-hover data-pressed:bg-accent-bg-active",
    },
    {
      intent: "accent",
      variant: "solid",
      className:
        "bg-accent-solid text-white data-hovered:bg-accent-solid-hover data-pressed:brightness-90",
    },
    {
      intent: "success",
      variant: "soft",
      className:
        "bg-success-bg text-success-text data-hovered:bg-success-bg-hover data-pressed:bg-success-bg-active",
    },
    {
      intent: "success",
      variant: "ghost",
      className:
        "bg-transparent text-success-text data-hovered:bg-success-bg-hover data-pressed:bg-success-bg-active",
    },
    {
      intent: "success",
      variant: "solid",
      className:
        "bg-success-solid text-white data-hovered:bg-success-solid-hover data-pressed:brightness-90",
    },
    {
      intent: "warning",
      variant: "soft",
      className:
        "bg-warning-bg text-warning-text data-hovered:bg-warning-bg-hover data-pressed:bg-warning-bg-active",
    },
    {
      intent: "warning",
      variant: "ghost",
      className:
        "bg-transparent text-warning-text data-hovered:bg-warning-bg-hover data-pressed:bg-warning-bg-active",
    },
    {
      intent: "warning",
      variant: "solid",
      className:
        "bg-warning-solid text-white data-hovered:bg-warning-solid-hover data-pressed:brightness-90",
    },
    {
      intent: "danger",
      variant: "soft",
      className:
        "bg-danger-bg text-danger-text data-hovered:bg-danger-bg-hover data-pressed:bg-danger-bg-active",
    },
    {
      intent: "danger",
      variant: "ghost",
      className:
        "bg-transparent text-danger-text data-hovered:bg-danger-bg-hover data-pressed:bg-danger-bg-active",
    },
    {
      intent: "danger",
      variant: "solid",
      className:
        "bg-danger-solid text-white data-hovered:bg-danger-solid-hover data-pressed:brightness-90",
    },
    {
      isDisabled: true,
      variant: ["soft", "solid"],
      intent: ["accent", "success", "warning", "danger", "neutral"],
      class: "bg-neutral-bg! text-neutral-text-subtle",
    },
    {
      isDisabled: true,
      variant: "ghost",
      intent: ["accent", "success", "warning", "danger", "neutral"],
      className: "bg-transparent! text-neutral-text-subtle",
    },
  ],
  defaultVariants: {
    intent: "neutral",
    variant: "soft",
    size: 1,
  },
});

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
});

interface ButtonProps extends RacButtonProps, VariantProps<typeof style> {}

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
  });
  let { container, circle } = progressStyle({ size });

  return (
    <RacButton
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        style({
          ...renderProps,
          variant: buttonVariant,
          intent,
          size,
          isIconOnly:
            typeof isIconOnly === "boolean"
              ? isIconOnly
              : hasOnlySvgChild(props),
          className,
        })
      )}
    >
      {composeRenderProps(props.children, (children, { isPending }) => (
        <>
          {isPending && (
            <div className={container()} data-progress>
              <ProgressCircle className={circle()} />
            </div>
          )}
          <span className="contents">{children}</span>
        </>
      ))}
    </RacButton>
  );
}

interface ProgressCircleProps extends Omit<RacProgressBarProps, "className"> {
  className?: string;
}

function ProgressCircle({ className, ...props }: ProgressCircleProps) {
  let [c, r] = ["50%", "calc(50% - 2px)"];

  return (
    <RacProgressBar {...props} aria-label="Loading">
      <svg className={className} fill="none" viewBox="0 0 16 16">
        <title>Loading indicator</title>
        <circle
          cx={c}
          cy={c}
          r={r}
          stroke="currentColor"
          strokeOpacity={0.25}
          strokeWidth={1.5}
        />
        <circle
          className="origin-center animate-[spin_700ms_linear_infinite]"
          cx={c}
          cy={c}
          pathLength={100}
          r={r}
          stroke="currentColor"
          strokeDasharray="100 200"
          // biome-ignore lint/style/noMagicNumbers: no need to extract
          strokeDashoffset={100 - 25}
          strokeLinecap="round"
          strokeWidth={1.5}
        />
      </svg>
    </RacProgressBar>
  );
}

function LinkButton({
  size: _size,
  variant: _variant,
  intent,
  isIconOnly,
  ...props
}: RacLinkProps & VariantProps<typeof style>) {
  let { buttonVariant, size } = useThemeProps({
    size: _size,
    buttonVariant: _variant,
  });

  return (
    <RacLink
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
              typeof isIconOnly === "boolean"
                ? isIconOnly
                : hasOnlySvgChild(props),
            className,
          })
      )}
    />
  );
}

function hasOnlySvgChild(props: Partial<RacLinkProps> | Partial<ButtonProps>) {
  const children =
    typeof props.children !== "function"
      ? Children.toArray(props.children)
      : null;

  return (
    Array.isArray(children) &&
    children.length === 1 &&
    isValidElement(children[0]) &&
    children[0].type === "svg"
  );
}

export { Button, LinkButton, type ButtonProps };
