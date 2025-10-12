"use client";

import { Keyboard as RacKeyboard } from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";

const style = tv({
  base: "inline-flex w-fit items-center bg-panel font-book font-sans text-neutral-text leading-none",
  variants: {
    variant: {
      plain: "bg-transparent",
      surface: "bg-neutral-panel shadow-[var(--shadow-xs)]",
    },
    size: {
      1: "h-4 gap-1 rounded-sm px-[3px] text-[11px]",
      2: "h-5 gap-1 rounded px-1 text-xs",
      3: "h-6 gap-1.5 rounded-md px-1.5 text-[13px]",
    },
  },
  defaultVariants: {
    size: 1,
    variant: "surface",
  },
});

interface KbdProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof style> {}

function Kbd({ className, size, variant, ...props }: KbdProps) {
  return (
    <RacKeyboard className={style({ size, variant, className })} {...props} />
  );
}

export { Kbd, type KbdProps };
