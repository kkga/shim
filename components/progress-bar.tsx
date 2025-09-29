"use client";

import { cx, cxRenderProps } from "@lib/style";
import { Label } from "@ui/field";
import {
  ProgressBar as RacProgressBar,
  type ProgressBarProps as RacProgressBarProps,
} from "react-aria-components";

interface ProgressBarProps extends RacProgressBarProps {
  label?: string;
}

function ProgressBar({ label, ...props }: ProgressBarProps) {
  return (
    <RacProgressBar
      {...props}
      className={cxRenderProps(props.className, "flex flex-col gap-1.5")}
    >
      {({ percentage, valueText, isIndeterminate }) => (
        <>
          {label || valueText ? (
            <div className="flex justify-between gap-2">
              <Label>{label}</Label>
              <span className="text-neutral-text text-xs">{valueText}</span>
            </div>
          ) : null}
          <div className="flex h-4 items-center">
            <div className="relative h-1.5 w-full overflow-hidden rounded-[2px] bg-neutral-bg ring ring-neutral-solid/20 ring-inset">
              <div
                className={cx(
                  "absolute top-0 h-full bg-accent-solid transition-[width] duration-500",
                  isIndeterminate
                    ? "w-[50%] origin-left animate-[indeterminate_1000ms_ease-in-out_infinite]"
                    : "left-0"
                )}
                style={isIndeterminate ? {} : { width: `${percentage}%` }}
              />
            </div>
          </div>
        </>
      )}
    </RacProgressBar>
  );
}

export { ProgressBar, type ProgressBarProps };
