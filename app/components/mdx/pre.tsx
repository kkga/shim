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
        <div className="invisible group-hover:visible sticky ml-auto size-5 flex justify-center items-center top-0 right-0">
          <CopyButton text={raw} title="Copy to clipboard" />
        </div>
      )}
    </pre>
  )
}
