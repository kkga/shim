"use client"
import { compose, cva, cx, cxRenderProps } from "@lib/utils"

import {
  FieldError as RACFieldError,
  Group as RACGroup,
  Input as RACInput,
  Label as RACLabel,
  Text as RACText,
  TextArea as RACTextArea,
  type FieldErrorProps,
  type GroupProps,
  type InputProps,
  type LabelProps,
  type TextAreaProps as TextAreaInputProps,
  type TextProps,
} from "react-aria-components"

function Label(props: LabelProps) {
  return (
    <RACLabel
      {...props}
      className={cx(
        "w-fit cursor-default text-sm font-medium text-neutral-text",
        // peer/group disabled
        "group-data-[disabled]:text-neutral-placeholder peer-data-[disabled]:text-neutral-placeholder",
        props.className,
      )}
    />
  )
}

function Description(props: TextProps) {
  return (
    <RACText
      slot="description"
      className={cx(
        "text-xs text-neutral-text",
        // peer/group disabled
        "group-data-[disabled]:text-neutral-placeholder peer-data-[disabled]:text-neutral-placeholder",
        props.className,
      )}
      {...props}
    />
  )
}

function FieldError(props: FieldErrorProps) {
  return (
    <RACFieldError
      className={cxRenderProps(props.className, "text-xs text-error-text")}
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

// TODO: use data-selectors for consistency with other components
const fieldStyle = cva({
  base: ["rounded-md text-sm"],
  variants: {
    variant: {
      classic: "border border-neutral-border shadow-inner bg-neutral-bg-subtle",
      soft: "border border-transparent bg-neutral-bg",
      ghost:
        "border border-transparent bg-transparent hover:bg-neutral-3 focus-within:bg-neutral-3",
    },
    isDisabled: {
      true: "border-neutral-line bg-neutral-bg-subtle text-neutral-placeholder shadow-none",
    },
    isInvalid: {
      true: "border-error-border bg-error-bg-subtle",
    },
    isFocused: {
      true: "outline-2 -outline-offset-1 outline-accent-focus-ring",
    },
    isFocusVisible: {
      true: "outline-2 -outline-offset-1 outline-accent-focus-ring",
    },
  },
  defaultVariants: {
    variant: "classic",
  },
})

const fieldGroupStyle = compose(
  fieldStyle,
  cva({
    base: ["group flex items-center overflow-hidden"],
    variants: {
      isFocusWithin: {
        true: "outline-2 -outline-offset-1 outline-accent-focus-ring",
      },
    },
  }),
)

export {
  Description,
  FieldError,
  FieldGroup,
  Input,
  Label,
  TextAreaInput,
  fieldGroupStyle,
  fieldStyle,
}
