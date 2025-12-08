"use client";

import {
  Separator as RacSeparator,
  type SeparatorProps as RacSeparatorProps,
} from "react-aria-components";
import { type ClassValue, tv, type VariantProps } from "tailwind-variants";
import { type Size, useThemeProps } from "@/shim-ui/lib/theme";

const styles = tv({
  base: "shrink-0 self-stretch border-none bg-neutral-line",
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "w-px",
    },
    size: {
      1: "",
      2: "",
      3: "",
      4: "",
    } satisfies Record<Size, ClassValue>,
  },
  compoundVariants: [
    {
      orientation: "vertical",
      size: 1,
      className: "mx-1",
    },
    {
      orientation: "vertical",
      size: 2,
      className: "mx-2",
    },
    {
      orientation: "vertical",
      size: 3,
      className: "mx-3",
    },
    {
      orientation: "vertical",
      size: 4,
      className: "mx-4",
    },
    {
      orientation: "horizontal",
      size: 1,
      className: "my-2",
    },
    {
      orientation: "horizontal",
      size: 2,
      className: "my-3",
    },
    {
      orientation: "horizontal",
      size: 3,
      className: "my-4",
    },
    {
      orientation: "horizontal",
      size: 4,
      className: "my-6",
    },
  ],
  defaultVariants: {
    orientation: "horizontal",
  },
});

interface SeparatorProps
  extends RacSeparatorProps,
    VariantProps<typeof styles> {}

function Separator(props: SeparatorProps) {
  const { size } = useThemeProps({ size: props.size });

  return (
    <RacSeparator
      {...props}
      className={styles({
        orientation: props.orientation,
        size,
        className: props.className,
      })}
    />
  );
}

export { Separator };
export type { SeparatorProps };
