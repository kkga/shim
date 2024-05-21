"use client"
import { compose, cva, cxRenderProps } from "@lib/style"
import { useThemeProps } from "@lib/theme"
import { VariantProps } from "cva"

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

const fieldLayoutStyle = cva({
  base: ["group"],
  variants: {
    labelPosition: {
      top: "flex flex-col gap-1",
      side: "grid gap-1 grid-cols-[1fr_2fr]",
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
      classic: "bg-neutral-bg-subtle shadow-[var(--shadow-inner)]",
      soft: "bg-neutral-bg",
      outline: "inset-ring inset-ring-neutral-border bg-transparent",
    },
    size: {
      1: "h-6 rounded indent-1.5 text-xs",
      2: "h-7 rounded indent-[7px] text-[13px]",
      3: "h-8 rounded-md indent-2 text-sm",
    },
  },
  defaultVariants: { variant: "classic", size: 1 },
})

interface InputProps
  extends Omit<RACInputProps, "size">,
    VariantProps<typeof inputBaseStyle> {}

function Input({ size, variant, className, ...props }: InputProps) {
  let theme = useThemeProps({ size, fieldVariant: variant })

  return (
    <RACInput
      {...props}
      className={
        (cxRenderProps(className),
        inputBaseStyle({ variant: theme.fieldVariant, size: theme.size }))
      }
    />
  )
}

const labelStyle = cva({
  base: [
    "font-book text-neutral-text self-start truncate max-w-fit",
    "data-disabled:text-neutral-placeholder group-data-disabled:text-neutral-placeholder peer-data-disabled:text-neutral-placeholder",
  ],
  variants: {
    size: { 1: "text-xs", 2: "text-[13px]", 3: "text-sm" },
    labelPosition: {
      top: null,
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

function Label({ size, labelPosition, className, ...props }: LabelProps) {
  let themeProps = useThemeProps({ size, labelPosition })

  return (
    <RACLabel
      {...props}
      slot="label"
      className={labelStyle({
        size: themeProps.size,
        labelPosition: themeProps.labelPosition,
        className,
      })}
    />
  )
}

const descriptionStyle = cva({
  base: [
    "col-start-2 text-neutral-text",
    "group-data-disabled:text-neutral-placeholder peer-data-disabled:text-neutral-placeholder",
  ],
  variants: { size: { 1: "text-[11px]", 2: "text-xs", 3: "text-[13px]" } },
  defaultVariants: { size: 1 },
})

interface DescriptionProps
  extends RACTextProps,
    VariantProps<typeof descriptionStyle> {}

function Description({ size, className, ...props }: DescriptionProps) {
  let themeProps = useThemeProps({ size })

  return (
    <RACText
      {...props}
      slot="description"
      className={descriptionStyle({ size: themeProps.size, className })}
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

function FieldError({ size, className, ...props }: FieldErrorProps) {
  let themeProps = useThemeProps({ size })

  return (
    <RACFieldError
      {...props}
      className={cxRenderProps(
        className,
        fieldErrorStyle({ size: themeProps.size }),
      )}
    />
  )
}

const fieldGroupStyle = compose(
  inputBaseStyle,
  cva({
    base: ["group flex items-center"],
    variants: {
      size: {
        1: "h-6",
        2: "h-7",
        3: "h-8",
      },
    },
    defaultVariants: {
      size: 1,
    },
  }),
)

interface FieldGroupProps
  extends RACGroupProps,
    VariantProps<typeof fieldGroupStyle> {}

function FieldGroup({ size, variant, className, ...props }: FieldGroupProps) {
  let themeProps = useThemeProps({ size, fieldVariant: variant })

  return (
    <RACGroup
      {...props}
      className={cxRenderProps(
        className,
        fieldGroupStyle({
          size: themeProps.size,
          variant: themeProps.fieldVariant,
        }),
      )}
    />
  )
}

const groupInputStyle = cva({
  base: [
    "min-w-0 flex-1 appearance-none self-stretch border-none text-inherit outline-0",
    "placeholder:text-neutral-placeholder autofill:bg-transparent [&::-webkit-search-cancel-button]:hidden",
  ],
  variants: {
    size: {
      1: "indent-1.5 text-xs",
      2: "indent-[7px] text-[13px]",
      3: "indent-2 text-sm",
    },
  },
})

function GroupInput({ className, ...props }: Omit<InputProps, "variant">) {
  let themeProps = useThemeProps({ ...props })
  let { size } = themeProps

  return (
    <RACInput
      {...props}
      className={cxRenderProps(className, groupInputStyle({ size }))}
    />
  )
}

function TextAreaInput(props: RACTextAreaProps) {
  return <RACTextArea {...props} className={cxRenderProps(props.className)} />
}

export {
  Description,
  FieldError,
  FieldGroup,
  GroupInput,
  Input,
  Label,
  TextAreaInput,
  fieldLayoutStyle,
  inputBaseStyle,
  type FieldProps,
}
