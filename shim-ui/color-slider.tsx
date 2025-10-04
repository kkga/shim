"use client";

import {
  ColorSlider as RacColorSlider,
  type ColorSliderProps as RacColorSliderProps,
  SliderOutput as RacSliderOutput,
  SliderTrack as RacSliderTrack,
} from "react-aria-components";
import type { VariantProps } from "tailwind-variants";
import { ColorThumb } from "@/shim-ui/color-thumb";
import { fieldLayoutStyle, Label } from "@/shim-ui/field";
import { cxRenderProps } from "@/shim-ui/lib/style";
import { Theme, useThemeProps } from "@/shim-ui/lib/theme";
import { style } from "@/shim-ui/slider";

interface ColorSliderProps
  extends RacColorSliderProps,
    VariantProps<typeof style> {
  label?: string;
}

function ColorSlider({ label, ...props }: ColorSliderProps) {
  let themeProps = useThemeProps(props);
  let { labelPosition, size } = themeProps;
  let { track, output } = style({ size });

  return (
    <RacColorSlider
      {...props}
      className={cxRenderProps(props.className, fieldLayoutStyle())}
    >
      {({ orientation }) => (
        <Theme {...themeProps}>
          {orientation === "horizontal" && label && (
            <div className="flex justify-between">
              <Label>{label}</Label>
              {labelPosition === "top" && (
                <RacSliderOutput className={output()}>
                  {({ state }) =>
                    state.values
                      .map((_, i) => state.getThumbValueLabel(i))
                      .join("–")
                  }
                </RacSliderOutput>
              )}
            </div>
          )}

          <RacSliderTrack
            className={() =>
              track({
                orientation,
                class:
                  "mx-0 my-0 rounded-sm border-0 border-neutral-line shadow-inner",
              })
            }
            style={({ defaultStyle, isDisabled }) => ({
              ...defaultStyle,
              background: isDisabled
                ? undefined
                : `${defaultStyle.background}, repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`,
            })}
          >
            <ColorThumb orientation={orientation} size={size} />
          </RacSliderTrack>
        </Theme>
      )}
    </RacColorSlider>
  );
}

export { ColorSlider, type ColorSliderProps };
