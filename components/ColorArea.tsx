"use client"

import { cxRenderProps } from "@/lib/style"
import {
  ColorArea as RACColorArea,
  ColorAreaProps as RACColorAreaProps,
} from "react-aria-components"
import { tv, VariantProps } from "tailwind-variants"
import { ColorThumb } from "./ColorThumb"

const style = tv({
  base: "bg-neutral-bg-subtle size-56 rounded-sm shadow-inner",
})

interface ColorAreaProps
  extends RACColorAreaProps,
    VariantProps<typeof style> {}

function ColorArea(props: ColorAreaProps) {
  return (
    <RACColorArea
      {...props}
      className={cxRenderProps(props.className, style())}
      style={({ defaultStyle, isDisabled }) => ({
        ...defaultStyle,
        background: isDisabled ? undefined : defaultStyle.background,
      })}
    >
      <ColorThumb variant="loupe" />
    </RACColorArea>
  )
}

export { ColorArea, type ColorAreaProps }
