"use client";

import {
  composeRenderProps,
  Toolbar as RacToolbar,
  type ToolbarProps as RacToolbarProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";

const style = tv({
  base: "flex gap-2",
  variants: {
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col items-start",
    },
  },
});

export function Toolbar(props: RacToolbarProps) {
  return (
    <RacToolbar
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        style({ ...renderProps, className })
      )}
    />
  );
}
