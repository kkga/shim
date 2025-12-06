"use client";

import {
  composeRenderProps,
  Toolbar as RacToolbar,
  type ToolbarProps as RacToolbarProps,
} from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";
import { Theme, useThemeProps } from "@/shim-ui/lib/theme";

const style = tv({
  base: "flex **:[[role=separator]]:mx-1",
  variants: {
    size: {
      1: "gap-1",
      2: "gap-2",
      3: "gap-2",
      4: "gap-2.5",
    },
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col items-start",
    },
  },
});

interface ToolbarProps extends RacToolbarProps, VariantProps<typeof style> {}

function Toolbar(props: ToolbarProps) {
  const themeProps = useThemeProps();

  return (
    <RacToolbar
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        style({ ...renderProps, size: themeProps.size, className })
      )}
    >
      {composeRenderProps(props.children, (renderedChildren) => (
        <Theme {...themeProps}>{renderedChildren}</Theme>
      ))}
    </RacToolbar>
  );
}

export { Toolbar };
export type { ToolbarProps };
