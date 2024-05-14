"use client"

import {
  Size,
  SizeContext,
  compose,
  cva,
  cx,
  cxRenderProps,
  focusStyle,
  useSize,
} from "@lib/styleUtils"
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

function ListBox<T extends object>({ children, ...props }: ListBoxProps<T>) {
  let size = useSize(props)

  return (
    <SizeContext.Provider value={size}>
      <RACListBox
        {...props}
        className={cxRenderProps(props.className, "flex flex-col gap-px")}
      >
        {children}
      </RACListBox>
    </SizeContext.Provider>
  )
}

const itemStyle = compose(
  focusStyle,
  cva({
    base: [
      "relative flex items-center rounded text-neutral-text font-book cursor-default truncate shrink-0",
      "data-disabled:text-neutral-placeholder",
    ],
    variants: {
      size: {
        1: "h-6 text-xs px-1.5 gap-1.5",
        2: "h-7 text-[13px] px-2 gap-2",
        3: "h-8 text-sm px-2.5 gap-2",
      },
      intent: {
        neutral:
          "text-neutral-text data-hovered:bg-neutral-bg-hover data-open:bg-neutral-bg-hover data-pressed:bg-neutral-bg-active data-selected:text-neutral-text-contrast",
        accent:
          "text-accent-text data-hovered:bg-accent-bg-hover data-open:bg-accent-bg-hover data-pressed:bg-accent-bg-active data-selected:text-accent-text-contrast",
        success:
          "text-success-text data-hovered:bg-success-bg-hover data-open:bg-success-bg-hover data-pressed:bg-success-bg-active data-selected:text-success-text-contrast",
        warning:
          "text-warning-text data-hovered:bg-warning-bg-hover data-open:bg-warning-bg-hover data-pressed:bg-warning-bg-active data-selected:text-warning-text-contrast",
        error:
          "text-error-text data-hovered:bg-error-bg-hover data-open:bg-error-bg-hover data-pressed:bg-error-bg-active data-selected:text-error-text-contrast",
      },
    },
    defaultVariants: {
      intent: "neutral",
      size: 1,
    },
  }),
)

interface ListBoxItemProps
  extends RACListBoxItemProps,
    VariantProps<typeof itemStyle> {}

function ListBoxItem({ className, intent, ...props }: ListBoxItemProps) {
  let size = useSize(props)

  let textValue =
    props.textValue ||
    (typeof props.children === "string" ? props.children : undefined)

  return (
    <RACListBoxItem
      {...props}
      textValue={textValue}
      className={cxRenderProps(className, itemStyle({ intent, size }))}
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

const sectionHeaderStyle = cva({
  base: ["flex items-center truncate font-medium text-neutral-text-contrast"],
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

function ListBoxSection<T extends object>(props: ListBoxSectionProps<T>) {
  let size = useSize(props)

  return (
    <RACSection className="flex flex-col gap-px not-last:mb-1">
      <RACHeader className={sectionHeaderStyle({ size })}>
        {props.title}
      </RACHeader>
      <RACCollection items={props.items}>{props.children}</RACCollection>
    </RACSection>
  )
}

export { ListBox, ListBoxItem, ListBoxSection, itemStyle }
export type { ListBoxItemProps, ListBoxProps, ListBoxSectionProps }
