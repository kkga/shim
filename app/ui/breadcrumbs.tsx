"use client"

import { cx } from "@lib/utils"
import { CaretRight } from "@phosphor-icons/react"
import { Link, LinkProps } from "@ui/link"
import {
  BreadcrumbProps,
  BreadcrumbsProps,
  Breadcrumb as RACBreadcrumb,
  Breadcrumbs as RACBreadcrumbs,
} from "react-aria-components"

function Breadcrumbs<T extends object>(props: BreadcrumbsProps<T>) {
  return (
    <RACBreadcrumbs {...props} className={cx("flex gap-1", props.className)} />
  )
}

function Breadcrumb(props: BreadcrumbProps & LinkProps) {
  return (
    <RACBreadcrumb
      {...props}
      className={cx("flex items-center gap-1", props.className)}
    >
      <Link intent="neutral" {...props} />
      {props.href && (
        <CaretRight size={12} className="text-neutral-placeholder" />
      )}
    </RACBreadcrumb>
  )
}

export { Breadcrumb, Breadcrumbs }
