'use client'

import type { ReactNode } from 'react'
import {
  Radio as RACRadio,
  RadioGroup as RACRadioGroup,
  type RadioGroupProps as RACRadioGroupProps,
  type RadioProps,
  type ValidationResult,
} from 'react-aria-components'

import { compose, cva, cxRenderProps, focusVisibleStyle } from '@lib/utils'

import { Description, FieldError, Label } from './Field'

interface RadioGroupProps extends Omit<RACRadioGroupProps, 'children'> {
  label?: string
  children?: ReactNode
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

function RadioGroup(props: RadioGroupProps) {
  return (
    <RACRadioGroup
      {...props}
      className={cxRenderProps(props.className, 'group flex flex-col gap-2')}
    >
      <Label>{props.label}</Label>
      <div className="flex gap-2 group-data-[orientation=vertical]:flex-col group-data-[orientation=horizontal]:gap-4">
        {props.children}
      </div>
      {props.description && <Description>{props.description}</Description>}
      <FieldError>{props.errorMessage}</FieldError>
    </RACRadioGroup>
  )
}

const styles = compose(
  focusVisibleStyle,
  cva({
    base: 'relative size-4 rounded-full border shadow-inner before:size-2 before:rounded-full before:bg-white before:absolute before:inset-0 before:m-auto before:shadow before:invisible',
    variants: {
      isSelected: {
        true: 'before:visible bg-accent-solid border-accent-solid-hover',
        false: 'border-neutral-border bg-neutral-bg',
      },
      isInvalid: {
        true: 'border-error-border bg-error-bg',
      },
      isDisabled: {
        true: 'border-neutral-line shadow-none bg-neutral-bg-subtle',
      },
      size: {
        1: 'size-4 rounded',
        2: 'size-5 rounded-md',
      },
    },
  }),
)

function Radio(props: RadioProps) {
  return (
    <RACRadio
      {...props}
      className={cxRenderProps(
        props.className,
        'group flex items-center gap-2 text-sm text-neutral-text data-[disabled]:text-neutral-placeholder',
      )}
    >
      {(renderProps) => (
        <>
          <div className={styles(renderProps)} />
          {props.children}
        </>
      )}
    </RACRadio>
  )
}

export { Radio, RadioGroup, type RadioGroupProps }
