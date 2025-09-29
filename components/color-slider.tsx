"use client"

import { cxRenderProps } from "@/lib/style"
import { Theme, useThemeProps } from "@/lib/theme"
import {
  ColorSlider as RACColorSlider,
  ColorSliderProps as RACColorSliderProps,
  SliderOutput as RACSliderOutput,
  SliderTrack as RACSliderTrack,
} from "react-aria-components"
import { VariantProps } from "tailwind-variants"
import { ColorThumb } from "./ColorThumb"
import { fieldLayoutStyle, Label } from "./Field"
import { style } from "./Slider"

interface ColorSliderProps
  extends RACColorSliderProps,
    VariantProps<typeof style> {
  label?: string
}

function ColorSlider({ label, ...props }: ColorSliderProps) {
  let themeProps = useThemeProps(props)
  let { labelPosition, size } = themeProps
  let { track, output } = style({ size })

  return (
    <RACColorSlider
      {...props}
      className={cxRenderProps(props.className, fieldLayoutStyle())}
    >
      {({ orientation }) => (
        <Theme {...themeProps}>
          {orientation === "horizontal" && label && (
            <div className="flex justify-between">
              <Label>{label}</Label>
              {labelPosition === "top" && (
                <RACSliderOutput className={output()}>
                  {({ state }) =>
                    state.values
                      .map((_, i) => state.getThumbValueLabel(i))
                      .join("–")
                  }
                </RACSliderOutput>
              )}
            </div>
          )}

          <RACSliderTrack
            className={({ orientation }) =>
              track({
                orientation,
                class:
                  "border-neutral-line mx-0 my-0 rounded-sm border-0 shadow-inner",
              })
            }
            style={({ defaultStyle, isDisabled }) => ({
              ...defaultStyle,
              background:
                isDisabled ? undefined : (
                  `${defaultStyle.background}, repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`
                ),
            })}
          >
            <ColorThumb size={size} orientation={orientation} />
          </RACSliderTrack>
        </Theme>
      )}
    </RACColorSlider>
  )
}

export { ColorSlider, type ColorSliderProps }
