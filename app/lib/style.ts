"use client"
import { defineConfig } from "cva"
import { composeRenderProps } from "react-aria-components"
import { twMerge } from "tailwind-merge"

export const { compose, cx, cva } = defineConfig({
  hooks: { onComplete: (className) => twMerge(className) },
})

export const cxRenderProps = <T>(
  className: string | ((v: T) => string) | undefined,
  ...tw: string[]
): string | ((v: T) => string) =>
  composeRenderProps(className, (className) => cx(tw, className))

export const Intents = [
  "neutral",
  "accent",
  "success",
  "warning",
  "error",
] as const

export type Intent = (typeof Intents)[number]

export const animateMountStyle = cva({
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

export const animateUnmountStyle = cva({
  variants: {
    placement: {
      center: "origin-center animate-[fade-out_150ms,slide-to-bottom_150ms]",
      bottom: "origin-top animate-[fade-out_150ms,slide-to-bottom_150ms]",
      top: "origin-bottom animate-[fade-out_150ms,slide-to-top_150ms]",
      right: "origin-left animate-[fade-out_150ms,slide-to-right_150ms]",
      left: "origin-right animate-[fade-out_150ms,slide-to-left_150ms]",
    },
  },
})

export const focusStyle = cva({
  base: [
    "outline-offset-1 outline-accent-focus-ring outline-0",
    "data-[focus-visible]:outline-2 group-data-[focus-visible]:outline-2",
  ],
})
