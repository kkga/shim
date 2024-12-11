"use client"

import { cx, cxRenderProps } from "@lib/style"
import { Size, Theme, useThemeProps } from "@lib/theme"
import type {
  ListBoxItemProps as RACListBoxItemProps,
  ListBoxProps as RACListBoxProps,
  SectionProps as RACSectionProps,
} from "react-aria-components"
import {
  composeRenderProps,
  Collection as RACCollection,
  Header as RACHeader,
  ListBox as RACListBox,
  ListBoxItem as RACListBoxItem,
  ListBoxSection as RACListBoxSection,
} from "react-aria-components"

import { tv, VariantProps } from "tailwind-variants"

interface ListBoxProps<T> extends RACListBoxProps<T> {
  size?: Size
}

function ListBox<T extends object>({ size, ...props }: ListBoxProps<T>) {
  let themeProps = useThemeProps({ size })
  return (
    <Theme {...themeProps}>
      <RACListBox
        {...props}
        className={cxRenderProps(props.className, "flex flex-col gap-px")}
      />
    </Theme>
  )
}

const itemStyle = tv({
  base: [
    "font-book relative flex shrink-0 items-center truncate rounded outline-0",
    "data-disabled:text-neutral-placeholder",
  ],
  variants: {
    size: {
      1: "h-6 gap-2 rounded px-1.5 text-xs",
      2: "h-7 gap-2.5 rounded px-2 text-[13px]",
      3: "h-8 gap-2.5 rounded-md px-2.5 text-sm",
    },
    intent: {
      neutral:
        "text-neutral-text data-hovered:bg-neutral-bg-hover data-focus-visible:bg-neutral-bg-hover data-open:bg-neutral-bg-hover data-pressed:bg-neutral-bg-active data-selected:text-neutral-text-contrast data-selected:bg-neutral-bg-active",
      accent:
        "text-accent-text data-hovered:bg-accent-bg-hover data-focus-visible:bg-accent-bg-hover data-open:bg-accent-bg-hover data-pressed:bg-accent-bg-active data-selected:text-accent-text-contrast data-selected:bg-accent-bg-active",
      success:
        "text-success-text data-hovered:bg-success-bg-hover data-focus-visible:bg-success-bg-hover data-open:bg-success-bg-hover data-pressed:bg-success-bg-active data-selected:text-success-text-contrast data-selected:bg-success-bg-active",
      warning:
        "text-warning-text data-hovered:bg-warning-bg-hover data-focus-visible:bg-warning-bg-hover data-open:bg-warning-bg-hover data-pressed:bg-warning-bg-active data-selected:text-warning-text-contrast data-selected:bg-warning-bg-active",
      error:
        "text-error-text data-hovered:bg-error-bg-hover data-focus-visible:bg-error-bg-hover data-open:bg-error-bg-hover data-pressed:bg-error-bg-active data-selected:text-error-text-contrast data-selected:bg-error-bg-active",
    },
  },
  defaultVariants: {
    intent: "neutral",
    size: 1,
  },
})

interface ListBoxItemProps
  extends RACListBoxItemProps,
    VariantProps<typeof itemStyle> {}

function ListBoxItem({ intent, className, href, ...props }: ListBoxItemProps) {
  let { size } = useThemeProps(props)
  let textValue =
    props.textValue ||
    (typeof props.children === "string" ? props.children : undefined)

  return (
    <RACListBoxItem
      {...props}
      href={href}
      textValue={textValue}
      className={cxRenderProps(
        className,
        itemStyle({
          intent,
          size,
          className: href ? "cursor-pointer" : "cursor-default",
        }),
      )}
    >
      {composeRenderProps(props.children, (children) => (
        <>{children}</>
      ))}
    </RACListBoxItem>
  )
}

const sectionHeaderStyle = tv({
  base: ["text-neutral-text-contrast flex items-center truncate font-medium"],
  variants: {
    size: {
      1: "h-6 px-1.5 text-xs",
      2: "h-7 px-2 text-[13px]",
      3: "h-8 px-2 text-sm",
    },
  },
})

interface ListBoxSectionProps<T>
  extends RACSectionProps<T>,
    VariantProps<typeof sectionHeaderStyle> {
  title?: string
}

function ListBoxSection<T extends object>({
  title,
  children,
  items,
  className,
  ...props
}: ListBoxSectionProps<T>) {
  let themeProps = useThemeProps(props)
  let { size } = themeProps

  return (
    <RACListBoxSection
      {...props}
      className={cx("not-last:mb-1 flex flex-col gap-px", className)}
    >
      {title && (
        <RACHeader className={sectionHeaderStyle({ size })}>{title}</RACHeader>
      )}
      <RACCollection items={items}>{children}</RACCollection>
    </RACListBoxSection>
  )
}

export { itemStyle, ListBox, ListBoxItem, ListBoxSection }
export type { ListBoxItemProps, ListBoxProps, ListBoxSectionProps }
