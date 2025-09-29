"use client"

import { cxRenderProps } from "@lib/style"
import {
  TextField as RACTextField,
  type TextFieldProps as RACTextFieldProps,
} from "react-aria-components"

import { Theme, useThemeProps } from "@lib/theme"
import {
  Description,
  FieldError,
  FieldProps,
  Input,
  Label,
  fieldLayoutStyle,
} from "./Field"

interface TextFieldProps extends RACTextFieldProps, FieldProps {}

function TextField({
  label,
  className,
  description,
  errorMessage,
  placeholder,
  ...props
}: TextFieldProps) {
  let themeProps = useThemeProps({ ...props, fieldVariant: props.variant })
  let { labelPosition } = themeProps

  return (
    <RACTextField
      {...props}
      className={cxRenderProps(className, fieldLayoutStyle({ labelPosition }))}
    >
      <Theme {...themeProps}>
        {label && <Label isRequired={props.isRequired}>{label}</Label>}
        <Input placeholder={placeholder} />
        {description && <Description>{description}</Description>}
        <FieldError>{errorMessage}</FieldError>
      </Theme>
    </RACTextField>
  )
}

export { TextField, type TextFieldProps }
