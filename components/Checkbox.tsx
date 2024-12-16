"use client"

import { cxRenderProps, focusStyle } from "@lib/style"
import { Theme, useThemeProps } from "@lib/theme"
import { Check, Minus } from "@phosphor-icons/react"
import {
  composeRenderProps,
  Checkbox as RACCheckbox,
  CheckboxGroup as RACCheckboxGroup,
  type CheckboxGroupProps as RACCheckboxGroupProps,
  type CheckboxProps as RACCheckboxProps,
} from "react-aria-components"
import { tv, VariantProps } from "tailwind-variants"
import {
  Description,
  FieldError,
  fieldLayoutStyle,
  FieldProps,
  Label,
} from "./Field"

interface CheckboxGroupProps extends RACCheckboxGroupProps, FieldProps {}

function CheckboxGroup({
  className,
  label,
  description,
  errorMessage,
  ...props
}: CheckboxGroupProps) {
  let themeProps = useThemeProps({ ...props, fieldVariant: props.variant })
  let { labelPosition } = themeProps

  return (
    <RACCheckboxGroup
      {...props}
      className={cxRenderProps(className, fieldLayoutStyle({ labelPosition }))}
    >
      {composeRenderProps(props.children, (children, {}) => (
        <Theme {...themeProps}>
          {label && <Label>{label}</Label>}
          <div className="flex flex-col">{children}</div>
          {description && <Description>{description}</Description>}
          <FieldError>{errorMessage}</FieldError>
        </Theme>
      ))}
    </RACCheckboxGroup>
  )
}

const checkboxStyle = tv({
  slots: {
    container: ["text-neutral-text group flex outline-none"],
    checkbox: [
      focusStyle(),
      "flex shrink-0 items-center justify-center outline-offset-1",
    ],
  },
  variants: {
    isDisabled: {
      true: {
        container: "text-neutral-placeholder cursor-not-allowed",
        checkbox:
          "bg-neutral-bg-subtle! shadow-none! inset-ring-1! inset-ring-neutral-line! text-neutral-placeholder!",
      },
    },
    size: {
      1: {
        container: "gap-2 py-1 text-xs",
        checkbox: "size-4 rounded-[3px] p-px",
      },
      2: {
        container: "gap-2 py-[5px] text-[13px]",
        checkbox: "size-[18px] rounded-[3px]",
      },
      3: {
        container: "gap-2 py-1.5 text-sm",
        checkbox: "size-5 rounded",
      },
      4: {
        container: "gap-2.5 py-2 text-base",
        checkbox: "size-6 rounded-md",
      },
    },
    variant: {
      classic: {
        checkbox: [
          "bg-neutral-bg-subtle text-white shadow-[var(--shadow-inner)]",
          // pressed
          "group-data-pressed:bg-neutral-bg-active",
          // selected
          "group-data-selected:bg-accent-solid",
          // indeterminate
          "group-data-indeterminate:bg-accent-solid",
        ],
      },
      soft: {
        checkbox: [
          "bg-neutral-bg-hover inset-ring-0 text-accent-text-contrast",
          // pressed
          "group-data-pressed:bg-neutral-bg-active",
          // selected
          "group-data-selected:bg-accent-bg-active",
          // indeterminate
          "group-data-indeterminate:bg-accent-bg-active",
        ],
      },
      outline: {
        checkbox: [
          "inset-ring-1 inset-ring-neutral-border text-accent-text-contrast bg-transparent",
          // pressed
          "group-data-pressed:bg-neutral-bg-active",
          // selected
          "group-data-selected:bg-transparent group-data-selected:inset-ring-neutral-border-hover",
          // indeterminate
          "group-data-indeterminate:bg-transparent group-data-indeterminate:inset-ring-neutral-border-hover",
        ],
      },
    },
  },
})

interface CheckboxProps
  extends RACCheckboxProps,
    VariantProps<typeof checkboxStyle> {
  description?: string
}

function Checkbox({
  size: _size,
  variant: _variant,
  className,
  description,
  ...props
}: CheckboxProps) {
  let themeProps = useThemeProps({
    ...props,
    fieldVariant: _variant,
    size: _size,
  })
  let { size, fieldVariant } = themeProps
  let { container, checkbox } = checkboxStyle({ size, variant: fieldVariant })

  return (
    <RACCheckbox
      {...props}
      className={cxRenderProps(className, container({ isDisabled: true }))}
    >
      {composeRenderProps(
        props.children,
        (children, { isDisabled, isSelected, isIndeterminate }) => (
          <>
            <div className={checkbox({ isDisabled })}>
              {isIndeterminate ?
                <Minus size={16} />
              : isSelected ?
                <Check size={16} weight="bold" />
              : null}
            </div>
            <div className="flex flex-col gap-1">
              {children}
              {description && <Description>{description}</Description>}
            </div>
          </>
        ),
      )}
    </RACCheckbox>
  )
}

export { Checkbox, CheckboxGroup }
export type { CheckboxGroupProps, CheckboxProps }
