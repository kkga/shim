"use client"

import { cxRenderProps, focusStyle } from "@/lib/style"
import {
  ColorSwatchPicker as RACColorSwatchPicker,
  ColorSwatchPickerItem as RACColorSwatchPickerItem,
  ColorSwatchPickerItemProps as RACColorSwatchPickerItemProps,
  ColorSwatchPickerProps as RACColorSwatchPickerProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import { ColorSwatch } from "./ColorSwatch"

function ColorSwatchPicker({
  children,
  ...props
}: Omit<RACColorSwatchPickerProps, "layout">) {
  return (
    <RACColorSwatchPicker
      {...props}
      className={cxRenderProps(props.className, "flex gap-1")}
    >
      {children}
    </RACColorSwatchPicker>
  )
}

const itemStyle = tv({
  extend: focusStyle,
  base: "relative rounded",
})

function ColorSwatchPickerItem(props: RACColorSwatchPickerItemProps) {
  return (
    <RACColorSwatchPickerItem {...props} className={itemStyle()}>
      {({ isSelected }) => (
        <>
          <ColorSwatch />
          {isSelected && (
            <div className="absolute left-0 top-0 h-full w-full rounded border-2 border-black outline-2 -outline-offset-4 outline-white forced-color-adjust-none dark:border-white dark:outline-black" />
          )}
        </>
      )}
    </RACColorSwatchPickerItem>
  )
}

export { ColorSwatchPicker, ColorSwatchPickerItem }
