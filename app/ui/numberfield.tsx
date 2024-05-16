"use client"

import {
  Button,
  NumberField as RACNumberField,
  type ButtonProps,
  type NumberFieldProps as RACNumberFieldProps,
} from "react-aria-components"

import { cx, cxRenderProps } from "@lib/style"
import { Theme, useThemeProps } from "@lib/theme"
import { CaretDown, CaretUp } from "@phosphor-icons/react"
import {
  Description,
  FieldError,
  FieldGroup,
  FieldProps,
  GroupInput,
  Label,
  fieldLayoutStyle,
} from "./field"

interface NumberFieldProps extends RACNumberFieldProps, FieldProps {}

function NumberField({
  label,
  description,
  errorMessage,
  placeholder,
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
          {({ isDisabled }) => (
            <>
              <GroupInput placeholder={placeholder} />
              <div className={cx("flex flex-col self-stretch p-0.5")}>
                <StepperButton isDisabled={isDisabled} slot="increment">
                  <CaretUp
                    aria-hidden
                    size={size === 1 ? 10 : 12}
                    weight="bold"
                  />
                </StepperButton>
                <StepperButton isDisabled={isDisabled} slot="decrement">
                  <CaretDown
                    aria-hidden
                    size={size === 1 ? 10 : 12}
                    weight="bold"
                  />
                </StepperButton>
              </div>
            </>
          )}
        </FieldGroup>
        {description && <Description>{description}</Description>}
        <FieldError>{errorMessage}</FieldError>
      </Theme>
    </RACNumberField>
  )
}

function StepperButton({ className, ...props }: ButtonProps) {
  let { size } = useThemeProps({})

  return (
    <Button
      {...props}
      className={cx(
        "flex flex-1 cursor-default items-center justify-center rounded-sm bg-transparent text-neutral-placeholder",
        // hovered
        "data-hovered:bg-neutral-bg-hover",
        // pressed
        "data-pressed:bg-neutral-bg-active",
        // group invalid
        "group-data-invalid:text-error-text",
        size === 1 && "px-1",
        size === 2 && "px-[5px]",
        size === 3 && "rounded px-1.5",
        className,
      )}
    />
  )
}

export { NumberField, type NumberFieldProps }
