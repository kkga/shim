"use client"

import { cva } from "@lib/utils"
import {
  Toolbar as RACToolbar,
  ToolbarProps as RACToolbarProps,
  composeRenderProps,
} from "react-aria-components"

const style = cva({
  base: "flex gap-2",
  variants: {
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col items-start",
    },
  },
})

export function Toolbar(props: RACToolbarProps) {
  return (
    <RACToolbar
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        style({ ...renderProps, className }),
      )}
    />
  )
}
