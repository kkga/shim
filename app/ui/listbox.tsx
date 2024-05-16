"use client"

import { cva, cx, cxRenderProps } from "@lib/style"
import { Size, Theme, useThemeProps } from "@lib/theme"
import { Check } from "@phosphor-icons/react"
import { VariantProps } from "cva"
import {
  Collection as RACCollection,
  Header as RACHeader,
  ListBox as RACListBox,
  ListBoxItem as RACListBoxItem,
  Section as RACSection,
  composeRenderProps,
  type ListBoxItemProps as RACListBoxItemProps,
  type ListBoxProps as RACListBoxProps,
  type SectionProps as RACSectionProps,
} from "react-aria-components"

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

const styles = {
  sectionHeader: cva({
    base: ["flex items-center truncate font-medium text-neutral-text-contrast"],
    variants: {
      size: {
        1: "h-6 px-1.5 text-xs",
        2: "h-7 px-2 text-[13px]",
        3: "h-8 px-2 text-sm",
      },
    },
  }),

  item: cva({
    base: [
      "relative flex items-center rounded text-neutral-text font-book cursor-default truncate shrink-0 outline-0",
      "data-disabled:text-neutral-placeholder",
    ],
    variants: {
      size: {
        1: "h-6 text-xs px-1.5 gap-1.5 rounded",
        2: "h-7 text-[13px] px-2 gap-2 rounded",
        3: "h-8 text-sm px-2.5 gap-2 rounded-md",
      },
      intent: {
        neutral:
          "text-neutral-text data-hovered:bg-neutral-bg-hover data-focus-visible:bg-neutral-bg-hover data-open:bg-neutral-bg-hover data-pressed:bg-neutral-bg-active data-selected:text-neutral-text-contrast",
        accent:
          "text-accent-text data-hovered:bg-accent-bg-hover data-focus-visible:bg-accent-bg-hover data-open:bg-accent-bg-hover data-pressed:bg-accent-bg-active data-selected:text-accent-text-contrast",
        success:
          "text-success-text data-hovered:bg-success-bg-hover data-focus-visible:bg-success-bg-hover data-open:bg-success-bg-hover data-pressed:bg-success-bg-active data-selected:text-success-text-contrast",
        warning:
          "text-warning-text data-hovered:bg-warning-bg-hover data-focus-visible:bg-warning-bg-hover data-open:bg-warning-bg-hover data-pressed:bg-warning-bg-active data-selected:text-warning-text-contrast",
        error:
          "text-error-text data-hovered:bg-error-bg-hover data-focus-visible:bg-error-bg-hover data-open:bg-error-bg-hover data-pressed:bg-error-bg-active data-selected:text-error-text-contrast",
      },
    },
    defaultVariants: {
      intent: "neutral",
      size: 1,
    },
  }),
}

interface ListBoxItemProps
  extends RACListBoxItemProps,
    VariantProps<typeof styles.item> {}

function ListBoxItem({ intent, className, ...props }: ListBoxItemProps) {
  let { size } = useThemeProps(props)

  let textValue =
    props.textValue ||
    (typeof props.children === "string" ? props.children : undefined)

  return (
    <RACListBoxItem
      {...props}
      textValue={textValue}
      className={cxRenderProps(className, styles.item({ intent, size }))}
    >
      {composeRenderProps(
        props.children,
        (children, { selectionMode, isSelected }) => (
          <>
            {selectionMode !== "none" && (
              <span
                className={cx("flex items-center", size === 1 ? "w-3" : "w-4")}
              >
                {isSelected && (
                  <Check
                    size={size === 1 ? 12 : 16}
                    aria-hidden
                    weight="bold"
                  />
                )}
              </span>
            )}
            <span className="flex flex-1 items-center gap-1.5 truncate">
              {children}
            </span>
          </>
        ),
      )}
    </RACListBoxItem>
  )
}

interface ListBoxSectionProps<T>
  extends RACSectionProps<T>,
    VariantProps<typeof styles.sectionHeader> {
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
    <RACSection
      {...props}
      className={cx("flex flex-col gap-px not-last:mb-1", className)}
    >
      <RACHeader className={styles.sectionHeader({ size })}>{title}</RACHeader>
      <RACCollection items={items}>{children}</RACCollection>
    </RACSection>
  )
}

export { ListBox, ListBoxItem, ListBoxSection, styles as listBoxStyles }
export type { ListBoxItemProps, ListBoxProps, ListBoxSectionProps }
