"use client"

import { compose, cva, cxRenderProps } from "@lib/utils"
import {
  TextField as RACTextField,
  type TextFieldProps as RACTextFieldProps,
  type ValidationResult,
} from "react-aria-components"

import { Description, FieldError, Input, Label, fieldStyle } from "./field"

interface TextFieldProps extends RACTextFieldProps {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  placeholder?: string
  size?: 1 | 2
}

const inputStyles = compose(
  fieldStyle,
  cva({
    variants: {
      size: {
        1: "h-6 px-2",
        2: "h-8 px-3",
      },
    },
  }),
)

const TextField = ({
  label,
  description,
  errorMessage,
  placeholder,
  className,
  size = 1,
  ...props
}: TextFieldProps) => {
  return (
    <RACTextField
      className={cxRenderProps(className, "group flex flex-col gap-1.5")}
      {...props}
    >
      {label && <Label>{label}</Label>}
      <Input
        placeholder={placeholder}
        className={(renderProps) => inputStyles({ size, ...renderProps })}
      />
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </RACTextField>
  )
}

export { TextField, type TextFieldProps }
