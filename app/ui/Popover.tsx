'use client'

import {
  Dialog as RACDialog,
  DialogTrigger as RACDialogTrigger,
  Popover as RACPopover,
  composeRenderProps,
  type PopoverProps as RACPopoverProps,
} from 'react-aria-components'

import { animateMountStyle, compose, cva } from '@lib/utils'

const PopoverTrigger = RACDialogTrigger

const styles = compose(
  animateMountStyle,
  cva({
    base: 'z-50 rounded-lg bg-neutral-bg-subtle p-4 text-neutral-text text-sm ring shadow-lg ring-neutral-solid/15 outline-none',
  }),
)

interface PopoverProps extends Omit<RACPopoverProps, 'children'> {
  children: React.ReactNode
}

const Popover = ({
  className,
  children,
  offset = 4,
  ...props
}: PopoverProps) => (
  <RACPopover
    offset={offset}
    className={composeRenderProps(className, (className, values) =>
      styles({ ...values, className }),
    )}
    {...props}
  >
    <RACDialog className="outline-none">{children}</RACDialog>
  </RACPopover>
)

export { Popover, PopoverTrigger, type PopoverProps }
