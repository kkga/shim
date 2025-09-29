"use client";

import { cx } from "@lib/style";
import type { ProgressBarProps as RacProgressBarProps } from "react-aria-components";
import { ProgressBar as RacProgressBar } from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";

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
});

interface ProgressCircleProps
  extends RacProgressBarProps,
    VariantProps<typeof style> {}

function ProgressCircle(props: ProgressCircleProps) {
  let [c, r] = ["50%", "calc(50% - 2px)"];
  let { circle } = style({ size: props.size ?? style.defaultVariants.size });

  return (
    <RacProgressBar {...props}>
      {({ percentage, isIndeterminate }) => (
        <svg className={circle()} fill="none" viewBox="0 0 24 24">
          <title>Loading indicator</title>
          <circle
            cx={c}
            cy={c}
            r={r}
            stroke="currentColor"
            strokeOpacity={0.25}
            strokeWidth={3}
          />
          <circle
            className={cx(
              "origin-center",
              !isIndeterminate &&
                "transition-[stroke-dashoffset] duration-500 ease-in-out",
              isIndeterminate && "animate-[spin_700ms_linear_infinite]"
            )}
            cx={c}
            cy={c}
            pathLength={100}
            r={r}
            stroke="currentColor"
            strokeDasharray="100 200"
            strokeDashoffset={
              // biome-ignore lint/style/noMagicNumbers: no magic, just optics
              isIndeterminate ? 100 - 30 : 100 - (percentage ?? 0)
            }
            strokeLinecap="round"
            strokeWidth={3}
            transform={isIndeterminate ? undefined : "rotate(-90)"}
          />
        </svg>
      )}
    </RacProgressBar>
  );
}

export { ProgressCircle };
export type { ProgressCircleProps };
