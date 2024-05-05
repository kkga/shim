"use client"

import { cx } from "@lib/utils"
import {
  Form as RACForm,
  FormProps as RACFormProps,
} from "react-aria-components"

function Form({ className, ...props }: RACFormProps) {
  return <RACForm {...props} className={cx("flex flex-col gap-4", className)} />
}

export { Form }
