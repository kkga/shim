"use client";

import { Children, isValidElement, useContext } from "react";
import {
  composeRenderProps,
  ToggleButton as RacToggleButton,
  type ToggleButtonProps as RacToggleButtonProps,
  ToggleGroupStateContext,
} from "react-aria-components";
import { type ClassValue, tv, type VariantProps } from "tailwind-variants";
import { INTENTS, type Intent } from "@/shim-ui/lib/style";
import { buildVariantOverrides, useThemeProps } from "@/shim-ui/lib/theme";

const style = tv({
  base: "focus-ring inline-flex shrink-0 items-center justify-center font-book font-sans leading-none!",
  variants: {
    variant: {
      soft: "",
      solid: "",
      ghost: "bg-transparent",
    },
    intent: INTENTS.reduce(
      (acc, intent) => {
        acc[intent] = "";
        return acc;
      },
      {} as Record<Intent, ClassValue>
    ),
    size: {
      1: "h-6 gap-1 rounded-sm px-1.5 text-xs",
      2: "h-7 gap-1.5 rounded-sm px-2 text-sm",
      3: "h-8 gap-1.5 rounded-md px-2.5 text-[15px] leading-normal",
      4: "h-10 gap-2 rounded-lg px-3 text-base",
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
      variant: ["soft", "solid"],
      class:
        "not-first:not-last:rounded-none first:rounded-r-none last:rounded-l-none",
    },
    {
      isInGroup: true,
      variant: "ghost",
      class:
        "[[data-selected]+[data-selected]]:rounded-l-none! [[data-selected]:has(+[data-selected])]:rounded-r-none!",
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
      variant: ["soft", "solid", "ghost"],
      class: [
        "text-neutral-text data-hovered:bg-neutral-bg-hover data-pressed:bg-neutral-bg-active",
        "data-selected:data-hovered:bg-neutral-solid-hover data-selected:data-pressed:brightness-90 data-selected:bg-neutral-solid data-selected:text-white",
      ],
    },
    { intent: "neutral", variant: ["soft", "solid"], class: "bg-neutral-bg" },
    { intent: "neutral", variant: "ghost", class: "bg-transparent" },
    {
      intent: "accent",
      variant: ["soft", "solid", "ghost"],
      class: [
        "text-accent-text data-hovered:bg-accent-bg-hover data-pressed:bg-accent-bg-active",
        "data-selected:data-hovered:bg-accent-solid-hover data-selected:data-pressed:brightness-90 data-selected:bg-accent-solid data-selected:text-white",
      ],
    },
    { intent: "accent", variant: ["soft", "solid"], class: "bg-accent-bg" },
    { intent: "accent", variant: "ghost", class: "bg-transparent" },
    {
      intent: "success",
      variant: ["soft", "solid", "ghost"],
      class: [
        "text-success-text data-hovered:bg-success-bg-hover data-pressed:bg-success-bg-active",
        "data-selected:data-hovered:bg-success-solid-hover data-selected:data-pressed:brightness-90 data-selected:bg-success-solid data-selected:text-white",
      ],
    },
    { intent: "success", variant: ["soft", "solid"], class: "bg-success-bg" },
    { intent: "success", variant: "ghost", class: "bg-transparent" },
    {
      intent: "warning",
      variant: ["soft", "solid", "ghost"],
      class: [
        "text-warning-text data-hovered:bg-warning-bg-hover data-pressed:bg-warning-bg-active",
        "data-selected:data-hovered:bg-warning-solid-hover data-selected:data-pressed:brightness-90 data-selected:bg-warning-solid data-selected:text-white",
      ],
    },
    { intent: "warning", variant: ["soft", "solid"], class: "bg-warning-bg" },
    { intent: "warning", variant: "ghost", class: "bg-transparent" },
    {
      intent: "danger",
      variant: ["soft", "solid", "ghost"],
      class: [
        "text-danger-text data-hovered:bg-danger-bg-hover data-pressed:bg-danger-bg-active",
        "data-selected:data-hovered:bg-danger-solid-hover data-selected:data-pressed:brightness-90 data-selected:bg-danger-solid data-selected:text-white",
      ],
    },
    { intent: "danger", variant: ["soft", "solid"], class: "bg-danger-bg" },
    { intent: "danger", variant: "ghost", class: "bg-transparent" },
    {
      isDisabled: true,
      variant: ["soft", "solid"],
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
    Omit<VariantProps<typeof style>, "isInGroup"> {}

function ToggleButton({ intent, isIconOnly, ...props }: ToggleButtonProps) {
  const isInGroup = useContext(ToggleGroupStateContext) !== null;
  const { variants, size } = useThemeProps({
    ...props,
    ...buildVariantOverrides("button", props.variant),
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
          variant: variants.button,
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
