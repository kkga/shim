"use client"

import { cxRenderProps } from "@lib/style"
import { Theme, useThemeProps } from "@lib/theme"
import type { ToggleButtonGroupProps as RACToggleButtonGroupProps } from "react-aria-components"
import {
  composeRenderProps,
  ToggleButtonGroup as RACToggleButtonGroup,
} from "react-aria-components"
import { tv, VariantProps } from "tailwind-variants"
import {
  Description,
  FieldError,
  fieldLayoutStyle,
  FieldProps,
  Label,
} from "./Field"

const style = tv({
  base: "group grid auto-cols-fr grid-flow-col",
  variants: {
    variant: { soft: "", ghost: "" },
    intent: { neutral: "", accent: "", success: "", warning: "", error: "" },
    size: {
      1: "rounded-sm",
      2: "rounded-sm",
      3: "rounded-md",
      4: "rounded-lg",
    },
  },
  defaultVariants: {
    size: 1,
    variant: "soft",
    intent: "neutral",
  },
})

interface ToggleButtonGroupProps
  extends RACToggleButtonGroupProps,
    Omit<FieldProps, "variant">,
    VariantProps<typeof style> {
  variant?: "soft" | "ghost"
}

function ToggleButtonGroup({
  label,
  description,
  className,
  errorMessage,
  ...props
}: ToggleButtonGroupProps) {
  let themeProps = useThemeProps({ ...props, buttonVariant: props.variant })

  return (
    <RACToggleButtonGroup
      {...props}
      className={cxRenderProps(
        className,
        fieldLayoutStyle({ labelPosition: themeProps.labelPosition }),
      )}
    >
      {composeRenderProps(props.children, (children) => (
        <Theme {...themeProps}>
          {label && <Label>{label}</Label>}
          <div className={style()}>{children}</div>
          {description && <Description>{description}</Description>}
          <FieldError>{errorMessage}</FieldError>
        </Theme>
      ))}
    </RACToggleButtonGroup>
  )
}

export { ToggleButtonGroup }
