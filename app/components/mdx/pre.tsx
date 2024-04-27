'use client'

import { cx } from '@/lib/utils'
import { CopyButton } from './copy-button'

export function Pre({ raw, children, className, ...props }) {
  return (
    <pre className={cx('relative', className)} {...props}>
      {children}

      {raw && (
        <CopyButton
          className="absolute top-2.5 right-2.5"
          text={raw}
          title="Copy to clipboard"
        />
      )}
    </pre>
  )
}
