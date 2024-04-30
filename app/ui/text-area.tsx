'use client'

import { compose, cva, cxRenderProps } from '@lib/utils'
import {
  TextField as RACTextField,
  type TextFieldProps as RACTextFieldProps,
  type ValidationResult,
} from 'react-aria-components'

import {
  Description,
  FieldError,
  Label,
  TextAreaInput,
  fieldStyle,
} from './field'

interface TextAreaProps extends RACTextFieldProps {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  placeholder?: string
  size?: 1 | 2
}

const textAreaStyles = compose(
  fieldStyle,
  cva({
    variants: {
      size: {
        1: 'min-h-12 px-2 py-1',
        2: 'min-h-16 px-3 py-1.5',
      },
    },
  }),
)

const TextArea = ({
  label,
  description,
  errorMessage,
  placeholder,
  className,
  size = 1,
  ...props
}: TextAreaProps) => {
  return (
    <RACTextField
      className={cxRenderProps(className, 'group flex flex-col gap-1.5')}
      {...props}
    >
      {label && <Label>{label}</Label>}
      <TextAreaInput
        placeholder={placeholder}
        className={(renderProps) => textAreaStyles({ size, ...renderProps })}
      />
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </RACTextField>
  )
}

export { TextArea, type TextAreaProps }
