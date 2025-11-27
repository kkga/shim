"use client";

import type { DisclosureGroupProps as RacDisclosureGroupProps } from "react-aria-components";
import {
  composeRenderProps,
  DisclosureGroup as RacDisclosureGroup,
} from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";
import { cnRenderProps } from "@/shim-ui/lib/style";
import { Theme, useThemeProps } from "@/shim-ui/lib/theme";
import { DisclosureVariantContext } from "./disclosure";

const style = tv({
  base: "",
  variants: {
    size: {
      1: "",
      2: "",
      3: "",
      4: "",
    },
    variant: {
      surface: "",
      soft: "",
      ghost: "",
    },
  },
});

interface DisclosureGroupProps
  extends RacDisclosureGroupProps,
    VariantProps<typeof style> {}

function DisclosureGroup({
  children,
  className,
  size: _size,
  variant = "soft",
  ...props
}: DisclosureGroupProps) {
  let { size } = useThemeProps({ size: _size });

  return (
    <RacDisclosureGroup
      {...props}
      className={cnRenderProps(className, style({ size }))}
    >
      {composeRenderProps(children, (renderedChildren) => (
        <Theme size={size}>
          <DisclosureVariantContext.Provider value={variant}>
            {renderedChildren}
          </DisclosureVariantContext.Provider>
        </Theme>
      ))}
    </RacDisclosureGroup>
  );
}

export { DisclosureGroup };
export type { DisclosureGroupProps };
