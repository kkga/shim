"use client"

import { VariantProps, cva } from "@lib/style"
import { Keyboard as RACKeyboard } from "react-aria-components"

const style = cva({
  base: "inline-flex w-fit items-center bg-panel font-book text-neutral-text leading-none font-sans",
  variants: {
    variant: {
      plain: "bg-transparent",
      surface: "bg-neutral-bg-subtle shadow-[var(--shadow-xs)]",
    },
    size: {
      1: "h-4 px-[3px] gap-1 rounded-sm text-[11px]",
      2: "h-5 px-1 gap-1 rounded text-xs",
      3: "h-6 px-1.5 gap-1.5 rounded-md text-[13px]",
    },
  },
  defaultVariants: {
    size: 1,
    variant: "surface",
  },
})

interface KbdProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof style> {}

function Kbd({ className, size, variant, ...props }: KbdProps) {
  return (
    <RACKeyboard className={style({ size, variant, className })} {...props} />
  )
}

export { Kbd, type KbdProps }
