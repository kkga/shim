'use client'

import { cx } from '@/lib/utils'
import { CaretDown, CaretRight } from '@phosphor-icons/react/dist/ssr'
import { useState } from 'react'
import { Button } from 'react-aria-components'
import { Code } from './mdx-components'
import { Pre } from './pre'

interface Props {
  demo: React.ReactNode
  code?: string
  collapsible?: boolean
  collapsed?: boolean
  className?: string
  inline?: boolean
}

function Demo({
  demo,
  code,
  className,
  collapsible,
  collapsed: defaultCollapsed,
  inline = true,
}: Props) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed)

  return (
    <div
      className={cx(
        'flex rounded-lg border border-neutral-line',
        inline ? 'flex-col md:flex-row' : 'flex-col',
      )}
    >
      <div
        className={cx(
          'flex flex-1 flex-col items-start gap-4 overflow-auto p-4',
          className,
        )}
      >
        {demo}
      </div>

      {code && (
        <div
          className={cx(
            'flex flex-col overflow-auto border-neutral-line',
            inline ? 'flex-2 border-l' : 'border-t',
          )}
        >
          {collapsible && (
            <Button
              className={cx(
                'flex h-7 items-center justify-start gap-1 bg-accent-bg-subtle px-2 text-xs text-neutral-text outline-0 -outline-offset-1 outline-accent-focus-ring hover:bg-accent-bg-hover focus-visible:outline-1 active:bg-accent-bg-active',
                collapsed ? 'rounded-b-[3px]' : 'rounded-none',
              )}
              onPress={() => setCollapsed(!collapsed)}
            >
              {!collapsed ?
                <CaretDown weight="bold" size={12} />
              : <CaretRight weight="bold" size={12} />}
              Code
            </Button>
          )}

          {code && !collapsed && (
            <Pre className="m-0! rounded-none! border-none!" raw={code}>
              <Code>{code}</Code>
            </Pre>
          )}
        </div>
      )}
    </div>
  )
}

export { Demo }
