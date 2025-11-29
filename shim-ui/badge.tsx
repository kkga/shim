"use client";

import { Children, isValidElement } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { useThemeProps } from "@/shim-ui/lib/theme";

const style = tv({
  base: "inline-flex w-fit items-center justify-center bg-clip-padding font-book",
  variants: {
    variant: {
      surface: "inset-ring",
      soft: "",
      solid: "",
    },
    intent: {
      neutral: "text-neutral-text",
      accent: "text-accent-text",
      success: "text-success-text",
      warning: "text-warning-text",
      danger: "text-danger-text",
    },
    size: {
      1: "h-4 gap-1 rounded-xs px-1 text-[11px] leading-none",
      2: "h-5 gap-1 rounded-[3px] px-1.5 text-xs leading-none",
      3: "h-6 gap-1.5 rounded-sm px-2 text-[13px] leading-none",
      4: "h-7 gap-2 rounded-md px-2.5 text-sm leading-none",
    },
    isSquare: {
      true: "",
    },
  },
  defaultVariants: {
    intent: "accent",
    size: 2,
    variant: "surface",
  },
  compoundVariants: [
    {
      variant: "surface",
      intent: "neutral",
      className: "inset-ring-neutral-line bg-neutral-panel",
    },
    {
      variant: "surface",
      intent: "accent",
      className: "inset-ring-accent-line bg-accent-panel",
    },
    {
      variant: "surface",
      intent: "success",
      className: "inset-ring-success-line bg-success-panel",
    },
    {
      variant: "surface",
      intent: "warning",
      className: "inset-ring-warning-line bg-warning-panel",
    },
    {
      variant: "surface",
      intent: "danger",
      className: "inset-ring-danger-line bg-danger-panel",
    },
    {
      variant: "soft",
      intent: "neutral",
      className: "bg-neutral-bg",
    },
    {
      variant: "soft",
      intent: "accent",
      className: "bg-accent-bg",
    },
    {
      variant: "soft",
      intent: "success",
      className: "bg-success-bg",
    },
    {
      variant: "soft",
      intent: "warning",
      className: "bg-warning-bg",
    },
    {
      variant: "soft",
      intent: "danger",
      className: "bg-danger-bg",
    },
    {
      variant: "solid",
      intent: "neutral",
      className: "bg-neutral-solid",
    },
    {
      variant: "solid",
      intent: "accent",
      className: "bg-accent-solid",
    },
    {
      variant: "solid",
      intent: "success",
      className: "bg-success-solid",
    },
    {
      variant: "solid",
      intent: "warning",
      className: "bg-warning-solid",
    },
    {
      variant: "solid",
      intent: "danger",
      className: "bg-danger-solid",
    },
    {
      variant: "solid",
      intent: ["neutral", "accent", "success", "warning", "danger"],
      className: "text-white",
    },
    {
      isSquare: true,
      size: 1,
      className: "size-4 p-0!",
    },
    {
      isSquare: true,
      size: 2,
      className: "size-5 p-0!",
    },
    {
      isSquare: true,
      size: 3,
      className: "size-6 p-0!",
    },
    {
      isSquare: true,
      size: 4,
      className: "size-8 p-0!",
    },
  ],
});

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof style> {}

function Badge({
  className,
  intent,
  isSquare,
  size: _size,
  variant,
  ...props
}: BadgeProps) {
  let { size } = useThemeProps({ size: _size });
  let children = Children.toArray(props.children);
  let hasOnlySvg =
    children.length === 1 &&
    isValidElement(children[0]) &&
    children[0].type === "svg";

  return (
    <div
      className={style({
        intent,
        size,
        variant,
        isSquare:
          typeof isSquare === "boolean" ? isSquare : Boolean(hasOnlySvg),
        className,
      })}
      {...props}
    />
  );
}

export { Badge, type BadgeProps };
