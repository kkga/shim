"use client";

import {
  TextField as RacTextField,
  type TextFieldProps as RacTextFieldProps,
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

interface TextFieldProps extends RacTextFieldProps, FieldProps {}

function TextField({
  label,
  className,
  description,
  errorMessage,
  placeholder,
  ...props
}: TextFieldProps) {
  const themeProps = useThemeProps({
    ...props,
    ...buildVariantOverrides("field", props.variant),
  });
  const { labelPosition } = themeProps;

  return (
    <RacTextField
      {...props}
      className={cnRenderProps(className, fieldLayoutStyle({ labelPosition }))}
    >
      <Theme {...themeProps}>
        {label ? <Label isRequired={props.isRequired}>{label}</Label> : null}
        <Input placeholder={placeholder} />
        {description ? <Description>{description}</Description> : null}
        <FieldError>{errorMessage}</FieldError>
      </Theme>
    </RacTextField>
  );
}

export { TextField, type TextFieldProps };
