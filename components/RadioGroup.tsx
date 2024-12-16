"use client"

import { cxRenderProps, focusStyle } from "@lib/style"
import { Theme, useThemeProps } from "@lib/theme"
import {
  composeRenderProps,
  Radio as RACRadio,
  RadioGroup as RACRadioGroup,
  type RadioGroupProps as RACRadioGroupProps,
  type RadioProps as RACRadioProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import {
  Description,
  FieldError,
  fieldLayoutStyle,
  FieldProps,
  Label,
} from "./Field"

const style = tv({
  slots: {
    group: "flex",
    item: "text-neutral-text group flex outline-none",
    itemInput: [
      focusStyle(),
      "flex shrink-0 items-center justify-center rounded-full outline-offset-1 before:invisible before:rounded-full",
    ],
  },
  variants: {
    orientation: {
      horizontal: {
        group: "gap-3",
      },
      vertical: {
        group: "flex-col",
      },
    },
    size: {
      1: {
        item: "gap-2 py-1 text-xs",
        itemInput: "size-4 before:size-1.5",
      },
      2: {
        item: "gap-2 py-[5px] text-[13px]",
        itemInput: "size-[18px] before:size-2",
      },
      3: {
        item: "gap-2.5 py-1.5 text-sm",
        itemInput: "size-5 before:size-2",
      },
      4: {
        item: "gap-3 py-2 text-base",
        itemInput: "size-6 before:size-2.5",
      },
    },
    variant: {
      classic: {
        itemInput:
          "bg-neutral-bg-subtle shadow-[var(--shadow-inner)] before:bg-white",
      },
      soft: {
        itemInput:
          "bg-neutral-bg-hover inset-ring-0 before:bg-accent-text-contrast",
      },
      outline: {
        itemInput:
          "inset-ring-1 inset-ring-neutral-border before:bg-accent-text-contrast bg-transparent",
      },
    },
    isDisabled: {
      true: {
        item: "text-neutral-placeholder cursor-not-allowed",
        itemInput:
          "bg-neutral-bg-subtle inset-ring-1 inset-ring-neutral-line text-neutral-placeholder shadow-none",
      },
    },
    isSelected: { true: { itemInput: "before:visible" } },
    isPressed: { true: "" },
  },
  compoundVariants: [
    {
      isPressed: true,
      isDisabled: false,
      variant: ["classic", "soft", "outline"],
      class: { itemInput: "bg-neutral-bg-active" },
    },
    {
      isSelected: true,
      isDisabled: false,
      variant: "classic",
      class: { itemInput: "bg-accent-solid" },
    },
    {
      isSelected: true,
      isDisabled: false,
      variant: "soft",
      class: { itemInput: "bg-accent-bg-active" },
    },
    {
      isSelected: true,
      isDisabled: false,
      variant: "outline",
      class: { itemInput: "inset-ring-neutral-border-hover bg-transparent" },
    },
  ],
})

interface RadioGroupProps extends RACRadioGroupProps, FieldProps {}

function RadioGroup({
  label,
  description,
  className,
  errorMessage,
  labelPosition,
  ...props
}: RadioGroupProps) {
  let themeProps = useThemeProps({
    ...props,
    labelPosition,
    fieldVariant: props.variant,
  })
  let { group } = style()

  return (
    <RACRadioGroup
      {...props}
      className={cxRenderProps(
        className,
        fieldLayoutStyle({ labelPosition: themeProps.labelPosition }),
      )}
    >
      {composeRenderProps(props.children, (children, { orientation }) => (
        <Theme {...themeProps}>
          {label && <Label>{label}</Label>}
          <div className={group({ orientation })}>{children}</div>
          {description && <Description>{description}</Description>}
          <FieldError>{errorMessage}</FieldError>
        </Theme>
      ))}
    </RACRadioGroup>
  )
}

interface RadioProps extends RACRadioProps {
  description?: string
}

function Radio({ description, ...props }: RadioProps) {
  let { size, fieldVariant: variant } = useThemeProps()
  let { item, itemInput } = style({ size, variant })

  return (
    <RACRadio
      {...props}
      className={composeRenderProps(
        props.className,
        (className, { isDisabled, isPressed, isSelected }) =>
          item({ isDisabled, isPressed, isSelected, className }),
      )}
    >
      {composeRenderProps(
        props.children,
        (children, { isPressed, isSelected, isDisabled }) => (
          <>
            <div className={itemInput({ isPressed, isSelected, isDisabled })} />
            <div className="flex flex-col gap-1">
              {children}
              {description && <Description>{description}</Description>}
            </div>
          </>
        ),
      )}
    </RACRadio>
  )
}

export { Radio, RadioGroup }
export type { RadioGroupProps, RadioProps }
