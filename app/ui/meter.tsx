"use client"

import { cx, cxRenderProps } from "@lib/style"
import { useMemo } from "react"
import {
  Meter as RACMeter,
  type MeterProps as RACMeterProps,
} from "react-aria-components"
import { Description, Label } from "./field"

interface MeterProps extends RACMeterProps {
  label?: string
  description?: string
  color?: string | ((value: number) => string)
}

function Meter({ label, description, color, value, ...props }: MeterProps) {
  let barColor = useMemo(() => {
    if (color instanceof Function) {
      return color(value ?? 0)
    }
    return color
  }, [color, value])

  return (
    <RACMeter
      {...props}
      className={cxRenderProps(props.className, "flex flex-col gap-1.5")}
    >
      {({ percentage, valueText }) => (
        <>
          <div className="flex justify-between gap-2">
            <Label>{label}</Label>
            <span
              className={cx(
                "text-xs",
                color ? ""
                : percentage > 80 ? "text-error-text"
                : "text-neutral-text",
              )}
            >
              {valueText}
            </span>
          </div>
          <div className="flex h-4 items-center">
            <div className="relative h-1.5 w-full overflow-hidden rounded-[2px] bg-neutral-bg ring ring-neutral-solid/20 ring-inset">
              <div
                className="absolute top-0 left-0 h-full bg-accent-solid"
                style={{
                  width: `${percentage}%`,
                  backgroundColor: barColor,
                }}
              />
            </div>
          </div>
          {description && (
            <Description slot="description">{description}</Description>
          )}
        </>
      )}
    </RACMeter>
  )
}

export { Meter }
export type { MeterProps }
