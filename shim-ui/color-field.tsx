"use client";

import {
  ColorField as RacColorField,
  type ColorFieldProps as RacColorFieldProps,
} from "react-aria-components";
import {
  Description,
  FieldError,
  type FieldProps,
  fieldLayoutStyle,
  Input,
  Label,
} from "@/shim-ui/field";
import { cnRenderProps } from "@/shim-ui/lib/style";
import {
  buildVariantOverrides,
  Theme,
  useThemeProps,
} from "@/shim-ui/lib/theme";

interface ColorFieldProps extends RacColorFieldProps, FieldProps {}

export function ColorField({
  label,
  description,
  errorMessage,
  ...props
}: ColorFieldProps) {
  const themeProps = useThemeProps({
    ...props,
    ...buildVariantOverrides("field", props.variant),
  });
  const { labelPosition } = themeProps;

  return (
    <RacColorField
      {...props}
      className={cnRenderProps(
        props.className,
        fieldLayoutStyle({ labelPosition })
      )}
    >
      <Theme {...themeProps}>
        {label ? <Label>{label}</Label> : null}
        <Input className="tabular-nums" />
        {description ? <Description>{description}</Description> : null}
        <FieldError>{errorMessage}</FieldError>
      </Theme>
    </RacColorField>
  );
}
