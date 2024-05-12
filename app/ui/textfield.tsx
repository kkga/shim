"use client"

import { cxRenderProps } from "@lib/utils"
import {
  TextField as RACTextField,
  type TextFieldProps as RACTextFieldProps,
} from "react-aria-components"

import {
  Description,
  FieldContext,
  FieldError,
  FieldProps,
  Input,
  Label,
  fieldLayoutStyle,
  inputBaseStyle,
  useFieldProps,
} from "./field"

interface TextFieldProps extends RACTextFieldProps, FieldProps {}

function TextField({
  label,
  description,
  errorMessage,
  placeholder,
  ...props
}: TextFieldProps) {
  let { labelPosition, size, variant } = useFieldProps(props)

  return (
    <RACTextField
      {...props}
      className={cxRenderProps(
        props.className,
        fieldLayoutStyle({ labelPosition }),
      )}
    >
      <FieldContext.Provider value={{ size, variant, labelPosition }}>
        {label && <Label>{label}</Label>}
        <Input
          placeholder={placeholder}
          className={inputBaseStyle({ size, variant, ...props })}
        />
        {description && <Description>{description}</Description>}
        <FieldError>{errorMessage}</FieldError>
      </FieldContext.Provider>
    </RACTextField>
  )
}

export { TextField, type TextFieldProps }
