"use client"

import { cxRenderProps, focusStyle } from "@lib/style"
import { Theme, useThemeProps } from "@lib/theme"
import {
  Switch as RACSwitch,
  type SwitchProps as RACSwitchProps,
} from "react-aria-components"
import { tv, VariantProps } from "tailwind-variants"
import { FieldProps } from "./Field"

const styles = {
  switch: tv({
    base: [
      "text-neutral-text group flex items-center font-medium outline-none",
      "data-disabled:cursor-not-allowed data-disabled:text-neutral-placeholder group-data-disabled:text-neutral-placeholder",
    ],
    variants: {
      size: {
        1: "h-6 gap-1.5 text-xs",
        2: "h-7 gap-1.5 text-[13px]",
        3: "h-8 gap-2 text-sm",
      },
      labelPosition: {
        start: "flex-row-reverse justify-between",
        end: "",
      },
    },
    defaultVariants: {
      size: 1,
      labelPosition: "end",
    },
  }),

  track: tv({
    extend: focusStyle,
    base: [
      "flex shrink-0 items-center rounded-full px-px outline-offset-1 transition-colors",
    ],
    variants: {
      variant: {
        classic: [
          "bg-neutral-bg-subtle shadow-[var(--shadow-inner)]",
          // pressed
          "group-data-pressed:bg-neutral-bg-active",
          // selected
          "group-data-selected:bg-accent-solid",
          // disabled
          "group-data-disabled:bg-neutral-bg-subtle group-data-disabled:inset-ring group-data-disabled:inset-ring-neutral-5 group-data-disabled:shadow-none",
        ],
        soft: [
          "bg-neutral-bg-hover inset-ring-1 inset-ring-neutral-3",
          // pressed
          "group-data-pressed:bg-neutral-bg-active",
          // selected
          "group-data-selected:bg-accent-bg-active",
          // disabled
          "group-data-disabled:bg-neutral-bg-subtle group-data-disabled:inset-ring-neutral-line",
        ],
        outline: [
          "inset-ring-1 inset-ring-neutral-border bg-transparent",
          // pressed
          "group-data-pressed:bg-neutral-bg-active",
          // selected
          "group-data-selected:inset-ring-neutral-border-hover",
          // disabled
          "group-data-disabled:bg-neutral-bg-subtle group-data-disabled:inset-ring-neutral-line",
        ],
      },
      size: {
        1: "h-4 w-[28px]",
        2: "h-[18px] w-[32px]",
        3: "h-5 w-[36px]",
      },
    },
    defaultVariants: {
      variant: "classic",
      size: 1,
    },
  }),

  handle: tv({
    base: [
      "translateX-0 size-3.5 transform rounded-full transition-transform",
      // disabled
      "group-data-disabled:bg-neutral-bg-subtle",
    ],
    variants: {
      variant: {
        classic: "bg-white shadow-[var(--shadow-xs)]",
        soft: "bg-neutral-solid group-data-selected:bg-accent-text border border-transparent bg-clip-content",
        outline:
          "bg-neutral-bg inset-ring inset-ring-neutral-border group-data-selected:inset-ring-accent-border-hover group-data-selected:bg-accent-bg-active border border-transparent bg-clip-content",
      },
      size: {
        1: ["size-3.5", "group-data-selected:translate-x-[12px]"],
        2: ["size-4", "group-data-selected:translate-x-[14px]"],
        3: ["size-[18px]", "group-data-selected:translate-x-[16px]"],
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
    >,
    VariantProps<typeof styles.switch> {}

function Switch({ className, children, labelPosition, ...props }: SwitchProps) {
  let themeProps = useThemeProps({
    size: props.size,
    fieldVariant: props.variant,
  })
  let { size, fieldVariant: variant } = themeProps

  return (
    <RACSwitch
      {...props}
      className={cxRenderProps(
        className,
        styles.switch({ size, labelPosition }),
      )}
    >
      <Theme>
        <div className={styles.track({ variant, size })}>
          <span className={styles.handle({ variant, size })} />
        </div>
        {children as React.ReactNode}
      </Theme>
    </RACSwitch>
  )
}

export { Switch, type SwitchProps }
