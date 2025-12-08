"use client";

import {
  ColorSlider as RacColorSlider,
  type ColorSliderProps as RacColorSliderProps,
  ColorThumb as RacColorThumb,
  type ColorThumbProps as RacColorThumbProps,
  SliderOutput as RacSliderOutput,
  SliderTrack as RacSliderTrack,
} from "react-aria-components";
import { type ClassValue, tv, type VariantProps } from "tailwind-variants";
import { fieldLayoutStyle, Label } from "@/shim-ui/field";
import { cnRenderProps } from "@/shim-ui/lib/style";
import { type Size, Theme, useThemeProps } from "@/shim-ui/lib/theme";
import { style } from "@/shim-ui/slider";

const thumbStyle = tv({
  base: "focus-ring top-[50%] left-[50%] rounded-sm border-3 border-white",
  variants: {
    size: {
      1: "",
      2: "",
      3: "",
      4: "",
    } satisfies Record<Size, ClassValue>,
    orientation: {
      horizontal: "",
      vertical: "",
    },
  },
  compoundVariants: [
    {
      orientation: "horizontal",
      size: 1,
      className: "h-7.5 w-3",
    },
    {
      orientation: "horizontal",
      size: 2,
      className: "h-8.5 w-3",
    },
    {
      orientation: "horizontal",
      size: 3,
      className: "h-9.5 w-3.5",
    },
    {
      orientation: "horizontal",
      size: 4,
      className: "h-12 w-4.5 rounded-[5px] border-4",
    },
    {
      orientation: "vertical",
      size: 1,
      className: "h-3 w-7.5",
    },
    {
      orientation: "vertical",
      size: 2,
      className: "h-3 w-8.5",
    },
    {
      orientation: "vertical",
      size: 3,
      className: "h-3.5 w-9.5",
    },
    {
      orientation: "vertical",
      size: 4,
      className: "h-4.5 w-12 rounded-[5px] border-4",
    },
  ],
});

interface ColorThumbProps
  extends RacColorThumbProps,
    VariantProps<typeof thumbStyle> {}

function ColorThumb({
  size = 1,
  orientation = "horizontal",
  ...props
}: ColorThumbProps) {
  return (
    <RacColorThumb
      {...props}
      className={() => thumbStyle({ size, orientation })}
      style={({ defaultStyle }) => ({
        ...defaultStyle,
        backgroundImage:
          "repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px",
        boxShadow:
          "0 0 0 1px var(--black-a3), var(--shadow-inner), var(--shadow-xs)",
      })}
    />
  );
}

interface ColorSliderProps
  extends RacColorSliderProps,
    VariantProps<typeof style> {
  label?: string;
}

function ColorSlider({ label, ...props }: ColorSliderProps) {
  const themeProps = useThemeProps(props);
  const { labelPosition, size } = themeProps;
  const { track, output } = style({ size });

  return (
    <RacColorSlider
      {...props}
      className={cnRenderProps(props.className, fieldLayoutStyle())}
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
