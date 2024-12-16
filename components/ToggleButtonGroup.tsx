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
  slots: {
    buttonsContainer: "group grid auto-cols-fr grid-flow-col",
  },
})

interface ToggleButtonGroupProps
  extends RACToggleButtonGroupProps,
    FieldProps,
    VariantProps<typeof style> {}

function ToggleButtonGroup({
  label,
  description,
  className,
  errorMessage,
  ...props
}: ToggleButtonGroupProps) {
  let themeProps = useThemeProps({ ...props })
  let { buttonsContainer } = style()

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
          <div className={buttonsContainer()}>{children}</div>
          {description && <Description>{description}</Description>}
          <FieldError>{errorMessage}</FieldError>
        </Theme>
      ))}
    </RACToggleButtonGroup>
  )
}

export { ToggleButtonGroup }
