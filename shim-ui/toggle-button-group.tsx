"use client";

import type { ToggleButtonGroupProps as RacToggleButtonGroupProps } from "react-aria-components";
import {
  composeRenderProps,
  ToggleButtonGroup as RacToggleButtonGroup,
} from "react-aria-components";
import { type ClassValue, tv, type VariantProps } from "tailwind-variants";
import {
  Description,
  FieldError,
  type FieldProps,
  fieldLayoutStyle,
  Label,
} from "@/shim-ui/field";
import { cnRenderProps } from "@/shim-ui/lib/style";
import {
  type ButtonVariant,
  buildVariantOverrides,
  type Size,
  Theme,
  useThemeProps,
} from "@/shim-ui/lib/theme";

const style = tv({
  base: "group grid auto-cols-fr grid-flow-col",
  variants: {
    variant: {
      soft: "",
      solid: "",
      ghost: "",
    } satisfies Record<ButtonVariant, ClassValue>,
    size: {
      1: "rounded-sm",
      2: "rounded-sm",
      3: "rounded-md",
      4: "rounded-lg",
    } satisfies Record<Size, ClassValue>,
  },
  defaultVariants: {
    size: 1,
    variant: "soft",
  },
});

interface ToggleButtonGroupProps
  extends RacToggleButtonGroupProps,
    Omit<FieldProps, "variant">,
    VariantProps<typeof style> {}

function ToggleButtonGroup({
  label,
  description,
  className,
  errorMessage,
  ...props
}: ToggleButtonGroupProps) {
  const themeProps = useThemeProps({
    ...props,
    ...buildVariantOverrides("button", props.variant),
  });

  return (
    <RacToggleButtonGroup
      {...props}
      className={cnRenderProps(
        className,
        fieldLayoutStyle({ labelPosition: themeProps.labelPosition })
      )}
    >
      {composeRenderProps(props.children, (children) => (
        <Theme {...themeProps}>
          {label ? <Label>{label}</Label> : null}
          <div className={style()}>{children}</div>
          {description ? <Description>{description}</Description> : null}
          <FieldError>{errorMessage}</FieldError>
        </Theme>
      ))}
    </RacToggleButtonGroup>
  );
}

export { ToggleButtonGroup };
