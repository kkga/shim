"use client";

import type { DisclosureGroupProps as RacDisclosureGroupProps } from "react-aria-components";
import {
  composeRenderProps,
  DisclosureGroup as RacDisclosureGroup,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { cxRenderProps } from "@/lib/style";
import { type Size, Theme, useThemeProps } from "@/lib/theme";

const style = tv({
  base: "border border-neutral-line",
  variants: {
    size: {
      1: "rounded-md",
      2: "rounded-[7px]",
      3: "rounded-lg",
      4: "rounded-xl",
    },
  },
});

interface DisclosureGroupProps extends RacDisclosureGroupProps {
  size?: Size;
}

function DisclosureGroup({
  children,
  className,
  size: _size,
  ...props
}: DisclosureGroupProps) {
  let { size } = useThemeProps({ size: _size });

  return (
    <RacDisclosureGroup
      {...props}
      className={cxRenderProps(className, style({ size }))}
    >
      {composeRenderProps(children, (renderedChildren) => (
        <Theme size={size}>{renderedChildren}</Theme>
      ))}
    </RacDisclosureGroup>
  );
}

export { DisclosureGroup };
export type { DisclosureGroupProps };
