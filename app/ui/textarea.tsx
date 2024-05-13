"use client"

import { compose, cva, cxRenderProps } from "@lib/utils"
import {
  TextField as RACTextField,
  type TextFieldProps as RACTextFieldProps,
} from "react-aria-components"

import {
  Description,
  FieldContext,
  FieldError,
  FieldProps,
  Label,
  TextAreaInput,
  fieldLayoutStyle,
  inputBaseStyle,
  useFieldProps,
} from "./field"

interface TextAreaProps extends RACTextFieldProps, FieldProps {}

const textAreaStyle = compose(
  inputBaseStyle,
  cva({
    variants: {
      size: {
        1: "min-h-12 indent-0 px-1.5 py-1",
        2: "min-h-16 indent-0 px-2 py-1.5",
        3: "min-h-20 indent-0 px-2 py-1.5",
      },
    },
    defaultVariants: {
      size: 1,
    },
  }),
)

function TextArea({
  label,
  description,
  errorMessage,
  placeholder,
  className,
  ...props
}: TextAreaProps) {
  let { labelPosition, size, variant } = useFieldProps(props)

  return (
    <RACTextField
      {...props}
      className={cxRenderProps(className, fieldLayoutStyle({ labelPosition }))}
    >
      <FieldContext.Provider value={{ size, variant, labelPosition }}>
        {label && <Label>{label}</Label>}
        <TextAreaInput
          placeholder={placeholder}
          className={textAreaStyle({ size, variant })}
        />
        {description && <Description>{description}</Description>}
        <FieldError>{errorMessage}</FieldError>
      </FieldContext.Provider>
    </RACTextField>
  )
}

export { TextArea, type TextAreaProps }
