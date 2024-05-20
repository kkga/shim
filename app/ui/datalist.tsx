"use client"

import type { VariantProps } from "cva"

import { cva, cx } from "@lib/style"

const styles = {
  list: cva({
    base: "grid items-center place-content-start",
    variants: {
      orientation: {
        horizontal: "grid-cols-[max-content_auto] gap-y-2 gap-x-6",
        vertical: "grid-cols-1 gap-y-1",
        grid: "grid grid-flow-col grid-rows-2 gap-x-6 gap-y-1",
      },
      size: {
        1: "text-xs",
        2: "text-[13ox]",
        3: "text-sm",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
      size: 1,
    },
  }),
  // TODO: make this work for grid orientation
  item: cva({
    base: "grid grid-cols-subgrid grid-rows-subgrid",
    variants: {
      orientation: {
        horizontal: "col-span-2",
        vertical: "grid-cols-1 gap-y-1",
        grid: "row-span-2",
      },
    },
  }),
  label: cva({
    base: "font-medium text-neutral-text",
  }),
  value: cva({
    base: "text-neutral-text-contrast",
  }),
}

interface DataListProps
  extends React.HTMLAttributes<HTMLDListElement>,
    VariantProps<typeof styles.list> {}

function DataList({ className, size, orientation, ...props }: DataListProps) {
  return (
    <dl
      className={cx(styles.list({ size, orientation }), className)}
      {...props}
    />
  )
}

interface DataListItemProps extends React.HTMLAttributes<HTMLDivElement> {}

function DataListItem({ className, ...props }: DataListItemProps) {
  return <div className={styles.item({ className })} {...props} />
}

interface DataListLabelProps extends React.HTMLAttributes<HTMLDivElement> {}

function DataListLabel({ className, ...props }: DataListLabelProps) {
  return <dt className={styles.label({ className })} {...props} />
}

interface DataListValueProps extends React.HTMLAttributes<HTMLDivElement> {}

function DataListValue({ className, ...props }: DataListValueProps) {
  return <dd className={styles.value({ className })} {...props} />
}

export { DataList, DataListItem, DataListLabel, DataListValue }
