"use client"

import { VariantProps, cva } from "@lib/style"
import { Theme, useThemeProps } from "@lib/theme"

const styles = {
  list: cva({
    base: "items-center place-content-start",
    variants: {
      labelPosition: {
        side: "grid grid-cols-[max-content_auto] gap-y-2 gap-x-3 auto-rows-fr",
        top: "flex flex-col items-stretch gap-y-3",
      },
      size: {
        1: "text-xs",
        2: "text-[13px] gap-x-4 gap-y-3",
        3: "text-sm gap-x-6 gap-y-3",
      },
    },
  }),
  item: cva({
    base: "",
    variants: {
      labelPosition: {
        side: "grid grid-cols-subgrid col-span-2 items-center",
        top: "flex flex-col gap-y-1",
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

function DataList({
  className,
  size,
  labelPosition,
  children,
  ...props
}: DataListProps) {
  let themeProps = useThemeProps({ size, labelPosition })

  return (
    <dl
      className={styles.list({
        size: themeProps.size,
        labelPosition: themeProps.labelPosition,
        className,
      })}
      {...props}
    >
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
  let { labelPosition } = useThemeProps({})

  return (
    <div className={styles.item({ className, labelPosition })} {...props}>
      <dt className={styles.label()}>{label}</dt>
      <dd className={styles.value()}>{value}</dd>
    </div>
  )
}

export { DataList, DataListItem }
export type { DataListItemProps, DataListProps }
