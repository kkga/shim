"use client"

import {
  Radio as RACRadio,
  RadioGroup as RACRadioGroup,
  type RadioGroupProps as RACRadioGroupProps,
  type RadioProps as RACRadioProps,
} from "react-aria-components"

import { compose, cva, cxRenderProps, focusStyle } from "@lib/style"

import { Theme, useThemeProps } from "@lib/theme"
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

const styles = {
  radio: cva({
    base: [
      "group flex items-center text-neutral-text outline-none",
      "data-disabled:text-neutral-placeholder group-data-disabled:text-neutral-placeholder",
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
  }),

  inner: compose(
    focusStyle,
    cva({
      base: [
        "outline-offset-1 flex items-center justify-center shrink-0 rounded-full before:rounded-full before:invisible",
        // disabled
        "group-data-disabled:bg-neutral-bg-subtle! group-data-disabled:shadow-none! group-data-disabled:inset-ring-1! group-data-disabled:inset-ring-neutral-line! group-data-disabled:text-neutral-placeholder!",
      ],
      variants: {
        variant: {
          classic: [
            "bg-neutral-bg-subtle shadow-[var(--shadow-inner)] before:bg-white",
            // pressed
            "group-data-pressed:bg-neutral-bg-active",
            // selected
            "group-data-selected:bg-accent-solid group-data-selected:before:visible",
          ],
          soft: [
            "bg-neutral-bg-hover inset-ring-0 before:bg-accent-text-contrast",
            // pressed
            "group-data-pressed:bg-neutral-bg-active",
            // selected
            "group-data-selected:bg-accent-bg-active group-data-selected:before:visible",
          ],
          outline: [
            "bg-transparent inset-ring-1 inset-ring-neutral-border before:bg-accent-text-contrast",
            // pressed
            "group-data-pressed:bg-neutral-bg-active",
            // selected
            "group-data-selected:bg-transparent group-data-selected:inset-ring-neutral-border-hover group-data-selected:before:visible",
          ],
        },
        size: {
          1: "size-4 before:size-1.5",
          2: "size-[18px] before:size-2",
          3: "size-5 before:size-2",
        },
      },
      defaultVariants: {
        size: 1,
        variant: "classic",
      },
    }),
  ),
}

interface RadioProps extends RACRadioProps {}

function Radio({ className, children, ...props }: RACRadioProps) {
  let themeProps = useThemeProps({})
  let { size, fieldVariant: variant } = themeProps

  return (
    <RACRadio
      {...props}
      className={cxRenderProps(className, styles.radio({ size }))}
    >
      <>
        <div className={styles.inner({ size, variant })} />
        {children}
      </>
    </RACRadio>
  )
}

export { Radio, RadioGroup, type RadioGroupProps, type RadioProps }
