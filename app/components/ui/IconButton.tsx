import { compose, cva, cxRenderProps, focusVisibleStyle } from '@lib/utils'

import type { VariantProps } from 'cva'
import {
  Button as RACButton,
  type ButtonProps as RACButtonProps,
} from 'react-aria-components'

import { buttonStyle } from './button'

const iconButtonStyles = compose(
  focusVisibleStyle,
  buttonStyle,
  cva({
    variants: {
      size: {
        1: 'p-0 size-6',
        2: 'p-0 size-8',
      },
    },
    defaultVariants: {
      size: 1,
    },
  })
)

interface IconButtonProps
  extends RACButtonProps,
    VariantProps<typeof iconButtonStyles> {}

const IconButton = ({
  className,
  variant,
  intent,
  size,
  ...props
}: IconButtonProps) => (
  <RACButton
    {...props}
    className={cxRenderProps(
      className,
      iconButtonStyles({ variant, intent, size })
    )}
  />
)

export { IconButton, type IconButtonProps }
