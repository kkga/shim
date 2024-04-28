import { defineConfig } from 'cva'
import { composeRenderProps } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'

export const { compose, cx, cva } = defineConfig({
  hooks: { onComplete: (className) => twMerge(className) },
})

export const cxRenderProps = <T>(
  className: string | ((v: T) => string) | undefined,
  ...tw: string[]
): string | ((v: T) => string) =>
  composeRenderProps(className, (className) => cx(tw, className))

export const Intents = [
  'neutral',
  'accent',
  'success',
  'warning',
  'error',
] as const

export type Intent = (typeof Intents)[number]

export const animateMountStyle = cva({
  base: [
    // placement bottom
    'data-[entering]:data-[placement=bottom]:animate-[fade-in_150ms,slide-from-bottom_150ms]',
    // placement top
    'data-[entering]:data-[placement=top]:animate-[fade-in_150ms,slide-from-top_150ms]',
    // placement right
    'data-[entering]:data-[placement=right]:animate-[fade-in_150ms,slide-from-right_150ms]',
    // placement left
    'data-[entering]:data-[placement=left]:animate-[fade-in_150ms,slide-from-left_150ms]',
  ],
})

export const focusVisibleStyle = cva({
  base: [
    'focus-visible:outline-2 outline-0 outline-offset-2 outline-accent-focus-ring',
  ],
  variants: {
    isFocusVisible: {
      true: 'outline-2',
      false: 'outline-0',
    },
  },
})
