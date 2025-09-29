"use client";

import { tv, type VariantProps } from "tailwind-variants";
import { Theme, useThemeProps } from "@/lib/theme";

const style = tv({
  slots: {
    list: "place-content-start items-center",
    item: "",
    label: "font-medium text-neutral-text",
    value: "overflow-ellipsis text-neutral-text-contrast",
  },
  variants: {
    size: {
      1: { list: "gap-x-3 gap-y-2 text-xs leading-4" },
      2: { list: "gap-x-4 gap-y-2 text-[13px] leading-5" },
      3: { list: "gap-x-5 gap-y-2 text-sm leading-6" },
      4: { list: "gap-x-6 gap-y-2 text-base leading-7" },
    },
    labelPosition: {
      side: {
        list: "grid auto-rows-fr grid-cols-[max-content_auto]",
        item: "col-span-2 grid grid-cols-subgrid items-center",
      },
      top: {
        list: "flex flex-col items-stretch gap-y-3",
        item: "flex flex-col gap-y-1",
      },
    },
  },
});

interface DataListProps
  extends React.HTMLAttributes<HTMLDListElement>,
    VariantProps<typeof style> {}

function DataList({
  className,
  children,
  labelPosition,
  size,
  ...props
}: DataListProps) {
  let themeProps = useThemeProps({
    labelPosition,
    size,
  });

  let { list } = style({
    labelPosition: themeProps.labelPosition,
    size: themeProps.size,
  });

  return (
    <dl {...props} className={list({ className })}>
      <Theme {...themeProps}>{children}</Theme>
    </dl>
  );
}

interface DataListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  label: React.ReactNode;
  value: React.ReactNode;
}

function DataListItem({
  className,
  label,
  value,
  ...props
}: DataListItemProps) {
  let { labelPosition } = useThemeProps();
  let {
    item: itemStyle,
    label: labelStyle,
    value: valueStyle,
  } = style({ labelPosition });

  return (
    <div className={itemStyle({ className })} {...props}>
      <dt className={labelStyle()}>{label}</dt>
      <dd className={valueStyle()}>{value}</dd>
    </div>
  );
}

export { DataList, DataListItem };
export type { DataListItemProps, DataListProps };
