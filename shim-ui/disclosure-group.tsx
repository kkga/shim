"use client";

import type { DisclosureGroupProps as RacDisclosureGroupProps } from "react-aria-components";
import {
  composeRenderProps,
  DisclosureGroup as RacDisclosureGroup,
} from "react-aria-components";
import { type ClassValue, tv, type VariantProps } from "tailwind-variants";
import { DisclosureVariantContext } from "@/shim-ui/disclosure";
import { cnRenderProps } from "@/shim-ui/lib/style";
import { type Size, Theme, useThemeProps } from "@/shim-ui/lib/theme";

const style = tv({
  base: "",
  variants: {
    size: {
      1: "",
      2: "",
      3: "",
      4: "",
    } satisfies Record<Size, ClassValue>,
    variant: {
      surface: "",
      soft: "",
      ghost: "",
    } satisfies Record<"surface" | "soft" | "ghost", ClassValue>,
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
  const { size } = useThemeProps({ size: _size });

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
