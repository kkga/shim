'use client'

import { compose, cva, cx, cxRenderProps, focusVisibleStyle } from '@lib/utils'
import {
  Slider as RACSlider,
  SliderOutput,
  SliderThumb,
  SliderTrack,
  type SliderProps as RACSliderProps,
} from 'react-aria-components'
import { Description, Label } from './field'

const trackStyles = cva({
  base: 'rounded-[2px] ring ring-neutral-solid/20 ring-inset relative',
  variants: {
    orientation: {
      horizontal: 'w-full h-1.5',
      vertical: 'h-full w-1.5 ml-[50%] -translate-x-[50%]',
    },
    isDisabled: {
      false: 'bg-neutral-bg shadow-inner',
      true: 'bg-neutral-bg-subtle shadow-none',
    },
  },
})

const thumbStyles = compose(
  focusVisibleStyle,
  cva({
    base: [
      'size-4 bg-white ring-1 ring-black/10 shadow rounded-full',
      // vertical
      'group-data-[orientation=horizontal]:mt-4 group-data-[orientation=vertical]:ml-2',
    ],
    variants: {
      isDragging: {
        true: 'shadow-lg',
      },
      isDisabled: {
        true: 'bg-neutral-bg ring-neutral-line shadow-none',
      },
    },
  }),
)

interface SliderProps<T> extends RACSliderProps<T> {
  label?: string
  description?: string
  thumbLabels?: string[]
}

function Slider<T extends number | number[]>({
  label,
  description,
  thumbLabels,
  ...props
}: SliderProps<T>) {
  return (
    <RACSlider
      {...props}
      className={cxRenderProps(
        props.className,
        'group grid-cols-[1fr_auto] flex-col items-center gap-2 data-[orientation=vertical]:flex data-[orientation=horizontal]:grid',
      )}
    >
      <Label>{label}</Label>
      <SliderOutput className="text-sm tabular-nums text-neutral-text group-data-[disabled]:text-neutral-placeholder data-[orientation=vertical]:hidden">
        {({ state }) =>
          state.values.map((_, i) => state.getThumbValueLabel(i)).join('–')
        }
      </SliderOutput>
      <SliderTrack className="group col-span-2 flex items-center data-[orientation=vertical]:h-64 data-[orientation=vertical]:w-4 data-[orientation=horizontal]:h-4">
        {({ state, ...renderProps }) => (
          <>
            <div className={trackStyles(renderProps)}>
              {state.values.length === 2 && (
                <div
                  className={cx(
                    'absolute bg-accent-solid',
                    renderProps.orientation === 'horizontal' ?
                      'top-0 bottom-0'
                    : 'right-0 left-0',
                  )}
                  style={
                    renderProps.orientation === 'horizontal' ?
                      {
                        left: `${state.getThumbPercent(0) * 100}%`,
                        right: `${100 - state.getThumbPercent(1) * 100}%`,
                      }
                    : {
                        bottom: `${state.getThumbPercent(0) * 100}%`,
                        top: `${100 - state.getThumbPercent(1) * 100}%`,
                      }
                  }
                />
              )}
            </div>
            {state.values.map((_, i) => (
              <SliderThumb
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={i}
                index={i}
                aria-label={thumbLabels?.[i]}
                className={thumbStyles}
              />
            ))}
          </>
        )}
      </SliderTrack>
      {description && <Description>{description}</Description>}
    </RACSlider>
  )
}

export { Slider, type SliderProps }
