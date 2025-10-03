"use client";

import {
  ColorField as RacColorField,
  type ColorFieldProps as RacColorFieldProps,
} from "react-aria-components";
import { cxRenderProps } from "@/shim-ui/lib/style";
import { Theme, useThemeProps } from "@/shim-ui/lib/theme";
import {
  Description,
  FieldError,
  type FieldProps,
  fieldLayoutStyle,
  Input,
  Label,
} from "./field";

interface ColorFieldProps extends RacColorFieldProps, FieldProps {}

export function ColorField({
  label,
  description,
  errorMessage,
  ...props
}: ColorFieldProps) {
  let themeProps = useThemeProps({ ...props, fieldVariant: props.variant });
  let { labelPosition } = themeProps;

  return (
    <RacColorField
      {...props}
      className={cxRenderProps(
        props.className,
        fieldLayoutStyle({ labelPosition })
      )}
    >
      <Theme {...themeProps}>
        {label && <Label>{label}</Label>}
        <Input className="tabular-nums" />
        {description && <Description>{description}</Description>}
        <FieldError>{errorMessage}</FieldError>
      </Theme>
    </RacColorField>
  );
}
