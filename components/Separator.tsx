"use client";

import {
  Separator as RacSeparator,
  type SeparatorProps as RacSeparatorProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";

const styles = tv({
  base: "shrink-0 self-stretch border-none bg-neutral-line",
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "w-px",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

function Separator(props: RacSeparatorProps) {
  return (
    <RacSeparator
      {...props}
      className={styles({
        orientation: props.orientation,
        className: props.className,
      })}
    />
  );
}

type SeparatorProps = RacSeparatorProps;

export { Separator };
export type { SeparatorProps };
