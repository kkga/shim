"use client";

import { CaretRightIcon } from "@phosphor-icons/react";
import {
  Breadcrumb as RacBreadcrumb,
  type BreadcrumbProps as RacBreadcrumbProps,
  Breadcrumbs as RacBreadcrumbs,
  type BreadcrumbsProps as RacBreadcrumbsProps,
} from "react-aria-components";
import { type ClassValue, cx, tv, type VariantProps } from "tailwind-variants";
import { cnRenderProps } from "@/shim-ui/lib/style";
import {
  ICON_SIZE_MAP,
  type Size,
  Theme,
  useThemeProps,
} from "@/shim-ui/lib/theme";
import { Link, type LinkProps } from "@/shim-ui/link";

const style = tv({
  slots: {
    breadcrumbs: "flex font-medium",
    breadcrumb: "flex items-center gap-[inherit]",
  },
  variants: {
    size: {
      1: {
        breadcrumbs: "gap-1 text-xs/normal",
      },
      2: {
        breadcrumbs: "gap-1 text-sm/normal",
      },
      3: {
        breadcrumbs: "gap-1 text-[15px]/normal",
      },
      4: {
        breadcrumbs: "gap-1.5 text-base/normal",
      },
    } satisfies Record<Size, Record<string, ClassValue>>,
  },
});

interface BreadcrumbsProps<T>
  extends RacBreadcrumbsProps<T>,
    VariantProps<typeof style> {}

function Breadcrumbs<T extends object>({
  className,
  size: _size,
  ...props
}: BreadcrumbsProps<T>) {
  const themeProps = useThemeProps({ size: _size });
  const { breadcrumbs } = style({ size: themeProps.size });

  return (
    <Theme {...themeProps}>
      <RacBreadcrumbs {...props} className={cx(breadcrumbs(), className)} />
    </Theme>
  );
}

function Breadcrumb({
  className,
  href,
  ...props
}: RacBreadcrumbProps & Omit<LinkProps, "className">) {
  const themeProps = useThemeProps({});
  const { size } = themeProps;
  const { breadcrumb } = style({});

  return (
    <RacBreadcrumb
      {...props}
      className={cnRenderProps(className, breadcrumb())}
    >
      {({ isCurrent }) => (
        <>
          <Link href={href} intent="neutral" {...props} />
          {isCurrent ? null : (
            <CaretRightIcon
              className="text-neutral-text-subtle"
              size={size > 2 ? ICON_SIZE_MAP[2] : ICON_SIZE_MAP[1]}
              weight="bold"
            />
          )}
        </>
      )}
    </RacBreadcrumb>
  );
}

export { Breadcrumb, Breadcrumbs };
