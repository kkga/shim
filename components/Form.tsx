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
  ...props
}: RACFormProps & Partial<ThemeContextProps>) {
  let themeProps = useThemeProps(props)
  return (
    <RACForm {...props} className={cx("flex flex-col gap-3", className)}>
      <Theme {...themeProps}>{children}</Theme>
    </RACForm>
  )
}

export { Form }
