"use client"

import { cx, cxRenderProps } from "@lib/style"
import { Theme, useThemeProps } from "@lib/theme"
import { FunnelSimple, MagnifyingGlass, X } from "@phosphor-icons/react"
import {
  Button as RACButton,
  SearchField as RACSearchField,
  type SearchFieldProps as RACSearchFieldProps,
} from "react-aria-components"
import {
  Description,
  FieldError,
  FieldGroup,
  FieldProps,
  GroupInput,
  Label,
  fieldLayoutStyle,
} from "./field"

interface SearchFieldProps extends RACSearchFieldProps, FieldProps {
  prefixIcon?: "search" | "filter" | null | React.ReactNode
}

function SearchField({
  label,
  description,
  errorMessage,
  placeholder = "Search",
  prefixIcon = "search",
  ...props
}: SearchFieldProps) {
  let themeProps = useThemeProps({ ...props, fieldVariant: props.variant })
  let { labelPosition, size } = themeProps

  return (
    <RACSearchField
      {...props}
      className={cxRenderProps(
        props.className,
        fieldLayoutStyle({ labelPosition }),
      )}
    >
      {({ isEmpty, isDisabled }) => (
        <Theme {...themeProps}>
          {label && <Label>{label}</Label>}
          <FieldGroup>
            {prefixIcon && (
              <PrefixIcon
                size={size}
                icon={prefixIcon}
                className={
                  isEmpty ? "text-neutral-placeholder" : "text-accent-text"
                }
              />
            )}
            <GroupInput
              placeholder={placeholder}
              className={prefixIcon ? "indent-0" : undefined}
            />
            <div
              className={cx(
                "flex items-center justify-center",
                size === 1 && "size-6",
                size === 2 && "size-7",
                size === 3 && "size-8",
                isEmpty && "hidden",
              )}
            >
              <RACButton
                className={cx(
                  "flex items-center justify-center bg-transparent text-neutral-text data-hovered:bg-neutral-bg-hover data-pressed:bg-neutral-bg-active",
                  isDisabled && "text-neutral-placeholder",
                  size === 1 && "size-5 rounded-sm",
                  size === 2 && "size-5 rounded-sm",
                  size === 3 && "size-6 rounded-[3px]",
                )}
              >
                <X size={16} aria-hidden />
              </RACButton>
            </div>
          </FieldGroup>
          {description && <Description>{description}</Description>}
          <FieldError>{errorMessage}</FieldError>
        </Theme>
      )}
    </RACSearchField>
  )
}

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
        size === 1 && "size-6",
        size === 2 && "size-7",
        size === 3 && "size-8",
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

export { SearchField, type SearchFieldProps }
