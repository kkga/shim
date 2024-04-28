'use client'

import { compose, cva, cx, cxRenderProps } from '@lib/utils'
import {
  Button as RACButton,
  SearchField as RACSearchField,
  type SearchFieldProps as RACSearchFieldProps,
  type ValidationResult,
} from 'react-aria-components'

import { FunnelSimple, MagnifyingGlass, X } from '@phosphor-icons/react'
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
  prefixIcon?: 'search' | 'filter' | null | React.ReactNode
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

const PrefixIcon = ({
  size,
  className,
  icon,
}: {
  size: 1 | 2
  icon: 'search' | 'filter' | React.ReactNode
  className?: string
}) => (
  <div
    aria-hidden
    className={cx(
      'flex items-center justify-center',
      size === 1 && 'size-5',
      size === 2 && 'size-6',
      className,
    )}
  >
    {icon === 'search' ?
      <MagnifyingGlass size={size === 1 ? 14 : 16} weight="regular" />
    : icon === 'filter' ?
      <FunnelSimple size={size === 1 ? 14 : 16} weight="regular" />
    : icon}
  </div>
)

const SearchField = ({
  className,
  label,
  description,
  errorMessage,
  size = 1,
  placeholder = 'Search',
  prefixIcon = 'search',
  ...props
}: SearchFieldProps) => {
  return (
    <RACSearchField
      {...props}
      className={cxRenderProps(className, 'group flex flex-col gap-1.5')}
    >
      {({ isEmpty, isDisabled }) => (
        <>
          {label && <Label>{label}</Label>}
          <FieldGroup
            className={(renderProps) =>
              cx(
                groupStyles({ size, ...renderProps }),
                !prefixIcon && size === 1 && 'pl-2',
                !prefixIcon && size === 2 && 'pl-3',
              )
            }
          >
            {prefixIcon && (
              <PrefixIcon
                size={size}
                icon={prefixIcon}
                className={
                  isEmpty ? 'text-neutral-placeholder' : 'text-accent-text'
                }
              />
            )}
            <Input
              placeholder={placeholder}
              className={cx(
                'min-w-0 flex-1 appearance-none self-stretch border-none text-sm text-inherit outline-0 placeholder:text-neutral-placeholder autofill:bg-transparent [&::-webkit-search-cancel-button]:hidden',
              )}
            />
            <RACButton
              className={cx(
                'flex items-center justify-center bg-transparent text-neutral-text hover:bg-neutral-bg-hover active:bg-neutral-bg-active',
                isEmpty && 'invisible',
                isDisabled && 'pointer-events-none text-neutral-placeholder',
                size === 1 && 'size-5 rounded',
                size === 2 && 'size-6 rounded-sm',
              )}
            >
              <X size={16} aria-hidden />
            </RACButton>
          </FieldGroup>
          {description && <Description>{description}</Description>}
          <FieldError>{errorMessage}</FieldError>
        </>
      )}
    </RACSearchField>
  )
}

export { SearchField, type SearchFieldProps }
