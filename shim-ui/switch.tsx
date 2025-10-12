"use client";

import {
  composeRenderProps,
  Switch as RacSwitch,
  type SwitchProps as RacSwitchProps,
} from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";
import type { FieldProps } from "@/shim-ui/field";
import { focusStyle } from "@/shim-ui/lib/style";
import { Theme, useThemeProps } from "@/shim-ui/lib/theme";

const style = tv({
  slots: {
    container:
      "group flex items-center font-medium text-neutral-text outline-none",
    track: [
      focusStyle(),
      "flex shrink-0 items-center rounded-full px-px outline-offset-1 transition-colors",
    ],
    handle:
      "translateX-0 transform rounded-full bg-clip-content transition-all",
  },
  variants: {
    variant: {
      classic: {
        track: "bg-neutral-panel shadow-[var(--shadow-inner)]",
        handle: "bg-white shadow-[var(--shadow-xs)]",
      },
      soft: {
        track: "inset-ring-1 inset-ring-neutral-3 bg-neutral-bg-hover",
        handle: "border border-transparent bg-neutral-solid",
      },
      outline: {
        track: "inset-ring-1 inset-ring-neutral-border bg-transparent",
        handle:
          "inset-ring inset-ring-neutral-border border border-transparent bg-neutral-bg",
      },
    },
    isPressed: { true: "" },
    isSelected: { true: "" },
    isDisabled: {
      true: {
        container: "cursor-not-allowed text-neutral-text-subtle",
        handle: "bg-neutral-panel",
      },
    },
    size: {
      1: {
        container: "h-6 gap-1.5 text-xs",
        track: "h-4 w-[28px]",
        handle: "size-3.5",
      },
      2: {
        container: "h-7 gap-2 text-sm",
        track: "h-[18px] w-[32px]",
        handle: "size-4",
      },
      3: {
        container: "h-8 gap-2 text-sm",
        track: "h-5 w-[36px]",
        handle: "size-[18px]",
      },
      4: {
        container: "h-10 gap-2.5 text-base",
        track: "h-6 w-[42px]",
        handle: "size-5.5",
      },
    },
    labelPosition: {
      start: { container: "flex-row-reverse justify-between" },
      end: { container: "" },
    },
  },
  compoundVariants: [
    { size: 1, isSelected: true, class: { handle: "translate-x-[12px]" } },
    { size: 2, isSelected: true, class: { handle: "translate-x-[14px]" } },
    { size: 3, isSelected: true, class: { handle: "translate-x-[16px]" } },
    { size: 4, isSelected: true, class: { handle: "translate-x-[18px]" } },
    {
      isPressed: true,
      isDisabled: false,
      variant: ["classic", "soft", "outline"],
      class: {
        track: "bg-neutral-bg-active",
      },
    },
    {
      variant: "classic",
      isSelected: true,
      isDisabled: false,
      class: {
        track: "bg-accent-solid",
        handle: "shadow-black/5 shadow-xs",
      },
    },
    {
      variant: "soft",
      isSelected: true,
      isDisabled: false,
      class: {
        track: "bg-accent-bg-active",
        handle: "bg-accent-solid",
      },
    },
    {
      variant: "outline",
      isSelected: true,
      isDisabled: false,
      class: {
        track: "inset-ring-accent-border",
        handle: "inset-ring-transparent bg-accent-solid",
      },
    },
    {
      isDisabled: true,
      variant: ["classic", "soft", "outline"],
      class: {
        track:
          "inset-ring inset-ring-neutral-line bg-neutral-panel shadow-none",
      },
    },
  ],
});

interface SwitchProps
  extends RacSwitchProps,
    Omit<
      FieldProps,
      "label" | "description" | "labelPosition" | "errorMessage"
    >,
    VariantProps<typeof style> {}

function Switch({ labelPosition, ...props }: SwitchProps) {
  let themeProps = useThemeProps({
    size: props.size,
    fieldVariant: props.variant,
  });
  let { size, fieldVariant: variant } = themeProps;
  let { container, track, handle } = style({ size, variant, labelPosition });

  return (
    <RacSwitch
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        container({ ...renderProps, className })
      )}
    >
      {composeRenderProps(props.children, (children, renderProps) => (
        <Theme {...themeProps}>
          <div className={track(renderProps)}>
            <span className={handle(renderProps)} />
          </div>
          {children}
        </Theme>
      ))}
    </RacSwitch>
  );
}

export { Switch, type SwitchProps };
