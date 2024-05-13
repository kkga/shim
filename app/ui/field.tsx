"use client"
import { cva, cxRenderProps } from "@lib/utils"
import { VariantProps } from "cva"
import { createContext, useContext } from "react"

import {
  FieldError as RACFieldError,
  Group as RACGroup,
  Input as RACInput,
  Label as RACLabel,
  Text as RACText,
  TextArea as RACTextArea,
  ValidationResult,
  type FieldErrorProps as RACFieldErrorProps,
  type GroupProps as RACGroupProps,
  type InputProps as RACInputProps,
  type LabelProps as RACLabelProps,
  type TextAreaProps as RACTextAreaProps,
  type TextProps as RACTextProps,
} from "react-aria-components"

interface FieldProps
  extends VariantProps<typeof fieldLayoutStyle>,
    VariantProps<typeof inputBaseStyle> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  placeholder?: string
}

interface FieldContextProps
  extends Pick<FieldProps, "size" | "variant" | "labelPosition"> {}

const FieldContext = createContext<FieldContextProps | null>(null)

function useFieldProps(props: FieldProps): FieldProps {
  let contextValues = useContext(FieldContext)

  return {
    labelPosition: props.labelPosition ?? contextValues?.labelPosition ?? "top",
    size: props.size ?? contextValues?.size ?? 1,
    variant: props.variant ?? contextValues?.variant ?? "classic",
  }
}

const fieldLayoutStyle = cva({
  base: ["group"],
  variants: {
    labelPosition: {
      top: "flex flex-col gap-1",
      side: "grid gap-1 grid-cols-[1fr_3fr]",
    },
  },
  defaultVariants: { labelPosition: "top" },
})

const inputBaseStyle = cva({
  base: [
    "border-none",
    // hovered
    "",
    // disabled
    "data-disabled:inset-ring-neutral-line data-disabled:bg-neutral-bg-subtle data-disabled:text-neutral-placeholder data-disabled:shadow-none",
    // invalid
    "data-invalid:inset-ring-error-border data-invalid:bg-error-bg-subtle",
    // focused
    "data-focused:outline-2 data-focused:-outline-offset-1 data-focused:outline-accent-focus-ring",
    // focus-visible
    "data-focus-visible:outline-2 data-focus-visible:-outline-offset-1 data-focus-visible:outline-accent-focus-ring",
    // focus-within
    "data-focus-within:outline-2 data-focus-within:-outline-offset-1 data-focus-within:outline-accent-focus-ring",
  ],
  variants: {
    variant: {
      classic:
        "inset-ring-1 inset-ring-neutral-border shadow-inner bg-neutral-bg-subtle",
      soft: "bg-neutral-bg",
      outline: "inset-ring-1 inset-ring-neutral-border bg-transparent",
    },
    size: {
      1: "h-6 rounded indent-1.5 text-xs",
      2: "h-7 rounded indent-[7px] text-[13px]",
      3: "h-8 rounded-md indent-2 text-sm",
    },
  },
  defaultVariants: {
    variant: "classic",
    size: 1,
  },
})

const labelStyle = cva({
  base: [
    "font-[450] text-neutral-text self-start truncate max-w-fit",
    // peer/group disabled
    "group-data-disabled:text-neutral-placeholder peer-data-disabled:text-neutral-placeholder",
  ],
  variants: {
    size: { 1: "text-xs", 2: "text-[13px]", 3: "text-sm" },
    labelPosition: {
      top: "",
      side: "col-start-1 flex items-center self-start",
    },
  },
  compoundVariants: [
    { size: 1, labelPosition: "side", className: "min-h-6" },
    { size: 2, labelPosition: "side", className: "min-h-7" },
    { size: 3, labelPosition: "side", className: "min-h-8" },
  ],
  defaultVariants: { size: 1, labelPosition: "top" },
})

interface LabelProps extends RACLabelProps, VariantProps<typeof labelStyle> {}

function Label({ className, ...props }: LabelProps) {
  let { size, labelPosition } = useFieldProps(props)
  delete props.size
  delete props.labelPosition

  return (
    <RACLabel
      {...props}
      slot="label"
      className={labelStyle({
        size,
        labelPosition,
        className,
      })}
    />
  )
}

const descriptionStyle = cva({
  base: [
    "col-start-2 text-neutral-text",
    // peer/group disabled
    "group-data-disabled:text-neutral-placeholder peer-data-disabled:text-neutral-placeholder",
  ],
  variants: { size: { 1: "text-[11px]", 2: "text-xs", 3: "text-[13px]" } },
  defaultVariants: { size: 1 },
})

interface DescriptionProps
  extends RACTextProps,
    VariantProps<typeof descriptionStyle> {}

function Description({ className, ...props }: DescriptionProps) {
  let { size } = useFieldProps({})

  return (
    <RACText
      {...props}
      slot="description"
      className={descriptionStyle({ size })}
    />
  )
}

const fieldErrorStyle = cva({
  base: ["col-start-2 text-error-text"],
  variants: { size: { 1: "text-[11px]", 2: "text-xs", 3: "text-[13px]" } },
  defaultVariants: { size: 1 },
})

interface FieldErrorProps
  extends RACFieldErrorProps,
    VariantProps<typeof fieldErrorStyle> {}

function FieldError({ className, ...props }: FieldErrorProps) {
  let { size } = useFieldProps({})

  return (
    <RACFieldError
      className={cxRenderProps(className, fieldErrorStyle({ size }))}
      {...props}
    />
  )
}

function FieldGroup(props: RACGroupProps) {
  return <RACGroup {...props} className={cxRenderProps(props.className)} />
}

function Input(props: RACInputProps) {
  return <RACInput {...props} className={cxRenderProps(props.className)} />
}

function TextAreaInput(props: RACTextAreaProps) {
  return <RACTextArea {...props} className={cxRenderProps(props.className)} />
}

export {
  Description,
  FieldContext,
  FieldError,
  FieldGroup,
  Input,
  Label,
  TextAreaInput,
  fieldLayoutStyle,
  inputBaseStyle,
  useFieldProps,
  type FieldProps,
}
