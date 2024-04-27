'use client'

import { compose, cva, cx, cxRenderProps } from '@lib/utils'
import {
  Button as RACButton,
  SearchField as RACSearchField,
  type SearchFieldProps as RACSearchFieldProps,
  type ValidationResult,
} from 'react-aria-components'

import { MagnifyingGlass, X } from '@phosphor-icons/react'
import {
  Description,
  FieldError,
  FieldGroup,
  Input,
  Label,
  fieldGroupStyle,
} from './Field'

interface SearchFieldProps extends RACSearchFieldProps {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  placeholder?: string
  size?: 1 | 2
}

const groupStyles = compose(
  fieldGroupStyle,
  cva({
    variants: {
      size: {
        1: 'h-6 px-px',
        2: 'h-8 px-[3px]',
      },
    },
  }),
)

const SearchField = ({
  className,
  label,
  description,
  errorMessage,
  placeholder = 'Search',
  size = 1,
  ...props
}: SearchFieldProps) => {
  return (
    <RACSearchField
      {...props}
      className={cxRenderProps(className, 'group flex flex-col gap-1.5')}
    >
      {label && <Label>{label}</Label>}
      <FieldGroup
        className={(renderProps) => groupStyles({ size, ...renderProps })}
      >
        <span
          className={cx(
            'flex items-center justify-center',
            size === 1 && 'size-5',
            size === 2 && 'size-6',
          )}
        >
          <MagnifyingGlass
            size={size === 1 ? 14 : 16}
            weight="regular"
            aria-hidden
            className="text-neutral-placeholder"
          />
        </span>
        <Input
          placeholder={placeholder}
          className="min-w-0 flex-1 appearance-none self-stretch border-none text-sm text-inherit outline-0 placeholder:text-neutral-placeholder autofill:bg-transparent [&::-webkit-search-cancel-button]:hidden"
        />
        <RACButton
          className={cx(
            'flex items-center justify-center bg-transparent text-neutral-text group-data-[empty]:invisible hover:bg-neutral-bg-hover active:bg-neutral-bg-active',
            'group-data-[disabled]:pointer-events-none group-data-[disabled]:text-neutral-placeholder',
            size === 1 && 'size-5 rounded',
            size === 2 && 'size-6 rounded-sm',
          )}
        >
          <X aria-hidden />
        </RACButton>
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </RACSearchField>
  )
}

export { SearchField, type SearchFieldProps }
