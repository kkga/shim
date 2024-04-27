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
}

function Demo({
  demo,
  code,
  className,
  collapsible,
  collapsed: defaultCollapsed,
}: Props) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed)

  return (
    <div className="flex flex-col rounded-lg border border-neutral-line">
      <div className={cx('p-4 flex flex-row gap-4', className)}>{demo}</div>

      {code && (
        <div className="flex flex-col border-t border-neutral-line">
          {collapsible && (
            <Button
              className={cx(
                'h-7 text-xs text-neutral-text outline-0 focus-visible:outline-1 -outline-offset-1 outline-accent-focus-ring flex justify-start items-center px-2 gap-1 bg-accent-bg-subtle hover:bg-accent-bg-hover active:bg-accent-bg-active',
                collapsed ? 'rounded-b-[3px]' : 'rounded-none'
              )}
              onPress={() => setCollapsed(!collapsed)}
            >
              {!collapsed ? (
                <CaretDown weight="bold" size={12} />
              ) : (
                <CaretRight weight="bold" size={12} />
              )}
              Code
            </Button>
          )}

          {code && !collapsed && (
            <Pre className="rounded-none! border-none! m-0!" raw={code}>
              <Code>{code}</Code>
            </Pre>
          )}
        </div>
      )}
    </div>
  )
}

export { Demo }
