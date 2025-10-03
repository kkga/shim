"use client";

import { CaretRightIcon } from "@phosphor-icons/react";
import {
  type BreadcrumbProps,
  type BreadcrumbsProps,
  Breadcrumb as RacBreadcrumb,
  Breadcrumbs as RacBreadcrumbs,
} from "react-aria-components";
import { cx, cxRenderProps } from "@/shim-ui/lib/style";
import { Link, type LinkProps } from "@/shim-ui/link";

function Breadcrumbs<T extends object>({
  className,
  ...props
}: BreadcrumbsProps<T>) {
  return <RacBreadcrumbs {...props} className={cx("flex gap-1", className)} />;
}

// TODO: add support for render props
function Breadcrumb({
  className,
  href,
  ...props
}: BreadcrumbProps & Omit<LinkProps, "className">) {
  return (
    <RacBreadcrumb
      {...props}
      className={cxRenderProps(className, "flex items-center gap-1")}
    >
      <Link href={href} intent="neutral" {...props} />
      {href && (
        <CaretRightIcon className="text-neutral-text-subtle" size={12} />
      )}
    </RacBreadcrumb>
  );
}

export { Breadcrumb, Breadcrumbs };
