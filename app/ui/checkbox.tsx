"use client"

import type { VariantProps } from "cva"
import type { ReactNode } from "react"

import { Check, Minus } from "@phosphor-icons/react"
import {
  Checkbox as RACCheckbox,
  CheckboxGroup as RACCheckboxGroup,
  type CheckboxGroupProps as RACCheckboxGroupProps,
  type CheckboxProps as RACCheckboxProps,
} from "react-aria-components"

import { compose, cva, cx, cxRenderProps, focusStyle } from "@lib/utils"

import {
  Description,
  FieldContext,
  FieldError,
  FieldProps,
  Label,
  fieldLayoutStyle,
  useFieldProps,
} from "./field"

interface CheckboxGroupProps
  extends Omit<RACCheckboxGroupProps, "children">,
    FieldProps {
  children?: ReactNode
}

function CheckboxGroup(props: CheckboxGroupProps) {
  let { labelPosition, variant, size } = useFieldProps(props)

  return (
    <RACCheckboxGroup
      {...props}
      className={cxRenderProps(
        props.className,
        fieldLayoutStyle({ labelPosition }),
      )}
    >
      <FieldContext.Provider value={{ variant, labelPosition, size }}>
        <Label>{props.label}</Label>
        <div className="flex flex-col">{props.children}</div>
        {props.description && <Description>{props.description}</Description>}
        <FieldError>{props.errorMessage}</FieldError>
      </FieldContext.Provider>
    </RACCheckboxGroup>
  )
}

const checkboxStyles = cva({
  base: ["group flex items-center text-neutral-text outline-none"],
  variants: {
    size: {
      1: "text-xs gap-1.5 h-6",
      2: "text-[13px] gap-2 h-8",
    },
    isDisabled: {
      true: "text-neutral-placeholder",
    },
  },
  defaultVariants: {
    size: 1,
  },
})

const boxStyles = compose(
  focusStyle,
  cva({
    base: [
      "outline-offset-1 flex items-center shrink-0 rounded",
      // invalid
      // "group-data-invalid:border-error-border group-data-invalid:bg-error-bg",
    ],
    variants: {
      variant: {
        classic: [
          "bg-neutral-bg-subtle shadow-inner inset-ring-1 inset-ring-neutral-border text-white",
          // pressed
          "group-data-pressed:bg-neutral-bg-active",
          // selected
          "group-data-selected:bg-accent-solid",
          // disabled
          "group-data-disabled:bg-neutral-bg-subtle group-data-disabled:inset-ring-neutral-line group-data-disabled:shadow-none",
        ],
        soft: [
          "bg-neutral-bg-hover inset-ring-0",
          // pressed
          "group-data-pressed:bg-neutral-bg-active",
          // selected
          "group-data-selected:bg-accent-bg-active before:bg-accent-solid-hover",
          // disabled
          "group-data-disabled:bg-neutral-bg-subtle group-data-disabled:inset-ring-neutral-line",
        ],
        outline: [
          "bg-transparent inset-ring-1 inset-ring-neutral-border text-accent-text",
          // pressed
          "group-data-pressed:bg-neutral-bg-active",
          // selected
          "group-data-selected:bg-transparent inset-ring-neutral-border-hover",
          // disabled
          "group-data-disabled:bg-neutral-bg-subtle group-data-disabled:inset-ring-neutral-line",
        ],
      },
      size: {
        1: "size-4 p-px",
        2: "size-5 p-0.5",
      },
    },
    defaultVariants: {
      size: 1,
      variant: "classic",
    },
  }),
)

interface CheckboxProps
  extends RACCheckboxProps,
    VariantProps<typeof checkboxStyles>,
    VariantProps<typeof boxStyles> {
  children?: React.ReactNode
}

function Checkbox({ className, children, ...props }: CheckboxProps) {
  let { size, variant } = useFieldProps(props)

  return (
    <RACCheckbox
      {...props}
      className={cxRenderProps(className, checkboxStyles({ size, ...props }))}
    >
      {({ isSelected, isIndeterminate }) => (
        <>
          <div
            className={cx(
              boxStyles({
                size,
                variant,
              }),
            )}
          >
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
