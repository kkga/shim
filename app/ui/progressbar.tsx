"use client"

import React from "react"
import {
  ProgressBar as RACProgressBar,
  ProgressBarProps as RACProgressBarProps,
} from "react-aria-components"
import { Label } from "@ui/field"
import { cx, cxRenderProps } from "@lib/utils"

export interface ProgressBarProps extends RACProgressBarProps {
  label?: string
}

function ProgressBar({ label, ...props }: ProgressBarProps) {
  return (
    <RACProgressBar
      {...props}
      className={cxRenderProps(props.className, "flex flex-col gap-1.5")}
    >
      {({ percentage, valueText, isIndeterminate }) => (
        <>
          {label || valueText ?
            <div className="flex justify-between gap-2">
              <Label>{label}</Label>
              <span className="text-xs text-neutral-text">{valueText}</span>
            </div>
          : null}
          <div className="flex h-4 items-center">
            <div className="relative h-1.5 w-full overflow-hidden rounded-[2px] bg-neutral-bg ring ring-neutral-solid/20 ring-inset">
              <div
                className={cx(
                  "absolute top-0 h-full bg-accent-solid",
                  isIndeterminate ?
                    "w-[50%] origin-left animate-[indeterminate_1000ms_linear_infinite]"
                  : "left-0",
                )}
                style={isIndeterminate ? {} : { width: percentage + "%" }}
              />
            </div>
          </div>
        </>
      )}
    </RACProgressBar>
  )
}

export { ProgressBar }
