'use client'

import type { VariantProps } from 'cva'
import {
  ToggleButton as RACToggleButton,
  type ToggleButtonProps as RACToggleButtonProps,
} from 'react-aria-components'

import { compose, cva, cxRenderProps, focusVisibleStyle } from '@lib/utils'

const styles = compose(
  focusVisibleStyle,
  cva({
    base: [
      'text-xs font-medium inline-flex items-center justify-center',
      // selected
      'data-[selected]:text-white',
      // disabled
      'data-[disabled]:text-neutral-placeholder data-[disabled]:pointer-events-none data-[disabled]:bg-neutral-bg-subtle',
    ],
    variants: {
      variant: {
        soft: '',
        ghost: 'bg-transparent',
      },
      intent: {
        neutral:
          'bg-neutral-bg hover:bg-neutral-bg-hover active:bg-neutral-bg-active text-neutral-text data-[selected]:bg-neutral-solid',
        accent:
          'bg-accent-bg hover:bg-accent-bg-hover active:bg-accent-bg-active text-accent-text data-[selected]:bg-accent-solid',
        success:
          'bg-success-bg hover:bg-success-bg-hover active:bg-success-bg-active text-success-text data-[selected]:bg-success-solid',
        warning:
          'bg-warning-bg hover:bg-warning-bg-hover active:bg-warning-bg-active text-warning-text data-[selected]:bg-warning-solid',
        error:
          'bg-error-bg hover:bg-error-bg-hover active:bg-error-bg-active text-error-text data-[selected]:bg-error-solid',
      },
      size: {
        1: 'size-6 rounded-md',
        2: 'size-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'soft',
      intent: 'accent',
      size: 1,
    },
  }),
)

interface ToggleButtonProps
  extends RACToggleButtonProps,
    VariantProps<typeof styles> {}

const ToggleButton = ({
  className,
  variant,
  intent,
  size,
  ...props
}: ToggleButtonProps) => (
  <RACToggleButton
    {...props}
    className={cxRenderProps(
      className,
      styles({
        variant,
        size,
        intent,
      }),
    )}
  />
)

export { ToggleButton, type ToggleButtonProps }
