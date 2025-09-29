"use client"

import { cxRenderProps } from "@/lib/style"
import {
  DropZone as RACDropZone,
  DropZoneProps as RACDropZoneProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"

const style = tv({
  base: [
    "bg-neutral-bg-subtle border-neutral-line text-neutral-text relative flex items-center justify-center rounded-lg border border-dashed p-4",
    "data-drop-target:bg-accent-bg-hover data-drop-target:border-accent-border data-drop-target:border-solid data-drop-target:text-accent-text",
  ],
})

function DropZone(props: RACDropZoneProps) {
  return (
    <RACDropZone
      {...props}
      className={cxRenderProps(props.className, style())}
    />
  )
}

export { DropZone }
