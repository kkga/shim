"use client"

import { cx, cxRenderProps } from "@lib/style"
import { CaretRight } from "@phosphor-icons/react"
import { Link, LinkProps } from "@ui/Link"
import {
  BreadcrumbProps,
  BreadcrumbsProps,
  Breadcrumb as RACBreadcrumb,
  Breadcrumbs as RACBreadcrumbs,
} from "react-aria-components"

function Breadcrumbs<T extends object>({
  className,
  ...props
}: BreadcrumbsProps<T>) {
  return <RACBreadcrumbs {...props} className={cx("flex gap-1", className)} />
}

// TODO: add support for render props
function Breadcrumb({
  className,
  href,
  ...props
}: BreadcrumbProps & LinkProps) {
  return (
    <RACBreadcrumb
      {...props}
      className={cxRenderProps(className, "flex items-center gap-1")}
    >
      <Link intent="neutral" href={href} {...props} />
      {href && <CaretRight size={12} className="text-neutral-placeholder" />}
    </RACBreadcrumb>
  )
}

export { Breadcrumb, Breadcrumbs }
