"use client"

import { clsx, type ClassValue } from "clsx"
import { composeRenderProps } from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { tv } from "tailwind-variants"

export function cx(...args: ClassValue[]) {
  return twMerge(clsx(args))
}

export function cxRenderProps<T>(
  className: string | ((v: T) => string) | undefined,
  ...tw: string[]
): string | ((v: T) => string) {
  return composeRenderProps(className, (className) => twMerge(tw, className))
}

export const INTENTS = [
  "neutral",
  "accent",
  "success",
  "warning",
  "error",
] as const

export type Intent = (typeof INTENTS)[number]

// TODO: cleanup this
export const animateMountStyle = tv({
  base: [
    "data-[placement=bottom]:origin-top data-[placement=bottom]:animate-[fade-in_100ms,slide-from-bottom_100ms]",
    "data-[placement=top]:origin-bottom data-[placement=top]:animate-[fade-in_100ms,slide-from-top_100ms]",
    "data-[placement=right]:origin-left data-[placement=right]:animate-[fade-in_100ms,slide-from-right_100ms]",
    "data-[placement=left]:origin-right data-[placement=left]:animate-[fade-in_100ms,slide-from-left_100ms]",
  ],
  variants: {
    placement: {
      center: "origin-center animate-[fade-in_100ms,slide-from-bottom_100ms]",
      bottom: "origin-top animate-[fade-in_100ms,slide-from-bottom_100ms]",
      top: "origin-bottom animate-[fade-in_100ms,slide-from-top_100ms]",
      right: "origin-left animate-[fade-in_100ms,slide-from-right_100ms]",
      left: "origin-right animate-[fade-in_100ms,slide-from-left_100ms]",
    },
  },
})

export const animateUnmountStyle = tv({
  variants: {
    placement: {
      center:
        "data-exiting:animate-[fade-out_150ms,slide-to-bottom_150ms] origin-center",
      bottom:
        "data-exiting:animate-[fade-out_150ms,slide-to-bottom_150ms] origin-top",
      top: "data-exiting:animate-[fade-out_150ms,slide-to-top_150ms] origin-bottom",
      right:
        "data-exiting:animate-[fade-out_150ms,slide-to-right_150ms] origin-left",
      left: "data-exiting:animate-[fade-out_150ms,slide-to-left_150ms] origin-right",
    },
  },
})

export const focusStyle = tv({
  base: [
    "outline-accent-focus-ring outline-0 outline-offset-1",
    "data-[focus-visible]:outline-2 group-data-[focus-visible]:outline-2",
  ],
})
