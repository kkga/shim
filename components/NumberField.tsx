"use client"

import {
  composeRenderProps,
  Button as RACButton,
  NumberField as RACNumberField,
  type ButtonProps as RACButtonProps,
  type NumberFieldProps as RACNumberFieldProps,
} from "react-aria-components"

import { cx, cxRenderProps } from "@lib/style"
import { Theme, useThemeProps } from "@lib/theme"
import { CaretDown, CaretUp, Minus, Plus } from "@phosphor-icons/react"
import { tv, VariantProps } from "tailwind-variants"
import {
  Description,
  FieldError,
  FieldGroup,
  fieldLayoutStyle,
  FieldProps,
  GroupInput,
  Label,
} from "./Field"

interface NumberFieldProps extends RACNumberFieldProps, FieldProps {
  stepperLayout?: "inline" | "stacked"
}

function NumberField({
  label,
  description,
  errorMessage,
  placeholder,
  stepperLayout = "inline",
  ...props
}: NumberFieldProps) {
  let themeProps = useThemeProps({ ...props, fieldVariant: props.variant })
  let { size, labelPosition } = themeProps

  return (
    <RACNumberField
      {...props}
      className={cxRenderProps(
        props.className,
        fieldLayoutStyle({ labelPosition }),
      )}
    >
      <Theme {...themeProps}>
        {label && <Label>{label}</Label>}
        <FieldGroup>
          {({ isDisabled }) =>
            stepperLayout === "stacked" ?
              <>
                <GroupInput
                  className="tabular-nums"
                  placeholder={placeholder}
                />
                <div className={cx("flex flex-col self-stretch p-0.5")}>
                  <StepperButton isDisabled={isDisabled} slot="increment">
                    <CaretUp aria-hidden size={size > 3 ? 20 : 16} />
                  </StepperButton>
                  <StepperButton isDisabled={isDisabled} slot="decrement">
                    <CaretDown aria-hidden size={size > 3 ? 20 : 16} />
                  </StepperButton>
                </div>
              </>
            : <>
                <StepperButton
                  isInline
                  size={size}
                  isDisabled={isDisabled}
                  slot="decrement"
                >
                  <Minus aria-hidden size={size > 3 ? 20 : 16} />
                </StepperButton>
                <GroupInput
                  className="text-center indent-0 tabular-nums"
                  placeholder={placeholder}
                />
                <StepperButton
                  isInline
                  size={size}
                  isDisabled={isDisabled}
                  slot="increment"
                >
                  <Plus aria-hidden size={size > 3 ? 20 : 16} />
                </StepperButton>
              </>
          }
        </FieldGroup>
        {description && <Description>{description}</Description>}
        <FieldError>{errorMessage}</FieldError>
      </Theme>
    </RACNumberField>
  )
}

const stepperButtonStyle = tv({
  base: [
    "text-neutral-text-subtle flex cursor-default items-center justify-center bg-transparent",
  ],
  variants: {
    size: {
      1: "rounded-xs mx-0.5 size-5",
      2: "rounded-xs mx-0.5 size-6",
      3: "rounded-xs mx-1 size-6",
      4: "mx-1.5 size-7 rounded-[3px]",
    },
    isInline: { true: "grow-0" },
    isStacked: { true: "flex-col self-stretch p-0.5" },
    isHovered: { true: "bg-neutral-bg-hover" },
    isPressed: { true: "bg-neutral-bg-active" },
    isDisabled: { true: "cursor-not-allowed" },
    isInvalid: { true: "text-error-text" },
  },
  defaultVariants: { size: 1 },
})

interface StepperButtonProps
  extends RACButtonProps,
    VariantProps<typeof stepperButtonStyle> {}

function StepperButton({
  isInline,
  isStacked,
  size,
  ...props
}: StepperButtonProps) {
  return (
    <RACButton
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        stepperButtonStyle({
          ...renderProps,
          isInline,
          isStacked,
          size,
          className,
        }),
      )}
    />
  )
}

export { NumberField, type NumberFieldProps }
