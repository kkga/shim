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

export const animateMountStyle = cva({
  base: [
    "data-[exiting]:animate-[fade-out_100ms]",
    "data-[placement=bottom]:animate-[fade-in_100ms,slide-from-bottom_100ms]",
    "data-[placement=top]:animate-[fade-in_100ms,slide-from-top_100ms]",
    "data-[placement=right]:animate-[fade-in_100ms,slide-from-right_100ms]",
    "data-[placement=left]:animate-[fade-in_100ms,slide-from-left_100ms]",
  ],
})

export const focusStyle = cva({
  base: [
    "outline-offset-1 outline-accent-focus-ring outline-0",
    "data-[focus-visible]:outline-2 group-data-[focus-visible]:outline-2",
  ],
})
