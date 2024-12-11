"use client"

import {
  Radio as RACRadio,
  RadioGroup as RACRadioGroup,
  type RadioGroupProps as RACRadioGroupProps,
  type RadioProps as RACRadioProps,
} from "react-aria-components"

import { cxRenderProps, focusStyle } from "@lib/style"

import { Theme, useThemeProps } from "@lib/theme"
import { tv } from "tailwind-variants"
import {
  Description,
  FieldError,
  FieldProps,
  Label,
  fieldLayoutStyle,
} from "./Field"

interface RadioGroupProps
  extends Omit<RACRadioGroupProps, "children">,
    FieldProps {
  children?: React.ReactNode
}

function RadioGroup({
  label,
  description,
  className,
  errorMessage,
  children,
  ...props
}: RadioGroupProps) {
  let themeProps = useThemeProps({ ...props, fieldVariant: props.variant })
  let { labelPosition } = themeProps

  return (
    <RACRadioGroup
      {...props}
      className={cxRenderProps(className, fieldLayoutStyle({ labelPosition }))}
    >
      <Theme {...themeProps}>
        {label && <Label>{label}</Label>}
        <div className="flex group-data-[orientation=vertical]:flex-col group-data-[orientation=horizontal]:gap-3">
          {children}
        </div>
        {description && <Description>{description}</Description>}
        <FieldError>{errorMessage}</FieldError>
      </Theme>
    </RACRadioGroup>
  )
}

const style = tv({
  slots: {
    radio: [
      "text-neutral-text group flex outline-none",
      // disabled
      "data-disabled:cursor-not-allowed data-disabled:text-neutral-placeholder group-data-disabled:text-neutral-placeholder",
    ],
    inner: [
      focusStyle(),
      "flex shrink-0 items-center justify-center rounded-full outline-offset-1 before:invisible before:rounded-full",
      // disabled
      "group-data-disabled:bg-neutral-bg-subtle! group-data-disabled:shadow-none! group-data-disabled:inset-ring-1! group-data-disabled:inset-ring-neutral-line! group-data-disabled:text-neutral-placeholder!",
    ],
  },
  variants: {
    size: {
      1: {
        radio: "min-h-6 gap-2 text-xs",
        inner: "size-4 before:size-1.5",
      },
      2: {
        radio: "min-h-7 gap-2 text-[13px]",
        inner: "size-[18px] before:size-2",
      },
      3: {
        radio: "min-h-8 gap-2.5 text-sm",
        inner: "size-5 before:size-2",
      },
    },
    variant: {
      classic: {
        inner: [
          "bg-neutral-bg-subtle shadow-[var(--shadow-inner)] before:bg-white",
          // pressed
          "group-data-pressed:bg-neutral-bg-active",
          // selected
          "group-data-selected:bg-accent-solid group-data-selected:before:visible",
        ],
      },
      soft: {
        inner: [
          "bg-neutral-bg-hover inset-ring-0 before:bg-accent-text-contrast",
          // pressed
          "group-data-pressed:bg-neutral-bg-active",
          // selected
          "group-data-selected:bg-accent-bg-active group-data-selected:before:visible",
        ],
      },
      outline: {
        inner: [
          "inset-ring-1 inset-ring-neutral-border before:bg-accent-text-contrast bg-transparent",
          // pressed
          "group-data-pressed:bg-neutral-bg-active",
          // selected
          "group-data-selected:bg-transparent group-data-selected:inset-ring-neutral-border-hover group-data-selected:before:visible",
        ],
      },
    },
  },
})

interface RadioProps extends RACRadioProps {
  description?: string
}

function Radio({ className, children, description, ...props }: RadioProps) {
  let themeProps = useThemeProps()
  let { size, fieldVariant: variant } = themeProps
  let { inner, radio } = style({ size, variant })

  return (
    <RACRadio {...props} className={cxRenderProps(className, radio())}>
      <div className={inner()} />
      <div className="flex flex-col gap-1">
        {children as React.ReactNode}
        {/* TODO: fix the description layout */}
        {description && <Description>{description}</Description>}
      </div>
    </RACRadio>
  )
}

export { Radio, RadioGroup }
export type { RadioGroupProps, RACRadioProps as RadioProps }
