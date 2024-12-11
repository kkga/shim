"use client"

import {
  Separator as RACSeparator,
  SeparatorProps,
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

function Separator(props: SeparatorProps) {
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

export { Separator }
