'use client'

import { compose, cva, cxRenderProps, focusStyle } from '@lib/utils'
import type { VariantProps } from 'cva'
import {
  Switch as RACSwitch,
  type SwitchProps as RACSwitchProps,
} from 'react-aria-components'

const switchStyles = cva({
  base: [
    'group flex items-center gap-2 text-sm font-medium text-neutral-text flex',
  ],
  variants: {
    isDisabled: {
      true: 'text-neutral-placeholder pointer-events-none',
    },
  },
})

const trackStyles = compose(
  focusStyle,
  cva({
    base: [
      'flex h-4 w-7 px-px items-center shrink-0 cursor-default rounded-full transition-colors shadow-inner border',
    ],
    variants: {
      isSelected: {
        true: 'bg-accent-solid border-accent-solid-hover',
        false: 'bg-neutral-bg border-neutral-border',
      },
      isDisabled: {
        true: 'bg-neutral-bg-subtle outline-neutral-line shadow-none border-neutral-line',
      },
    },
  }),
)

const handleStyles = cva({
  base: [
    'size-3 transform transition-transform rounded-full bg-white shadow ring ring-black/5',
  ],
  variants: {
    isSelected: {
      true: 'translate-x-full',
      false: 'translate-x-0',
    },
    isDisabled: {
      true: 'shadow-none ring-0 bg-neutral-border',
    },
  },
})

interface SwitchProps
  extends RACSwitchProps,
    VariantProps<typeof switchStyles> {}

function Switch({ className, children, ...props }: SwitchProps) {
  return (
    <RACSwitch
      {...props}
      className={cxRenderProps(
        className,
        switchStyles({ isDisabled: props.isDisabled }),
      )}
    >
      {({ isSelected, isDisabled }) => (
        <>
          <div className={trackStyles({ isDisabled, isSelected })}>
            <span className={handleStyles({ isDisabled, isSelected })} />
          </div>
          {children}
        </>
      )}
    </RACSwitch>
  )
}

export { Switch, type SwitchProps }
