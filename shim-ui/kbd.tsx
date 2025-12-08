"use client";

import { Keyboard as RacKeyboard } from "react-aria-components";
import { type ClassValue, tv, type VariantProps } from "tailwind-variants";
import type { Size } from "@/shim-ui/lib/theme";

const style = tv({
  base: "inline-flex w-fit items-center bg-panel font-book font-sans text-neutral-text leading-none",
  variants: {
    variant: {
      plain: "bg-transparent",
      surface: "bg-neutral-panel shadow-(--shadow-xs)",
    } satisfies Record<"plain" | "surface", ClassValue>,
    size: {
      1: "h-4 gap-1 rounded-sm px-[3px] text-[11px]",
      2: "h-5 gap-1 rounded px-1 text-xs",
      3: "h-6 gap-1.5 rounded-md px-1.5 text-[13px]",
      4: "h-7 gap-2 rounded-lg px-2 text-sm",
    } satisfies Record<Size, ClassValue>,
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
