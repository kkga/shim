'use client'

import {
  Dialog as RACDialog,
  DialogTrigger as RACDialogTrigger,
  Popover as RACPopover,
  type PopoverProps as RACPopoverProps,
} from 'react-aria-components'

import { animateMountStyle, compose, cva, cxRenderProps } from '@lib/utils'

const popoverStyle = compose(
  animateMountStyle,
  cva({
    base: 'z-50 rounded-lg bg-neutral-bg-subtle p-4 text-neutral-text text-sm ring shadow-lg ring-neutral-solid/15 outline-none overflow-auto',
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
    className={cxRenderProps(className, popoverStyle())}
    {...props}
  >
    <RACDialog className="overflow-auto outline-none">{children}</RACDialog>
  </RACPopover>
)

const PopoverTrigger = RACDialogTrigger

export { Popover, PopoverTrigger, popoverStyle, type PopoverProps }
