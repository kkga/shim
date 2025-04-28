"use client"

import { cxRenderProps, focusStyle } from "@lib/style"
import { Theme, useThemeProps } from "@lib/theme"
import {
  Slider as RACSlider,
  SliderOutput,
  SliderThumb,
  SliderTrack,
  type SliderProps as RACSliderProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import { Description, FieldProps, Label, fieldLayoutStyle } from "./Field"

const style = tv({
  slots: {
    track: "grow-1 relative flex shrink-0 items-center",
    indicator: "absolute overflow-hidden rounded-full",
    fill: "absolute",
    thumb: [focusStyle(), "rounded-full outline-offset-0"],
    output:
      "text-neutral-text min-w-[3ch] self-center justify-self-end text-end text-xs tabular-nums",
  },
  variants: {
    size: {
      1: { output: "text-xs", thumb: "size-4" },
      2: { output: "text-[13px]", thumb: "size-[18px]" },
      3: { output: "text-sm", thumb: "size-5" },
      4: { output: "text-base", thumb: "size-6" },
    },
    orientation: {
      horizontal: {
        track: "min-w-32",
        indicator: "inset-y-auto",
        fill: "inset-y-0",
        thumb: "left-0",
      },
      vertical: {
        track: "min-h-32 flex-col-reverse",
        indicator: "inset-x-auto",
        fill: "inset-x-0",
        thumb: "top-0",
        output: "hidden",
      },
    },
    variant: {
      classic: {
        indicator: "bg-neutral-bg-subtle shadow-[var(--shadow-inner)]",
        fill: "bg-accent-solid",
        thumb: "bg-white shadow ring-1 ring-black/15",
      },
      soft: {
        indicator: "bg-neutral-bg inset-ring-0",
        fill: "bg-accent-bg-active",
        thumb: "bg-accent-solid shadow-none",
      },
      outline: {
        indicator:
          "inset-ring-1 inset-ring-neutral-line bg-transparent shadow-none",
        fill: "bg-accent-bg-solid",
        thumb: "ring-neutral-border bg-white ring-1",
      },
    },
    isDisabled: {
      true: {
        indicator: "bg-neutral-bg-subtle shadow-none",
        thumb: "bg-neutral-bg ring-neutral-line shadow-none",
        output: "text-neutral-text-subtle",
      },
    },
  },
  compoundVariants: [
    {
      size: 1,
      orientation: "horizontal",
      class: {
        track: "mx-2 h-6",
        indicator: "-inset-x-2 h-1.5",
        thumb: "mt-4",
      },
    },
    {
      size: 1,
      orientation: "vertical",
      class: {
        track: "my-2 w-6",
        indicator: "-inset-y-2 w-1.5",
        thumb: "ml-4",
      },
    },
    {
      size: 2,
      orientation: "horizontal",
      class: {
        track: "mx-2 h-7",
        indicator: "-inset-x-2 h-2",
        thumb: "mt-[18px]",
      },
    },
    {
      size: 2,
      orientation: "vertical",
      class: {
        track: "my-2 w-7",
        indicator: "-inset-y-2 w-2",
        thumb: "ml-[18px]",
      },
    },
    {
      size: 3,
      orientation: "horizontal",
      class: {
        track: "mx-2.5 h-8",
        indicator: "-inset-x-2.5 h-2.5",
        thumb: "mt-5",
      },
    },
    {
      size: 3,
      orientation: "vertical",
      class: {
        track: "my-2.5 w-8",
        indicator: "-inset-y-2.5 w-2.5",
        thumb: "ml-5",
      },
    },
    {
      size: 4,
      orientation: "horizontal",
      class: {
        track: "mx-3 h-10",
        indicator: "-inset-x-3 h-3",
        thumb: "mt-6",
      },
    },
    {
      size: 4,
      orientation: "vertical",
      class: {
        track: "my-3 w-10",
        indicator: "-inset-y-3 w-3",
        thumb: "ml-6",
      },
    },
  ],
})

interface SliderProps<T> extends RACSliderProps<T>, FieldProps {
  thumbLabels?: string[]
  isFilled?: boolean
}

function Slider<T extends number | number[]>({
  label,
  description,
  thumbLabels,
  isFilled,
  className,
  ...props
}: SliderProps<T>) {
  let themeProps = useThemeProps({ ...props, fieldVariant: props.variant })
  let { labelPosition, size, fieldVariant: variant } = themeProps
  let { track, indicator, fill, output, thumb } = style({ size, variant })

  return (
    <RACSlider
      {...props}
      className={cxRenderProps(className, fieldLayoutStyle({ labelPosition }))}
    >
      <Theme {...themeProps}>
        {label && (
          <div className="flex justify-between">
            <Label>{label}</Label>
            {labelPosition === "top" && (
              <SliderOutput className={output()}>
                {({ state }) =>
                  state.values
                    .map((_, i) => state.getThumbValueLabel(i))
                    .join("–")
                }
              </SliderOutput>
            )}
          </div>
        )}

        <div className="grow-1 flex gap-1">
          <SliderTrack className={({ orientation }) => track({ orientation })}>
            {({ state, orientation }) => (
              <>
                <div className={indicator({ orientation })}>
                  {isFilled && (
                    <div
                      className={fill({ orientation })}
                      style={
                        orientation === "horizontal" ?
                          {
                            left:
                              state.values.length > 1 ?
                                `${state.getThumbPercent(0) * 100}%`
                              : 0,
                            right: `${100 - state.getThumbPercent(state.values.length - 1) * 100}%`,
                          }
                        : {
                            bottom:
                              state.values.length > 1 ?
                                `${state.getThumbPercent(0) * 100}%`
                              : 0,
                            top: `${100 - state.getThumbPercent(state.values.length - 1) * 100}%`,
                          }
                      }
                    />
                  )}
                </div>
                {state.values.map((_, i) => (
                  <SliderThumb
                    key={i}
                    index={i}
                    aria-label={thumbLabels?.[i]}
                    className={thumb({ orientation })}
                  />
                ))}
              </>
            )}
          </SliderTrack>

          {labelPosition === "side" && (
            <SliderOutput className={output({ size })}>
              {({ state }) =>
                state.values
                  .map((_, i) => state.getThumbValueLabel(i))
                  .join("–")
              }
            </SliderOutput>
          )}
        </div>

        {description && <Description>{description}</Description>}
      </Theme>
    </RACSlider>
  )
}

export { Slider, style, type SliderProps }
