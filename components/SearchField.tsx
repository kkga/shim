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
    iconContainer: "pointer-events-none flex items-center justify-center",
    icon: "",
    clearButtonContainer: "flex items-center justify-center",
    clearButton:
      "text-neutral-text data-hovered:bg-neutral-bg-hover data-pressed:bg-neutral-bg-active flex items-center justify-center bg-transparent",
  },
  variants: {
    size: {
      1: {
        iconContainer: "size-6",
        icon: "size-4",
        clearButtonContainer: "size-6",
        clearButton: "rounded-xs size-5",
      },
      2: {
        iconContainer: "size-7",
        icon: "size-4",
        clearButtonContainer: "size-7",
        clearButton: "rounded-xs size-5",
      },
      3: {
        iconContainer: "size-8",
        icon: "size-4",
        clearButtonContainer: "size-8",
        clearButton: "rounded-xs size-6",
      },
      4: {
        iconContainer: "size-10",
        icon: "size-5",
        clearButtonContainer: "size-10",
        clearButton: "size-7 rounded-[3px]",
      },
    },
    isEmpty: {
      true: {
        iconContainer: "text-neutral-placeholder",
        clearButtonContainer: "hidden",
      },
      false: { iconContainer: "text-neutral-text" },
    },
    isDisabled: {
      true: {
        clearButton: "text-neutral-placeholder",
      },
    },
  },
})

interface SearchFieldProps extends RACSearchFieldProps, FieldProps {
  prefixIcon?: "search" | "filter" | React.ReactNode | null
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
  let { clearButtonContainer, clearButton, iconContainer, icon } = style({
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
              <div aria-hidden className={iconContainer({ isEmpty })}>
                {prefixIcon === "search" ?
                  <MagnifyingGlass className={icon()} />
                : prefixIcon === "filter" ?
                  <FunnelSimple className={icon()} />
                : prefixIcon}
              </div>
            )}
            <GroupInput
              placeholder={placeholder}
              className={prefixIcon ? "indent-0" : undefined}
            />
            <div className={clearButtonContainer({ isEmpty })}>
              <RACButton className={clearButton({ isDisabled })}>
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
