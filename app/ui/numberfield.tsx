"use client"

import {
  Button,
  NumberField as RACNumberField,
  type ButtonProps,
  type NumberFieldProps as RACNumberFieldProps,
} from "react-aria-components"

import { compose, cva, cx, cxRenderProps } from "@lib/utils"
import { CaretDown, CaretUp } from "@phosphor-icons/react"
import {
  Description,
  FieldContext,
  FieldError,
  FieldGroup,
  FieldProps,
  Input,
  Label,
  fieldLayoutStyle,
  inputBaseStyle,
  useFieldProps,
} from "./field"

interface NumberFieldProps extends RACNumberFieldProps, FieldProps {}

const groupStyle = compose(
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

const inputStyle = cva({
  base: [
    "min-w-0 flex-1 appearance-none self-stretch border-none text-inherit outline-0 placeholder:text-neutral-placeholder",
  ],
  variants: {
    size: {
      1: "indent-1.5 text-xs",
      2: "indent-[7px] text-[13px]",
      3: "indent-2 text-sm",
    },
  },
  defaultVariants: {
    size: 1,
  },
})

function NumberField({
  label,
  description,
  errorMessage,
  placeholder,
  ...props
}: NumberFieldProps) {
  let { labelPosition, size, variant } = useFieldProps(props)

  return (
    <RACNumberField
      {...props}
      className={cxRenderProps(
        props.className,
        fieldLayoutStyle({ labelPosition }),
      )}
    >
      <FieldContext.Provider value={{ size, variant, labelPosition }}>
        {label && <Label>{label}</Label>}
        <FieldGroup
          className={(renderProps) =>
            groupStyle({ size, variant, ...renderProps })
          }
        >
          {() => (
            <>
              <Input className={inputStyle({ size })} />
              <div className={cx("flex flex-col self-stretch p-0.5")}>
                <StepperButton slot="increment">
                  <CaretUp
                    aria-hidden
                    size={size === 1 ? 10 : 12}
                    weight="bold"
                  />
                </StepperButton>
                <StepperButton slot="decrement">
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
      </FieldContext.Provider>
    </RACNumberField>
  )
}

function StepperButton({ className, ...props }: ButtonProps) {
  let { size } = useFieldProps({})

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
