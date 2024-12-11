"use client"

import { clsx, type ClassValue } from "clsx"
import { composeRenderProps } from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { tv } from "tailwind-variants"

/**
 * A helper function that combines Tailwind classes and applies tailwind-merge.
 */
export function cx(...args: ClassValue[]) {
  return twMerge(clsx(args))
}

/**
 * A helper function that combines className render props with Tailwind classes.
 * @example <Button className={cxRenderProps(props.className, "w-20") />
 */
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

export const focusStyle = tv({
  base: [
    "outline-accent-focus-ring outline-0 outline-offset-1",
    "data-[focus-visible]:outline-2 group-data-[focus-visible]:outline-2",
  ],
})
