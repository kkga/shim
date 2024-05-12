"use client"

import { compose, cva, cxRenderProps, focusStyle } from "@lib/utils"
import {
  Switch as RACSwitch,
  type SwitchProps as RACSwitchProps,
} from "react-aria-components"
import { FieldContext, FieldProps, useFieldProps } from "./field"

const styles = {
  switch: cva({
    base: [
      "group flex items-center font-medium text-neutral-text truncate",
      // disabled
      "data-disabled:text-neutral-placeholder",
    ],
    variants: {
      size: {
        1: "text-xs gap-1.5",
        2: "text-[13px] gap-2",
      },
    },
    defaultVariants: {
      size: 1,
    },
  }),

  track: compose(
    focusStyle,
    cva({
      base: [
        "outline-offset-1 flex items-center shrink-0 rounded-full px-px transition-colors",
      ],
      variants: {
        variant: {
          classic: [
            "bg-neutral-bg-subtle shadow-inner inset-ring-1 inset-ring-neutral-border",
            // pressed
            "group-data-pressed:bg-neutral-bg-active",
            // selected
            "group-data-selected:bg-accent-solid",
            // disabled
            "group-data-disabled:bg-neutral-bg-subtle group-data-disabled:inset-ring-neutral-line group-data-disabled:shadow-none",
          ],
          soft: [
            "bg-neutral-bg-hover inset-ring-0",
            // pressed
            "group-data-pressed:bg-neutral-bg-active",
            // selected
            "group-data-selected:bg-accent-6",
            // disabled
            "group-data-disabled:bg-neutral-bg-subtle group-data-disabled:inset-ring-neutral-line",
          ],
          outline: [
            "bg-transparent inset-ring-1 inset-ring-neutral-border",
            // pressed
            "group-data-pressed:bg-neutral-bg-active",
            // selected
            "group-data-selected:bg-accent-solid",
            // disabled
            "group-data-disabled:bg-neutral-bg-subtle group-data-disabled:inset-ring-neutral-line",
          ],
        },
        size: {
          1: "h-4 w-[28px]",
          2: "h-5 w-[36px]",
        },
      },
      defaultVariants: {
        variant: "classic",
        size: 1,
      },
    }),
  ),

  handle: cva({
    base: [
      "size-3.5 transform translateX-0 transition-transform rounded-full bg-white shadow ring ring-black/10",
      // disabled
      "group-data-disabled:shadow-none",
    ],
    variants: {
      size: {
        1: [
          "size-3.5",
          // selected
          "group-data-selected:translate-x-[12px]",
        ],
        2: [
          "size-[18px]",
          // selected
          "group-data-selected:translate-x-[16px]",
        ],
      },
    },
    defaultVariants: {
      size: 1,
    },
  }),
}

interface SwitchProps
  extends RACSwitchProps,
    Omit<
      FieldProps,
      "label" | "description" | "labelPosition" | "errorMessage"
    > {}

function Switch({ className, children, ...props }: SwitchProps) {
  let { labelPosition, size, variant } = useFieldProps(props)

  return (
    <RACSwitch
      {...props}
      className={cxRenderProps(className, styles.switch({ size }))}
    >
      {() => (
        <FieldContext.Provider value={{ size, variant, labelPosition }}>
          <>
            <div className={styles.track({ variant, size })}>
              <span className={styles.handle({ size })} />
            </div>
            {children}
          </>
        </FieldContext.Provider>
      )}
    </RACSwitch>
  )
}

export { Switch, type SwitchProps }
