"use client"

import { cx } from "@lib/style"
import type { ProgressBarProps as RACProgressBarProps } from "react-aria-components"
import { ProgressBar as RACProgressBar } from "react-aria-components"
import { tv, VariantProps } from "tailwind-variants"

const style = tv({
  slots: {
    base: "",
    circle: "shrink-0",
  },
  variants: {
    size: {
      1: {
        circle: "size-4",
      },
      2: {
        circle: "size-6",
      },
      3: {
        circle: "size-8",
      },
    },
  },
  defaultVariants: {
    size: 1,
  },
})

interface ProgressCircleProps
  extends RACProgressBarProps,
    VariantProps<typeof style> {}

function ProgressCircle(props: ProgressCircleProps) {
  let [c, r] = ["50%", "calc(50% - 2px)"]
  let { circle } = style({ size: props.size ?? style.defaultVariants.size })

  return (
    <RACProgressBar {...props}>
      {({ percentage, isIndeterminate }) => (
        <svg className={circle()} viewBox="0 0 24 24" fill="none">
          <circle
            cx={c}
            cy={c}
            r={r}
            strokeWidth={3}
            stroke="currentColor"
            strokeOpacity={0.25}
          />
          <circle
            cx={c}
            cy={c}
            r={r}
            strokeWidth={3}
            stroke="currentColor"
            pathLength={100}
            strokeDasharray="100 200"
            strokeDashoffset={
              isIndeterminate ? 100 - 30 : 100 - (percentage ?? 0)
            }
            strokeLinecap="round"
            transform={isIndeterminate ? undefined : "rotate(-90)"}
            className={cx(
              "origin-center",
              isIndeterminate && "animate-[spin_700ms_linear_infinite]",
            )}
          />
        </svg>
      )}
    </RACProgressBar>
  )
}

export { ProgressCircle }
export type { ProgressCircleProps }
