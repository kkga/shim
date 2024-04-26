'use client'

import type { VariantProps } from 'cva'
import type { ReactNode } from 'react'

import { Check, Minus } from '@phosphor-icons/react'
import {
  Checkbox as RACCheckbox,
  CheckboxGroup as RACCheckboxGroup,
  type CheckboxGroupProps as RACCheckboxGroupProps,
  type CheckboxProps as RACCheckboxProps,
  type ValidationResult,
} from 'react-aria-components'

import { compose, cva, cx, cxRenderProps, focusVisibleStyle } from '@lib/utils'

import { Description, FieldError, Label } from './Field'

interface CheckboxGroupProps extends Omit<RACCheckboxGroupProps, 'children'> {
  label?: string
  children?: ReactNode
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

function CheckboxGroup(props: CheckboxGroupProps) {
  return (
    <RACCheckboxGroup
      {...props}
      className={cxRenderProps(props.className, 'flex flex-col gap-2')}
    >
      <Label>{props.label}</Label>
      {props.children}
      {props.description && <Description>{props.description}</Description>}
      <FieldError>{props.errorMessage}</FieldError>
    </RACCheckboxGroup>
  )
}

const checkboxStyles = cva({
  base: ['group flex items-center gap-2 text-neutral-text outline-none'],
  variants: {
    size: {
      1: 'text-sm gap-2',
      2: 'text-sm gap-3',
    },
    isDisabled: {
      true: 'text-neutral-placeholder',
    },
  },
  defaultVariants: {
    size: 1,
  },
})

const boxStyles = compose(
  focusVisibleStyle,
  cva({
    base: ['flex shrink-0 items-center justify-center border shadow-inner'],
    variants: {
      isSelected: {
        true: 'border-accent-solid-hover bg-accent-solid text-white',
        false: 'bg-neutral-bg border-neutral-border text-neutral-text',
      },
      isDisabled: {
        true: 'border-neutral-line bg-neutral-bg-subtle text-neutral-placeholder shadow-none',
      },
      size: {
        1: 'size-4 rounded',
        2: 'size-5 rounded-md',
      },
    },
    compoundVariants: [
      {
        isSelected: true,
        isDisabled: true,
        className:
          'border-neutral-line bg-neutral-bg-subtle text-neutral-placeholder',
      },
    ],
    defaultVariants: {
      size: 1,
    },
  })
)

interface CheckboxProps
  extends RACCheckboxProps,
    VariantProps<typeof checkboxStyles>,
    VariantProps<typeof boxStyles> {
  children?: React.ReactNode
}

function Checkbox({ className, size, children, ...props }: CheckboxProps) {
  return (
    <RACCheckbox
      {...props}
      className={cxRenderProps(className, checkboxStyles({ size, ...props }))}
    >
      {({ isSelected, isIndeterminate, ...renderProps }) => (
        <>
          <div
            className={cx(
              boxStyles({
                isSelected: isSelected || isIndeterminate,
                size,
                ...renderProps,
              })
            )}
          >
            {isIndeterminate ? (
              <Minus size={16} />
            ) : isSelected ? (
              <Check size={16} weight="bold" />
            ) : null}
          </div>
          {children}
        </>
      )}
    </RACCheckbox>
  )
}

export { Checkbox, CheckboxGroup, type CheckboxGroupProps, type CheckboxProps }
