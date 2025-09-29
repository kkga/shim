"use client";

import {
  CaretDownIcon,
  CaretUpIcon,
  MinusIcon,
  PlusIcon,
} from "@phosphor-icons/react";
import {
  composeRenderProps,
  Button as RacButton,
  type ButtonProps as RacButtonProps,
  NumberField as RacNumberField,
  type NumberFieldProps as RacNumberFieldProps,
} from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";
import {
  Description,
  FieldError,
  FieldGroup,
  type FieldProps,
  fieldLayoutStyle,
  GroupInput,
  Label,
} from "@/components/field";
import { cx, cxRenderProps } from "@/lib/style";
import { ICON_SIZE_MAP, Theme, useThemeProps } from "@/lib/theme";

interface NumberFieldProps extends RacNumberFieldProps, FieldProps {
  stepperLayout?: "inline" | "stacked";
}

function NumberField({
  label,
  description,
  errorMessage,
  placeholder,
  stepperLayout = "inline",
  ...props
}: NumberFieldProps) {
  let themeProps = useThemeProps({ ...props, fieldVariant: props.variant });
  let { size, labelPosition } = themeProps;

  return (
    <RacNumberField
      {...props}
      className={cxRenderProps(
        props.className,
        fieldLayoutStyle({ labelPosition })
      )}
    >
      <Theme {...themeProps}>
        {label && <Label>{label}</Label>}
        <FieldGroup>
          {({ isDisabled }) =>
            stepperLayout === "stacked" ? (
              <>
                <GroupInput
                  className="tabular-nums"
                  placeholder={placeholder}
                />
                <div className={cx("flex flex-col self-stretch p-0.5")}>
                  <StepperButton isDisabled={isDisabled} slot="increment">
                    <CaretUpIcon aria-hidden size={ICON_SIZE_MAP[size]} />
                  </StepperButton>
                  <StepperButton isDisabled={isDisabled} slot="decrement">
                    <CaretDownIcon aria-hidden size={ICON_SIZE_MAP[size]} />
                  </StepperButton>
                </div>
              </>
            ) : (
              <>
                <StepperButton
                  isDisabled={isDisabled}
                  isInline
                  size={size}
                  slot="decrement"
                >
                  <MinusIcon aria-hidden size={ICON_SIZE_MAP[size]} />
                </StepperButton>
                <GroupInput
                  className="text-center indent-0 tabular-nums"
                  placeholder={placeholder}
                />
                <StepperButton
                  isDisabled={isDisabled}
                  isInline
                  size={size}
                  slot="increment"
                >
                  <PlusIcon aria-hidden size={ICON_SIZE_MAP[size]} />
                </StepperButton>
              </>
            )
          }
        </FieldGroup>
        {description && <Description>{description}</Description>}
        <FieldError>{errorMessage}</FieldError>
      </Theme>
    </RacNumberField>
  );
}

const stepperButtonStyle = tv({
  base: [
    "flex cursor-default items-center justify-center bg-transparent text-neutral-text-subtle",
  ],
  variants: {
    size: {
      1: "mx-0.5 size-5 rounded-xs",
      2: "mx-0.5 size-6 rounded-xs",
      3: "mx-1 size-6 rounded-xs",
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
});

interface StepperButtonProps
  extends RacButtonProps,
    VariantProps<typeof stepperButtonStyle> {}

function StepperButton({
  isInline,
  isStacked,
  size,
  ...props
}: StepperButtonProps) {
  return (
    <RacButton
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        stepperButtonStyle({
          ...renderProps,
          isInline,
          isStacked,
          size,
          className,
        })
      )}
    />
  );
}

export { NumberField, type NumberFieldProps };
