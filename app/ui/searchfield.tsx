"use client"

import { compose, cva, cx, cxRenderProps } from "@lib/utils"
import { FunnelSimple, MagnifyingGlass, X } from "@phosphor-icons/react"
import {
  Button as RACButton,
  SearchField as RACSearchField,
  type SearchFieldProps as RACSearchFieldProps,
} from "react-aria-components"
import {
  Description,
  FieldContext,
  FieldError,
  FieldGroup,
  FieldProps,
  Input,
  Label,
  fieldLayoutStyle,
  inputBaseStyle,
  useFieldProps,
} from "./field"

interface SearchFieldProps extends RACSearchFieldProps, FieldProps {
  prefixIcon?: "search" | "filter" | null | React.ReactNode
}

const groupStyle = compose(
  inputBaseStyle,
  cva({
    base: ["group flex items-center"],
    variants: {
      size: {
        1: "h-6 px-0.5 gap-0.5",
        2: "h-7 px-1 gap-0.5",
        3: "h-8 px-1 gap-0.5",
      },
    },
    defaultVariants: {
      size: 1,
    },
  }),
)

interface PrefixIconProps {
  size: FieldProps["size"]
  icon: "search" | "filter" | React.ReactNode
  className?: string
}

function PrefixIcon({ size, className, icon }: PrefixIconProps) {
  return (
    <div
      aria-hidden
      className={cx(
        "flex items-center justify-center",
        size === 1 && "size-5",
        size === 2 && "size-5",
        size === 3 && "size-6",
        className,
      )}
    >
      {icon === "search" ?
        <MagnifyingGlass size={size === 1 ? 14 : 16} weight="regular" />
      : icon === "filter" ?
        <FunnelSimple size={size === 1 ? 14 : 16} weight="regular" />
      : icon}
    </div>
  )
}

function SearchField({
  label,
  description,
  errorMessage,
  placeholder = "Search",
  prefixIcon = "search",
  ...props
}: SearchFieldProps) {
  let { labelPosition, size, variant } = useFieldProps(props)

  return (
    <RACSearchField
      {...props}
      className={cxRenderProps(
        props.className,
        fieldLayoutStyle({ labelPosition }),
      )}
    >
      {({ isEmpty, isDisabled }) => (
        <FieldContext.Provider value={{ size, variant, labelPosition }}>
          {label && <Label>{label}</Label>}
          <FieldGroup
            className={(renderProps) =>
              cx(
                groupStyle({ size, variant, ...renderProps }),
                !prefixIcon && size === 1 && "pl-1.5",
                !prefixIcon && size === 2 && "pl-2",
              )
            }
          >
            {prefixIcon && (
              <PrefixIcon
                size={size ?? 1}
                icon={prefixIcon}
                className={
                  isEmpty ? "text-neutral-placeholder" : "text-accent-text"
                }
              />
            )}
            <Input
              placeholder={placeholder}
              className={cx(
                "min-w-0 flex-1 appearance-none self-stretch border-none text-inherit outline-0 placeholder:text-neutral-placeholder autofill:bg-transparent [&::-webkit-search-cancel-button]:hidden",
              )}
            />
            <RACButton
              className={cx(
                "flex items-center justify-center bg-transparent text-neutral-text data-hovered:bg-neutral-bg-hover data-pressed:bg-neutral-bg-active",
                isEmpty && "invisible",
                isDisabled && "text-neutral-placeholder",
                size === 1 && "size-5 rounded-sm",
                size === 2 && "size-5 rounded-sm",
                size === 3 && "size-6 rounded",
              )}
            >
              <X size={16} aria-hidden />
            </RACButton>
          </FieldGroup>
          {description && <Description>{description}</Description>}
          <FieldError>{errorMessage}</FieldError>
        </FieldContext.Provider>
      )}
    </RACSearchField>
  )
}

export { SearchField, type SearchFieldProps }
