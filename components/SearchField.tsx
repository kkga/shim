"use client"

import { cxRenderProps } from "@lib/style"
import { Theme, useThemeProps } from "@lib/theme"
import { FunnelSimple, MagnifyingGlass, X } from "@phosphor-icons/react"
import {
  Button as RACButton,
  SearchField as RACSearchField,
  type SearchFieldProps as RACSearchFieldProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import {
  Description,
  FieldError,
  FieldGroup,
  FieldProps,
  GroupInput,
  Label,
  fieldLayoutStyle,
} from "./Field"

const style = tv({
  slots: {
    prefixIconContainer: "pointer-events-none flex items-center justify-center",
    clearButtonContainer: "flex items-center justify-center",
    clearButton:
      "text-neutral-text data-hovered:bg-neutral-bg-hover data-pressed:bg-neutral-bg-active flex items-center justify-center bg-transparent",
  },
  variants: {
    size: {
      1: {
        prefixIconContainer: "size-6",
        clearButtonContainer: "size-6",
        clearButton: "size-5 rounded-sm",
      },
      2: {
        prefixIconContainer: "size-7",
        clearButtonContainer: "size-7",
        clearButton: "size-5 rounded-sm",
      },
      3: {
        prefixIconContainer: "size-8",
        clearButtonContainer: "size-8",
        clearButton: "size-6 rounded-[3px]",
      },
    },
  },
  defaultVariants: {
    size: 1,
  },
})

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
  let { clearButtonContainer, clearButton, prefixIconContainer } = style({
    size,
  })

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
              <div
                aria-hidden
                className={prefixIconContainer({
                  className:
                    isEmpty ? "text-neutral-placeholder" : "text-accent-text",
                })}
              >
                {prefixIcon === "search" ?
                  <MagnifyingGlass
                    size={size === 1 ? 14 : 16}
                    weight="regular"
                  />
                : prefixIcon === "filter" ?
                  <FunnelSimple size={size === 1 ? 14 : 16} weight="regular" />
                : prefixIcon}
              </div>
            )}
            <GroupInput
              placeholder={placeholder}
              className={prefixIcon ? "indent-0" : undefined}
            />
            <div
              className={clearButtonContainer({
                className: isEmpty ? "hidden" : undefined,
              })}
            >
              <RACButton
                className={clearButton({
                  className:
                    isDisabled ? "text-neutral-placeholder" : undefined,
                })}
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

export { SearchField, type SearchFieldProps }
