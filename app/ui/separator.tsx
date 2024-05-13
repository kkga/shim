"use client"
import { cva } from "@lib/utils"
import {
  Separator as RACSeparator,
  SeparatorProps,
} from "react-aria-components"

const styles = cva({
  base: "bg-neutral-line self-stretch shrink-0 border-none",
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
