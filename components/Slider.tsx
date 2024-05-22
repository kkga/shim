"use client"

import { compose, cva, cxRenderProps, focusStyle } from "@lib/style"
import { Theme, useThemeProps } from "@lib/theme"
import {
  Slider as RACSlider,
  SliderOutput,
  SliderThumb,
  SliderTrack,
  type SliderProps as RACSliderProps,
} from "react-aria-components"
import { Description, FieldProps, Label, fieldLayoutStyle } from "./Field"

const styles = {
  track: cva({
    base: ["relative flex grow-1 shrink-0 items-center"],
    variants: {
      orientation: {
        horizontal: "min-w-32",
        vertical: "flex-col-reverse min-h-32",
      },
      size: { 1: null, 2: null, 3: null },
    },
    compoundVariants: [
      { size: 1, orientation: "horizontal", className: "mx-2 h-6" },
      { size: 1, orientation: "vertical", className: "my-2 w-6" },
      { size: 2, orientation: "horizontal", className: "mx-2 h-7" },
      { size: 2, orientation: "vertical", className: "my-2 w-7" },
      { size: 3, orientation: "horizontal", className: "mx-2.5 h-8" },
      { size: 3, orientation: "vertical", className: "my-2.5 w-8" },
    ],
  }),

  trackInner: cva({
    base: "absolute rounded-full overflow-hidden",
    variants: {
      size: { 1: null, 2: null, 3: null },
      variant: {
        classic: "bg-neutral-bg-subtle shadow-[var(--shadow-inner)]",
        soft: "bg-neutral-bg inset-ring-0",
        outline:
          "bg-transparent inset-ring-1 inset-ring-neutral-line shadow-none",
      },
      orientation: { horizontal: "inset-y-auto", vertical: "inset-x-auto" },
      isDisabled: {
        true: "bg-neutral-bg-subtle shadow-none",
      },
    },
    compoundVariants: [
      { size: 1, orientation: "horizontal", className: "h-1.5 -inset-x-2" },
      { size: 1, orientation: "vertical", className: "w-1.5 -inset-y-2" },
      { size: 2, orientation: "horizontal", className: "h-2 -inset-x-2" },
      { size: 2, orientation: "vertical", className: "w-2 -inset-y-2" },
      { size: 3, orientation: "horizontal", className: "h-2.5 -inset-x-2.5" },
      { size: 3, orientation: "vertical", className: "w-2.5 -inset-y-2.5" },
    ],
  }),

  trackFill: cva({
    base: "absolute bg-accent-solid",
    variants: {
      variant: {
        classic: "bg-accent-solid",
        soft: "bg-accent-bg-active",
        outline: "bg-accent-solid",
      },
      orientation: { horizontal: "top-0 bottom-0", vertical: "right-0 left-0" },
    },
  }),

  thumb: compose(
    focusStyle,
    cva({
      base: [
        "outline-offset-0 rounded-full",
        "group-data-disabled:bg-neutral-bg group-data-disabled:ring-neutral-line group-data-disabled:shadow-none",
      ],
      variants: {
        variant: {
          classic: "bg-white ring-1 ring-black/15 shadow",
          soft: "bg-accent-solid shadow-none",
          outline: "bg-white ring-1 ring-neutral-border",
        },
        size: {
          1: "size-4 group-data-[orientation=horizontal]:mt-4 group-data-[orientation=vertical]:ml-4",
          2: "size-[18px] group-data-[orientation=horizontal]:mt-[18px] group-data-[orientation=vertical]:ml-[18px]",
          3: "size-5 group-data-[orientation=horizontal]:mt-5 group-data-[orientation=vertical]:ml-5",
        },
        orientation: { horizontal: "left-0", vertical: "top-0" },
      },
    }),
  ),

  output: cva({
    base: [
      "text-xs min-w-[3ch] self-center tabular-nums text-end justify-self-end text-neutral-text data-[orientation=vertical]:hidden",
      // disabled
      "group-data-disabled:text-neutral-placeholder",
    ],
    variants: {
      size: { 1: "text-xs", 2: "text-[13px]", 3: "text-sm" },
    },
  }),
}

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
              <SliderOutput className={styles.output({ size })}>
                {({ state }) =>
                  state.values
                    .map((_, i) => state.getThumbValueLabel(i))
                    .join("–")
                }
              </SliderOutput>
            )}
          </div>
        )}

        <div className="flex grow-1 gap-1">
          <SliderTrack
            className={({ orientation }) => styles.track({ size, orientation })}
          >
            {({ state, orientation }) => (
              <>
                <div
                  className={styles.trackInner({ size, variant, orientation })}
                >
                  {isFilled && (
                    <div
                      className={styles.trackFill({ variant, orientation })}
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
                    className={styles.thumb({ size, variant, orientation })}
                  />
                ))}
              </>
            )}
          </SliderTrack>

          {labelPosition === "side" && (
            <SliderOutput className={styles.output({ size })}>
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

export { Slider, type SliderProps }
