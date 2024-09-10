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
import { Children } from "react"

const styles = {
  container: cva({
    base: [
      "group grid grid-flow-col auto-cols-fr text-neutral-text outline-none gap-px",
      "data-disabled:cursor-not-allowed data-disabled:text-neutral-placeholder group-data-disabled:text-neutral-placeholder",
    ],
    variants: {
      variant: {
        classic: ["bg-neutral-bg"],
      },
      size: {
        1: "rounded text-xs h-6",
        2: "rounded text-[13px] h-7",
        3: "rounded-md text-sm h-8",
      },
    },
    defaultVariants: {
      variant: "classic",
      size: 1,
    },
  }),

  item: compose(
    focusStyle,
    cva({
      base: [
        "peer relative flex-1 flex items-center justify-center shrink-0 rounded-full",
        // disabled
        "group-data-disabled:bg-neutral-bg-subtle! group-data-disabled:shadow-none! group-data-disabled:inset-ring-1! group-data-disabled:inset-ring-neutral-line! group-data-disabled:text-neutral-placeholder!",
      ],
      variants: {
        variant: {
          classic: [
            "",
            // hovered
            "data-hovered:bg-neutral-bg-hover",
            // pressed
            "data-pressed:bg-neutral-bg-active",
            // selected
            "data-selected:bg-neutral-bg-active data-selected:text-neutral-text-contrast",
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
          1: "rounded h-6 px-1.5 gap-1.5",
          2: "rounded h-7 px-2 gap-2",
          3: "rounded-md h-8 px-2.5 gap-2",
        },
      },
      defaultVariants: {
        variant: "classic",
        size: 1,
      },
    }),
  ),
}

interface SegmentedControlProps
  extends Omit<RACRadioGroupProps, "children" | "orientation">,
    FieldProps {
  children: React.ReactNode
}

function SegmentedControl({
  label,
  description,
  className,
  errorMessage,
  children,
  ...props
}: SegmentedControlProps) {
  let themeProps = useThemeProps({ ...props, fieldVariant: props.variant })
  let { labelPosition, size } = themeProps

  return (
    <RACRadioGroup
      {...props}
      className={cxRenderProps(className, fieldLayoutStyle({ labelPosition }))}
    >
      <Theme {...themeProps}>
        {label && <Label>{label}</Label>}
        <div className={styles.container({ size })}>{children}</div>
        {description && <Description>{description}</Description>}
        <FieldError>{errorMessage}</FieldError>
      </Theme>
    </RACRadioGroup>
  )
}

interface SegmentedControlItemProps extends RACRadioProps {}

function SegmentedControlItem({
  className,
  children,
  ...props
}: SegmentedControlItemProps) {
  let themeProps = useThemeProps()
  let { size, fieldVariant: variant } = themeProps

  return (
    <RACRadio
      {...props}
      className={cxRenderProps(className, styles.item({ size, variant }))}
    >
      {children}
    </RACRadio>
  )
}

export { SegmentedControl, SegmentedControlItem }
export type { SegmentedControlProps, SegmentedControlItemProps }
