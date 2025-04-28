"use client"

import { cxRenderProps } from "@lib/style"
import { useThemeProps } from "@lib/theme"
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
import { tv, VariantProps } from "tailwind-variants"

interface FieldProps
  extends VariantProps<typeof fieldLayoutStyle>,
    VariantProps<typeof inputBaseStyle> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  placeholder?: string
}

const fieldLayoutStyle = tv({
  base: ["group flex flex-col gap-1"],
  variants: {
    labelPosition: {
      top: "",
      side: "has-[label]:grid has-[label]:grid-cols-[1fr_2fr]",
    },
  },
  defaultVariants: { labelPosition: "top" },
})

const inputBaseStyle = tv({
  base: [
    "field-sizing-content border-none",
    // hovered
    "",
    // disabled
    "data-disabled:cursor-not-allowed data-disabled:inset-ring data-disabled:inset-ring-neutral-line data-disabled:bg-neutral-bg-subtle data-disabled:text-neutral-text-subtle data-disabled:shadow-none",
    // invalid
    "data-invalid:inset-ring data-invalid:inset-ring-danger-border data-invalid:bg-danger-bg-subtle",
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
      4: "h-10 rounded-lg indent-3 text-base",
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
      className={cxRenderProps(
        className,
        inputBaseStyle({ variant: theme.fieldVariant, size: theme.size }),
      )}
    />
  )
}

const labelStyle = tv({
  base: [
    "text-neutral-text font-book max-w-fit self-start truncate",
    "data-disabled:text-neutral-text-subtle group-data-disabled:text-neutral-text-subtle peer-data-disabled:text-neutral-text-subtle",
  ],
  variants: {
    size: {
      1: "text-xs",
      2: "text-sm",
      3: "text-base",
      4: "text-base",
    },
    labelPosition: {
      top: "",
      side: "col-start-1 flex items-center self-start",
    },
  },
  compoundVariants: [
    { size: 1, labelPosition: "side", className: "min-h-6" },
    { size: 2, labelPosition: "side", className: "min-h-7" },
    { size: 3, labelPosition: "side", className: "min-h-8" },
    { size: 4, labelPosition: "side", className: "min-h-10" },
  ],
  defaultVariants: { size: 1, labelPosition: "top" },
})

interface LabelProps extends RACLabelProps, VariantProps<typeof labelStyle> {
  isRequired?: boolean
}

function Label({
  size,
  labelPosition,
  children,
  isRequired,
  className,
  ...props
}: LabelProps) {
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
    >
      {children}
      {isRequired && <span> *</span>}
    </RACLabel>
  )
}

const descriptionStyle = tv({
  base: [
    "text-neutral-text col-start-2",
    "group-data-disabled:text-neutral-text-subtle peer-data-disabled:text-neutral-text-subtle",
  ],
  // TODO: size 2 doesn't look good in labelPosition side
  variants: {
    size: {
      1: "text-[11px]",
      2: "text-xs",
      3: "text-[13px]",
      4: "text-sm",
    },
  },
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

const fieldErrorStyle = tv({
  base: ["text-danger-text col-start-2"],
  variants: {
    size: {
      1: "text-[11px]",
      2: "text-xs",
      3: "text-[13px]",
      4: "text-sm",
    },
  },
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

const fieldGroupStyle = tv({
  extend: inputBaseStyle,
  base: ["group flex items-center"],
  variants: {
    size: {
      1: "h-6",
      2: "h-7",
      3: "h-8",
      4: "h-10",
    },
  },
  defaultVariants: {
    size: 1,
  },
})

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

const groupInputStyle = tv({
  base: [
    "field-sizing-content min-w-8 flex-1 appearance-none self-stretch border-none text-inherit outline-0",
    "placeholder:text-neutral-text-subtle autofill:bg-transparent [&::-webkit-search-cancel-button]:hidden",
    "data-disabled:cursor-not-allowed group-data-disabled:cursor-not-allowed",
  ],
  variants: {
    size: {
      1: "indent-1.5 text-xs",
      2: "indent-[7px] text-[13px]",
      3: "indent-2 text-sm",
      4: "indent-3 text-base",
    },
  },
  defaultVariants: { size: 1 },
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
  fieldLayoutStyle,
  GroupInput,
  Input,
  inputBaseStyle,
  Label,
  TextAreaInput,
  type FieldProps,
}
