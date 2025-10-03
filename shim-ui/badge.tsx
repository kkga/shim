"use client";

import { Children, isValidElement } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { useThemeProps } from "@/shim-ui/lib/theme";

const style = tv({
  base: "inline-flex w-fit items-center justify-center bg-clip-padding font-book leading-none",
  variants: {
    intent: {
      neutral:
        "border border-neutral-line bg-neutral-bg-subtle text-neutral-text",
      accent: "border border-accent-line bg-accent-bg-subtle text-accent-text",
      success:
        "border border-success-line bg-success-bg-subtle text-success-text",
      warning:
        "border border-warning-line bg-warning-bg-subtle text-warning-text",
      danger: "border border-danger-line bg-danger-bg-subtle text-danger-text",
    },
    size: {
      1: "h-4 gap-1 rounded-xs px-[3px] text-[11px]",
      2: "h-5 gap-1 rounded-[3px] px-1 text-xs",
      3: "h-6 gap-1.5 rounded-sm px-1.5 text-[13px]",
      4: "h-7 gap-2 rounded-md px-2 text-sm",
    },
    isSquare: {
      true: "",
    },
  },
  defaultVariants: {
    intent: "accent",
    size: 2,
  },
  compoundVariants: [
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
        isSquare: typeof isSquare === "boolean" ? isSquare : hasOnlySvg,
        className,
      })}
      {...props}
    />
  );
}

export { Badge, type BadgeProps };
