"use client"

import { cx, cxRenderProps } from "@lib/style"
import { Label } from "@ui/Field"
import {
  ProgressBar as RACProgressBar,
  ProgressBarProps as RACProgressBarProps,
} from "react-aria-components"

interface ProgressBarProps extends RACProgressBarProps {
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
              <span className="text-neutral-text text-xs">{valueText}</span>
            </div>
          : null}
          <div className="flex h-4 items-center">
            <div className="bg-neutral-bg ring-neutral-solid/20 relative h-1.5 w-full overflow-hidden rounded-[2px] ring ring-inset">
              <div
                className={cx(
                  "bg-accent-solid absolute top-0 h-full transition-[width]",
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

export { ProgressBar, type ProgressBarProps }
