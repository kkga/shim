"use client"

import { cxRenderProps, focusStyle } from "@lib/style"
import { Theme, useThemeProps } from "@lib/theme"
import { Check, Minus } from "@phosphor-icons/react"
import {
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

interface CheckboxGroupProps
  extends Omit<RACCheckboxGroupProps, "children">,
    FieldProps {
  children?: React.ReactNode
}

function CheckboxGroup({
  children,
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
      <Theme {...themeProps}>
        <Label>{label}</Label>
        <div className="flex flex-col">{children}</div>
        {description && <Description>{description}</Description>}
        <FieldError>{errorMessage}</FieldError>
      </Theme>
    </RACCheckboxGroup>
  )
}

const containerStyle = tv({
  base: [
    "group flex items-center text-neutral-text outline-none",
    "data-disabled:cursor-not-allowed data-disabled:text-neutral-placeholder group-data-disabled:text-neutral-placeholder",
  ],
  variants: {
    size: {
      1: "text-xs gap-2 h-6",
      2: "text-[13px] gap-2 h-7",
      3: "text-sm gap-2.5 h-8",
    },
  },
  defaultVariants: {
    size: 1,
  },
})

const checkboxStyle = tv({
  extend: focusStyle,
  base: [
    "outline-offset-1 flex items-center justify-center shrink-0",
    // disabled
    "group-data-disabled:bg-neutral-bg-subtle! group-data-disabled:shadow-none! group-data-disabled:inset-ring-1! group-data-disabled:inset-ring-neutral-line! group-data-disabled:text-neutral-placeholder!",
  ],
  variants: {
    variant: {
      classic: [
        "bg-neutral-bg-subtle shadow-[var(--shadow-inner)] text-white",
        // pressed
        "group-data-pressed:bg-neutral-bg-active",
        // selected
        "group-data-selected:bg-accent-solid",
        // indeterminate
        "group-data-indeterminate:bg-accent-solid",
      ],
      soft: [
        "bg-neutral-bg-hover inset-ring-0 text-accent-text-contrast",
        // pressed
        "group-data-pressed:bg-neutral-bg-active",
        // selected
        "group-data-selected:bg-accent-bg-active",
        // indeterminate
        "group-data-indeterminate:bg-accent-bg-active",
      ],
      outline: [
        "bg-transparent inset-ring-1 inset-ring-neutral-border text-accent-text-contrast",
        // pressed
        "group-data-pressed:bg-neutral-bg-active",
        // selected
        "group-data-selected:bg-transparent  group-data-selected:inset-ring-neutral-border-hover",
        // indeterminate
        "group-data-indeterminate:bg-transparent group-data-indeterminate:inset-ring-neutral-border-hover",
      ],
    },
    size: {
      1: "rounded-sm size-4 p-px",
      2: "rounded-[3px] size-[18px]",
      3: "rounded size-5",
    },
  },
  defaultVariants: {
    size: 1,
    variant: "classic",
  },
})

interface CheckboxProps
  extends RACCheckboxProps,
    VariantProps<typeof containerStyle>,
    VariantProps<typeof checkboxStyle> {
  children?: React.ReactNode
}

function Checkbox({ children, className, ...props }: CheckboxProps) {
  let themeProps = useThemeProps({ ...props, fieldVariant: props.variant })
  let { size, fieldVariant: variant } = themeProps

  return (
    <RACCheckbox
      {...props}
      className={cxRenderProps(className, containerStyle({ size }))}
    >
      {({ isSelected, isIndeterminate }) => (
        <>
          <div className={checkboxStyle({ size, variant })}>
            {isIndeterminate ?
              <Minus size={16} />
            : isSelected ?
              <Check size={16} weight="bold" />
            : null}
          </div>
          {children}
        </>
      )}
    </RACCheckbox>
  )
}

export { Checkbox, CheckboxGroup, type CheckboxGroupProps, type CheckboxProps }
