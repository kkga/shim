"use client"

import type { VariantProps } from "cva"

import { cva, cx } from "@lib/style"

const styles = {
  list: cva({
    base: "grid gap-y-2 gap-x-4 items-center place-content-start",
    variants: {
      orientation: {
        horizontal: "grid-cols-[auto_1fr]",
        vertical: "grid-cols-1",
      },
      size: {
        1: "gap-2 text-xs",
        2: "gap-2 text-[13ox]",
        3: "gap-2 text-sm",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
      size: 1,
    },
  }),
  label: cva({
    base: "font-medium text-neutral-text",
  }),
  value: cva({
    base: "text-neutral-text-contrast",
  }),
}

interface DescriptionListProps
  extends React.HTMLAttributes<HTMLDListElement>,
    VariantProps<typeof styles.list> {}

function DescriptionList({ className, size, ...props }: DescriptionListProps) {
  return (
    <dl
      className={cx(
        styles.list({
          size,
        }),
        className,
      )}
      {...props}
    />
  )
}

interface DescriptionListLabelProps
  extends React.HTMLAttributes<HTMLDivElement> {}

function DescriptionListLabel({
  className,
  ...props
}: DescriptionListLabelProps) {
  return <dt className={styles.label({ className })} {...props} />
}

interface DescriptionListValueProps
  extends React.HTMLAttributes<HTMLDivElement> {}

function DescriptionListValue({
  className,
  ...props
}: DescriptionListValueProps) {
  return <dd className={styles.value({ className })} {...props} />
}

export { DescriptionList, DescriptionListLabel, DescriptionListValue }
