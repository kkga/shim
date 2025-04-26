"use client"

import { cxRenderProps } from "@/lib/style"
import { Theme, useThemeProps } from "@/lib/theme"
import {
  ColorField as RACColorField,
  ColorFieldProps as RACColorFieldProps,
} from "react-aria-components"
import {
  Description,
  FieldError,
  FieldProps,
  Input,
  Label,
  fieldLayoutStyle,
} from "./Field"

interface ColorFieldProps extends RACColorFieldProps, FieldProps {}

export function ColorField({
  label,
  description,
  errorMessage,
  ...props
}: ColorFieldProps) {
  let themeProps = useThemeProps({ ...props, fieldVariant: props.variant })
  let { labelPosition } = themeProps

  return (
    <RACColorField
      {...props}
      className={cxRenderProps(
        props.className,
        fieldLayoutStyle({ labelPosition }),
      )}
    >
      <Theme {...themeProps}>
        {label && <Label>{label}</Label>}
        <Input className="tabular-nums" />
        {description && <Description>{description}</Description>}
        <FieldError>{errorMessage}</FieldError>
      </Theme>
    </RACColorField>
  )
}
