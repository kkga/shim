"use client"

import {
  Separator as RACSeparator,
  SeparatorProps as RACSeparatorProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"

const styles = tv({
  base: "bg-neutral-line shrink-0 self-stretch border-none",
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "w-px",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
})

function Separator(props: RACSeparatorProps) {
  return (
    <RACSeparator
      {...props}
      className={styles({
        orientation: props.orientation,
        className: props.className,
      })}
    />
  )
}

type SeparatorProps = RACSeparatorProps

export { Separator }
export type { SeparatorProps }
