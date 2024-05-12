"use client"

import { compose, cva, cxRenderProps, focusInsetStyle } from "@lib/utils"
import { VariantProps } from "cva"
import {
  Collection as RACCollection,
  Header as RACHeader,
  ListBox as RACListBox,
  ListBoxItem as RACListBoxItem,
  Section as RACSection,
  type ListBoxItemProps as RACListBoxItemProps,
  type ListBoxProps as RACListBoxProps,
  type SectionProps as RACSectionProps,
} from "react-aria-components"

function ListBox<T extends object>({ children, ...props }: RACListBoxProps<T>) {
  return (
    <RACListBox
      {...props}
      className={cxRenderProps(
        props.className,
        "flex w-full flex-col gap-px overflow-auto",
      )}
    >
      {children}
    </RACListBox>
  )
}

const itemBaseStyle = cva({
  base: [
    "flex h-6 items-center px-1.5 gap-1.5 text-sm rounded-md text-neutral-text cursor-default truncate",
    // disabled
    "data-[disabled]:text-neutral-placeholder",
  ],
})

const listBoxItemStyle = compose(
  focusInsetStyle,
  itemBaseStyle,
  cva({
    variants: {
      intent: {
        neutral:
          "text-neutral-text data-[hovered]:bg-neutral-bg-hover data-[pressed]:bg-neutral-bg-active data-[selected]:bg-neutral-solid data-[selected]:text-white",
        accent:
          "text-accent-text data-[hovered]:bg-accent-bg-hover data-[pressed]:bg-accent-bg-active data-[selected]:bg-accent-solid data-[selected]:text-white",
        success:
          "text-success-text data-[hovered]:bg-success-bg-hover data-[pressed]:bg-success-bg-active data-[selected]:bg-success-solid data-[selected]:text-white",
        warning:
          "text-warning-text data-[hovered]:bg-warning-bg-hover data-[pressed]:bg-warning-bg-active data-[selected]:bg-warning-solid data-[selected]:text-white",
        error:
          "text-error-text data-[hovered]:bg-error-bg-hover data-[pressed]:bg-error-bg-active data-[selected]:bg-error-solid data-[selected]:text-white",
      },
    },
    defaultVariants: {
      intent: "neutral",
    },
  }),
)

interface ListBoxItemProps
  extends RACListBoxItemProps,
    VariantProps<typeof listBoxItemStyle> {}

function ListBoxItem({ className, ...props }: ListBoxItemProps) {
  const textValue =
    props.textValue ||
    (typeof props.children === "string" ? props.children : undefined)

  return (
    <RACListBoxItem
      {...props}
      textValue={textValue}
      className={cxRenderProps(
        className,
        listBoxItemStyle({ intent: props.intent }),
      )}
    />
  )
}

interface ListBoxSectionProps<T> extends RACSectionProps<T> {
  title?: string
}

function ListBoxSection<T extends object>(props: ListBoxSectionProps<T>) {
  return (
    <RACSection className="flex flex-col gap-px not-last:mb-2">
      <RACHeader className="flex h-6 items-center truncate px-1.5 text-sm font-medium text-neutral-text-contrast backdrop-blur-md">
        {props.title}
      </RACHeader>
      <RACCollection items={props.items}>{props.children}</RACCollection>
    </RACSection>
  )
}

export { ListBox, ListBoxItem, ListBoxSection, itemBaseStyle }
export type { ListBoxSectionProps }
