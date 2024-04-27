'use client'

import {
  Button,
  NumberField as RACNumberField,
  type ButtonProps,
  type NumberFieldProps as RACNumberFieldProps,
  type ValidationResult,
} from 'react-aria-components'

import { compose, cva, cx, cxRenderProps } from '@lib/utils'
import { CaretDown, CaretUp } from '@phosphor-icons/react'
import {
  Description,
  FieldError,
  FieldGroup,
  Input,
  Label,
  fieldGroupStyle,
} from './Field'

interface NumberFieldProps extends RACNumberFieldProps {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  size?: 1 | 2
}

const groupStyles = compose(
  fieldGroupStyle,
  cva({
    variants: {
      size: {
        1: 'h-6',
        2: 'h-8',
      },
    },
  }),
)

function NumberField({
  label,
  description,
  errorMessage,
  size = 1,
  ...props
}: NumberFieldProps) {
  return (
    <RACNumberField
      {...props}
      className={cxRenderProps(props.className, 'group flex flex-col gap-1.5')}
    >
      <Label>{label}</Label>
      <FieldGroup
        className={(renderProps) => groupStyles({ size, ...renderProps })}
      >
        {(renderProps) => (
          <>
            <Input
              className={cx(
                'min-w-0 flex-1 appearance-none self-stretch border-none text-xs text-inherit outline-0 placeholder:text-neutral-placeholder',
                size === 1 ? 'px-2' : 'px-3',
              )}
            />
            <div
              className={cx(
                'flex flex-col self-stretch border-s border-neutral-border group-data-[disabled]:border-neutral-line group-data-[invalid]:border-error-border',
              )}
            >
              <StepperButton slot="increment" className="rounded-tr">
                <CaretUp aria-hidden size={10} weight="bold" />
              </StepperButton>
              <div className="h-px bg-neutral-border group-data-[disabled]:bg-neutral-line group-data-[invalid]:bg-error-border" />
              <StepperButton slot="decrement" className="rounded-br">
                <CaretDown aria-hidden size={10} weight="bold" />
              </StepperButton>
            </div>
          </>
        )}
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </RACNumberField>
  )
}

function StepperButton({ className, ...props }: ButtonProps) {
  return (
    <Button
      {...props}
      className={cx(
        'flex flex-1 cursor-default items-center justify-center px-1.5 text-neutral-text',
        // hovered
        'data-[hovered]:bg-neutral-bg-hover',
        // pressed
        'data-[pressed]:bg-neutral-bg-active',
        // group disabled
        'group-data-[disabled]:text-neutral-placeholder',
        // group invalid
        'group-data-[invalid]:text-error-text',
        className,
      )}
    />
  )
}

export { NumberField, type NumberFieldProps }
