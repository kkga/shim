"use client"

import { Theme, useThemeProps } from "@lib/theme"
import { tv, VariantProps } from "tailwind-variants"

const style = tv({
  slots: {
    list: "items-center place-content-start",
    item: "",
    label: "font-medium text-neutral-text",
    value: "text-neutral-text-contrast",
  },
  variants: {
    size: {
      1: { list: "text-xs" },
      2: { list: "text-[13px] gap-x-4 gap-y-3" },
      3: { list: "text-sm gap-x-6 gap-y-3" },
    },
    labelPosition: {
      side: {
        list: "grid grid-cols-[max-content_auto] gap-y-2 gap-x-3 auto-rows-fr",
        item: "grid grid-cols-subgrid col-span-2 items-center",
      },
      top: {
        list: "flex flex-col items-stretch gap-y-3",
        item: "flex flex-col gap-y-1",
      },
    },
  },
})

interface DataListProps
  extends React.HTMLAttributes<HTMLDListElement>,
    VariantProps<typeof style> {}

function DataList({ className, children, ...props }: DataListProps) {
  let themeProps = useThemeProps({ ...props })
  let { labelPosition, size } = themeProps
  let { list } = style({ labelPosition, size })

  return (
    <dl {...props} className={list({ className })}>
      <Theme {...themeProps}>{children}</Theme>
    </dl>
  )
}

interface DataListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  label: React.ReactNode
  value: React.ReactNode
}

function DataListItem({
  className,
  label,
  value,
  ...props
}: DataListItemProps) {
  let { labelPosition } = useThemeProps()
  let {
    item: itemStyle,
    label: labelStyle,
    value: valueStyle,
  } = style({ labelPosition })

  return (
    <div className={itemStyle({ className })} {...props}>
      <dt className={labelStyle()}>{label}</dt>
      <dd className={valueStyle()}>{value}</dd>
    </div>
  )
}

export { DataList, DataListItem }
export type { DataListItemProps, DataListProps }
