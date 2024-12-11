"use client"

import { cx } from "@lib/style"
import { Theme, ThemeContextProps, useThemeProps } from "@lib/theme"
import {
  Form as RACForm,
  FormProps as RACFormProps,
} from "react-aria-components"

function Form({
  className,
  children,
  labelPosition,
  fieldVariant,
  buttonVariant,
  size,
  ...props
}: RACFormProps & Partial<ThemeContextProps>) {
  let themeProps = useThemeProps({
    labelPosition,
    fieldVariant,
    buttonVariant,
    size,
  })

  return (
    <RACForm {...props} className={cx("flex flex-col gap-3", className)}>
      <Theme {...themeProps}>{children}</Theme>
    </RACForm>
  )
}

export { Form }
