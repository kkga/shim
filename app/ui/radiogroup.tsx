"use client"

import {
  Radio as RACRadio,
  RadioGroup as RACRadioGroup,
  type RadioGroupProps as RACRadioGroupProps,
  type RadioProps as RACRadioProps,
} from "react-aria-components"

import { compose, cva, cxRenderProps, focusStyle } from "@lib/utils"

import {
  Description,
  FieldContext,
  FieldError,
  FieldProps,
  Label,
  fieldLayoutStyle,
  useFieldProps,
} from "./field"

interface RadioGroupProps
  extends Omit<RACRadioGroupProps, "children">,
    FieldProps {
  children?: React.ReactNode
}

function RadioGroup({
  label,
  description,
  errorMessage,
  children,
  ...props
}: RadioGroupProps) {
  let { labelPosition, variant, size } = useFieldProps(props)

  return (
    <RACRadioGroup
      {...props}
      className={cxRenderProps(
        props.className,
        fieldLayoutStyle({ labelPosition }),
      )}
    >
      <FieldContext.Provider value={{ variant, labelPosition, size }}>
        {label && <Label>{label}</Label>}
        <div className="flex group-data-[orientation=vertical]:flex-col group-data-[orientation=horizontal]:gap-3">
          {children}
        </div>
        {description && <Description>{description}</Description>}
        <FieldError>{errorMessage}</FieldError>
      </FieldContext.Provider>
    </RACRadioGroup>
  )
}

const radioStyle = compose(
  focusStyle,
  cva({
    base: [
      "outline-offset-1 flex items-center shrink-0 rounded-full",
      "relative before:rounded-full before:absolute before:inset-0 before:m-auto before:invisible",
      // selected
      "group-data-selected:before:visible",
      // invalid
      // "group-data-invalid:border-error-border group-data-invalid:bg-error-bg",
    ],
    variants: {
      variant: {
        classic: [
          "bg-neutral-bg-subtle shadow-inner inset-ring-1 inset-ring-neutral-border",
          // pressed
          "group-data-pressed:bg-neutral-bg-active",
          // selected
          "group-data-selected:bg-accent-solid before:bg-white before:shadow",
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
          "bg-transparent inset-ring-1 inset-ring-neutral-border",
          // pressed
          "group-data-pressed:bg-neutral-bg-active",
          // selected
          "group-data-selected:bg-transparent inset-ring-neutral-border-hover before:bg-accent-text",
          // disabled
          "group-data-disabled:bg-neutral-bg-subtle group-data-disabled:inset-ring-neutral-line",
        ],
      },
      size: {
        1: "size-4 before:size-2",
        2: "size-5 before:size-2.5",
      },
    },
    defaultVariants: {
      size: 1,
      variant: "classic",
    },
  }),
)

interface RadioProps extends RACRadioProps {}

function Radio(props: RadioProps) {
  let { size, variant } = useFieldProps({})
  return (
    <RACRadio
      {...props}
      className={cxRenderProps(
        props.className,
        "group flex items-center gap-x-1.5 text-neutral-text group-data-disabled:text-neutral-placeholder data-disabled:text-neutral-placeholder",
        size === 1 ? "h-6 text-xs" : "h-8 text-[13px]",
      )}
    >
      <>
        <div className={radioStyle({ size, variant })} />
        {props.children}
      </>
    </RACRadio>
  )
}

export { Radio, RadioGroup, type RadioGroupProps, type RadioProps }
