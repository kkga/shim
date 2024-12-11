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

const styles = {
  track: tv({
    base: ["grow-1 relative flex shrink-0 items-center"],
    variants: {
      orientation: {
        horizontal: "min-w-32",
        vertical: "min-h-32 flex-col-reverse",
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

  trackInner: tv({
    base: "absolute overflow-hidden rounded-full",
    variants: {
      size: { 1: null, 2: null, 3: null },
      variant: {
        classic: "bg-neutral-bg-subtle shadow-[var(--shadow-inner)]",
        soft: "bg-neutral-bg inset-ring-0",
        outline:
          "inset-ring-1 inset-ring-neutral-line bg-transparent shadow-none",
      },
      orientation: { horizontal: "inset-y-auto", vertical: "inset-x-auto" },
      isDisabled: {
        true: "bg-neutral-bg-subtle shadow-none",
      },
    },
    compoundVariants: [
      { size: 1, orientation: "horizontal", className: "-inset-x-2 h-1.5" },
      { size: 1, orientation: "vertical", className: "-inset-y-2 w-1.5" },
      { size: 2, orientation: "horizontal", className: "-inset-x-2 h-2" },
      { size: 2, orientation: "vertical", className: "-inset-y-2 w-2" },
      { size: 3, orientation: "horizontal", className: "-inset-x-2.5 h-2.5" },
      { size: 3, orientation: "vertical", className: "-inset-y-2.5 w-2.5" },
    ],
  }),

  trackFill: tv({
    base: "bg-accent-solid absolute",
    variants: {
      variant: {
        classic: "bg-accent-solid",
        soft: "bg-accent-bg-active",
        outline: "bg-accent-solid",
      },
      orientation: { horizontal: "bottom-0 top-0", vertical: "left-0 right-0" },
    },
  }),

  thumb: tv({
    extend: focusStyle,
    base: [
      "rounded-full outline-offset-0",
      "group-data-disabled:bg-neutral-bg group-data-disabled:ring-neutral-line group-data-disabled:shadow-none",
    ],
    variants: {
      variant: {
        classic: "bg-white shadow ring-1 ring-black/15",
        soft: "bg-accent-solid shadow-none",
        outline: "ring-neutral-border bg-white ring-1",
      },
      size: {
        1: "size-4 group-data-[orientation=horizontal]:mt-4 group-data-[orientation=vertical]:ml-4",
        2: "size-[18px] group-data-[orientation=horizontal]:mt-[18px] group-data-[orientation=vertical]:ml-[18px]",
        3: "size-5 group-data-[orientation=horizontal]:mt-5 group-data-[orientation=vertical]:ml-5",
      },
      orientation: { horizontal: "left-0", vertical: "top-0" },
    },
  }),

  output: tv({
    base: [
      "text-neutral-text min-w-[3ch] self-center justify-self-end text-end text-xs tabular-nums data-[orientation=vertical]:hidden",
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

        <div className="grow-1 flex gap-1">
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
