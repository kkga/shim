"use client";

import { focusStyle, INTENTS, type Intent } from "@lib/style";
import { useThemeProps } from "@lib/theme";
import { Children, isValidElement, useContext } from "react";
import {
  composeRenderProps,
  ToggleButton as RacToggleButton,
  type ToggleButtonProps as RacToggleButtonProps,
  ToggleGroupStateContext,
} from "react-aria-components";
import { type ClassValue, tv, type VariantProps } from "tailwind-variants";

const style = tv({
  extend: focusStyle,
  base: [
    "inline-flex shrink-0 items-center justify-center font-book font-sans leading-none!",
  ],
  variants: {
    variant: { soft: "", ghost: "bg-transparent" },
    intent: INTENTS.reduce(
      (acc, intent) => {
        acc[intent] = "";
        return acc;
      },
      {} as Record<Intent, ClassValue>
    ),
    size: {
      1: "h-6 gap-1.5 rounded-sm px-1.5 text-xs",
      2: "h-7 gap-2 rounded-sm px-2 text-sm",
      3: "h-8 gap-2 rounded-md px-2.5 text-sm",
      4: "h-10 gap-2.5 rounded-lg px-3 text-base",
    },
    isFocusVisible: { true: "relative" },
    isDisabled: { true: "cursor-not-allowed" },
    isIconOnly: { true: "" },
    isInGroup: {
      true: [
        "peer relative flex-1 shrink-0",
        "after:-right-[0.5px] after:absolute after:w-px after:bg-neutral-4 last:after:hidden",
        "data-selected:has-[+[data-selected]]:after:block! not-data-selected:has-[+[data-selected]]:after:hidden has-[+[data-selected]]:after:bg-white data-selected:after:hidden",
      ],
    },
  },
  compoundVariants: [
    {
      isInGroup: true,
      variant: "soft",
      class:
        "not-first:not-last:rounded-none first:rounded-r-none last:rounded-l-none",
    },
    { size: 1, isInGroup: true, class: "after:inset-y-0.75" },
    { size: 2, isInGroup: true, class: "after:inset-y-1" },
    { size: 3, isInGroup: true, class: "after:inset-y-1.25" },
    { size: 4, isInGroup: true, class: "after:inset-y-1.5" },
    { size: 1, isIconOnly: true, isInGroup: false, class: "size-6 p-0" },
    { size: 2, isIconOnly: true, isInGroup: false, class: "size-7 p-0" },
    { size: 3, isIconOnly: true, isInGroup: false, class: "size-8 p-0" },
    { size: 4, isIconOnly: true, isInGroup: false, class: "size-10 p-0" },
    {
      intent: "neutral",
      variant: ["soft", "ghost"],
      class:
        "text-neutral-text data-hovered:bg-neutral-bg-hover data-pressed:bg-neutral-bg-active data-selected:bg-neutral-solid data-selected:text-white",
    },
    { intent: "neutral", variant: "soft", class: "bg-neutral-bg" },
    { intent: "neutral", variant: "ghost", class: "bg-transparent" },
    {
      intent: "accent",
      variant: ["soft", "ghost"],
      class:
        "text-accent-text data-hovered:bg-accent-bg-hover data-pressed:bg-accent-bg-active data-selected:bg-accent-solid data-selected:text-white",
    },
    { intent: "accent", variant: "soft", class: "bg-accent-bg" },
    { intent: "accent", variant: "ghost", class: "bg-transparent" },
    {
      intent: "success",
      variant: ["soft", "ghost"],
      class:
        "text-success-text data-hovered:bg-success-bg-hover data-pressed:bg-success-bg-active data-selected:bg-success-solid data-selected:text-white",
    },
    { intent: "success", variant: "soft", class: "bg-success-bg" },
    { intent: "success", variant: "ghost", class: "bg-transparent" },
    {
      intent: "warning",
      variant: ["soft", "ghost"],
      class:
        "text-warning-text data-hovered:bg-warning-bg-hover data-pressed:bg-warning-bg-active data-selected:bg-warning-solid data-selected:text-white",
    },
    { intent: "warning", variant: "soft", class: "bg-warning-bg" },
    { intent: "warning", variant: "ghost", class: "bg-transparent" },
    {
      intent: "danger",
      variant: ["soft", "ghost"],
      class:
        "text-danger-text data-hovered:bg-danger-bg-hover data-pressed:bg-danger-bg-active data-selected:bg-danger-solid data-selected:text-white",
    },
    { intent: "danger", variant: "soft", class: "bg-danger-bg" },
    { intent: "danger", variant: "ghost", class: "bg-transparent" },
    {
      isDisabled: true,
      variant: ["soft"],
      intent: ["neutral", "accent", "success", "warning", "danger"],
      class: "bg-neutral-bg! text-neutral-text-subtle",
    },
    {
      isDisabled: true,
      variant: "ghost",
      intent: ["neutral", "accent", "success", "warning", "danger"],
      class: "bg-transparent! text-neutral-text-subtle",
    },
  ],
  defaultVariants: {
    variant: "soft",
    intent: "neutral",
    size: 1,
  },
});

interface ToggleButtonProps
  extends RacToggleButtonProps,
    Omit<VariantProps<typeof style>, "isInGroup"> {
  variant?: "soft" | "ghost";
}

function ToggleButton({
  variant: _variant,
  size: _size,
  intent,
  isIconOnly,
  ...props
}: ToggleButtonProps) {
  let isInGroup = useContext(ToggleGroupStateContext) !== null;
  let { buttonVariant, size } = useThemeProps({
    size: _size,
    buttonVariant: _variant,
  });

  return (
    <RacToggleButton
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        style({
          ...renderProps,
          isInGroup,
          size,
          intent,
          variant: buttonVariant as "soft" | "ghost",
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

function hasOnlySvgChild(props: Partial<ToggleButtonProps>): boolean {
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

export { ToggleButton, type ToggleButtonProps };
