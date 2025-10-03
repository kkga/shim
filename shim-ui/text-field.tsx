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
import { cxRenderProps } from "@/shim-ui/lib/style";
import { Theme, useThemeProps } from "@/shim-ui/lib/theme";

interface TextFieldProps extends RacTextFieldProps, FieldProps {}

function TextField({
  label,
  className,
  description,
  errorMessage,
  placeholder,
  ...props
}: TextFieldProps) {
  let themeProps = useThemeProps({ ...props, fieldVariant: props.variant });
  let { labelPosition } = themeProps;

  return (
    <RacTextField
      {...props}
      className={cxRenderProps(className, fieldLayoutStyle({ labelPosition }))}
    >
      <Theme {...themeProps}>
        {label && <Label isRequired={props.isRequired}>{label}</Label>}
        <Input placeholder={placeholder} />
        {description && <Description>{description}</Description>}
        <FieldError>{errorMessage}</FieldError>
      </Theme>
    </RacTextField>
  );
}

export { TextField, type TextFieldProps };
