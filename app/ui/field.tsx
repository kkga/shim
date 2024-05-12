"use client"
import { cva, cx, cxRenderProps } from "@lib/utils"
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
  type FieldErrorProps,
  type GroupProps,
  type InputProps,
  type LabelProps as RACLabelProps,
  type TextAreaProps as TextAreaInputProps,
  type TextProps,
} from "react-aria-components"

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
  defaultVariants: {
    labelPosition: "top",
  },
})

const inputBaseStyle = cva({
  base: [
    "rounded-md text-xs border-none",
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
      1: "h-6 indent-1.5 text-xs",
      2: "h-8 indent-2 text-[13px]",
    },
  },
  defaultVariants: {
    variant: "classic",
    size: 1,
  },
})

interface FieldProps
  extends VariantProps<typeof fieldLayoutStyle>,
    VariantProps<typeof inputBaseStyle> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  placeholder?: string
}

const labelStyle = cva({
  base: [
    "font-[450] text-neutral-text self-start truncate max-w-fit",
    // peer/group disabled
    "group-data-disabled:text-neutral-placeholder peer-data-disabled:text-neutral-placeholder",
  ],
  variants: {
    size: {
      1: "text-xs",
      2: "text-[13px]",
    },
    labelPosition: {
      top: "col-start-1",
      side: "col-start-1",
    },
  },
  compoundVariants: [
    {
      size: 1,
      labelPosition: "side",
      className: "min-h-6 flex items-center self-start",
    },
    {
      size: 2,
      labelPosition: "side",
      className: "min-h-8 flex items-center self-start",
    },
  ],
  defaultVariants: {
    size: 1,
    labelPosition: "top",
  },
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

function Description({ className, ...props }: TextProps) {
  let { size } = useFieldProps({})

  return (
    <RACText
      {...props}
      slot="description"
      className={cx(
        "col-start-2 text-neutral-text",
        size === 1 ? "text-[11px]" : "text-xs",
        // peer/group disabled
        "group-data-disabled:text-neutral-placeholder peer-data-disabled:text-neutral-placeholder",
        className,
      )}
    />
  )
}

function FieldError({ className, ...props }: FieldErrorProps) {
  let { size } = useFieldProps({})

  return (
    <RACFieldError
      className={cxRenderProps(
        className,
        "col-start-2 text-xs text-error-text",
        size === 1 ? "text-[11px]" : "text-xs",
      )}
      {...props}
    />
  )
}

function FieldGroup(props: GroupProps) {
  return <RACGroup {...props} className={cxRenderProps(props.className)} />
}

function Input(props: InputProps) {
  return <RACInput {...props} className={cxRenderProps(props.className)} />
}

function TextAreaInput(props: TextAreaInputProps) {
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
