"use client"

import { cva } from "@lib/style"
import { Theme, useThemeProps } from "@lib/theme"
import type { VariantProps } from "cva"
import { createContext, useContext } from "react"

const styles = {
  list: cva({
    base: "items-center place-content-start",
    variants: {
      orientation: {
        horizontal:
          "grid grid-cols-[max-content_auto] gap-y-2 gap-x-3 auto-rows-fr",
        vertical: "flex flex-col items-stretch gap-y-3",
      },
      size: {
        1: "text-xs",
        2: "text-[13px] gap-x-4 gap-y-3",
        3: "text-sm gap-x-6 gap-y-3",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
      size: 1,
    },
  }),
  item: cva({
    base: "",
    variants: {
      orientation: {
        horizontal: "grid grid-cols-subgrid col-span-2 items-center",
        vertical: "flex flex-col gap-y-1",
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

type Orientation = "horizontal" | "vertical"
const OrientationContext = createContext<Orientation>("horizontal")

interface DataListProps
  extends React.HTMLAttributes<HTMLDListElement>,
    VariantProps<typeof styles.list> {}

function DataList({
  className,
  children,
  orientation = "horizontal",
  ...props
}: DataListProps) {
  let themeProps = useThemeProps({ size: props.size })
  let { size } = themeProps

  return (
    <dl className={styles.list({ size, orientation, className })} {...props}>
      <Theme {...themeProps}>
        <OrientationContext.Provider value={orientation}>
          {children}
        </OrientationContext.Provider>
      </Theme>
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
  let orientation = useContext(OrientationContext)
  return (
    <div className={styles.item({ className, orientation })} {...props}>
      <dt className={styles.label()}>{label}</dt>
      <dd className={styles.value()}>{value}</dd>
    </div>
  )
}

export { DataList, DataListItem }
export type { DataListItemProps, DataListProps }
