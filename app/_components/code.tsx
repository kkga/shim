import clsx from "clsx"
import { ComponentPropsWithoutRef } from "react"
import { highlight as sugar } from "sugar-high"

export function Code({
  className,
  highlight = false,
  ...props
}: ComponentPropsWithoutRef<"code"> & {
  highlight?: boolean
}) {
  let code = String(props.children).trim()
  let html = highlight ? sugar(code) : code

  return (
    <code
      className={clsx(
        "text-accent-text font-book min-w-min font-mono",
        className,
      )}
      dangerouslySetInnerHTML={highlight ? { __html: html } : undefined}
    >
      {!highlight ? html : null}
    </code>
  )
}
