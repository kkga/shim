'use client'

import { cx } from '@/lib/utils'
import { CopyButton } from './copy-button'

export function Pre({ raw, children, className, ...props }) {
  return (
    <pre
      className={cx('group flex items-start overflow-scroll', className)}
      {...props}
    >
      {children}

      {raw && (
        <div className="invisible sticky top-0 right-0 ml-auto flex size-5 items-center justify-center group-hover:visible">
          <CopyButton text={raw} title="Copy to clipboard" />
        </div>
      )}
    </pre>
  )
}
