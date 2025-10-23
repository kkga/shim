"use client";

import { Children, isValidElement } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { useThemeProps } from "@/shim-ui/lib/theme";

const style = tv({
  base: "inline-flex w-fit items-center justify-center bg-clip-padding font-book",
  variants: {
    intent: {
      neutral:
        "inset-ring inset-ring-neutral-line bg-neutral-panel text-neutral-text",
      accent:
        "inset-ring inset-ring-accent-line bg-accent-panel text-accent-text",
      success:
        "inset-ring inset-ring-success-line bg-success-panel text-success-text",
      warning:
        "inset-ring inset-ring-warning-line bg-warning-panel text-warning-text",
      danger:
        "inset-ring inset-ring-danger-line bg-danger-panel text-danger-text",
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
