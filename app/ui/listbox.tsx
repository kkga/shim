'use client'

import { compose, cva, cxRenderProps, focusInsetStyle } from '@lib/utils'
import {
  Collection as RACCollection,
  Header as RACHeader,
  ListBox as RACListBox,
  ListBoxItem as RACListBoxItem,
  Section as RACSection,
  type ListBoxItemProps as RACListBoxItemProps,
  type ListBoxProps as RACListBoxProps,
  type SectionProps as RACSectionProps,
} from 'react-aria-components'

function ListBox<T extends object>({ children, ...props }: RACListBoxProps<T>) {
  return (
    <RACListBox
      {...props}
      className={cxRenderProps(
        props.className,
        'flex w-full flex-col gap-px overflow-auto',
      )}
    >
      {children}
    </RACListBox>
  )
}

const itemStyles = compose(
  focusInsetStyle,
  cva({
    base: [
      'flex h-6 items-center px-2 text-sm rounded-md text-neutral-text cursor-default',
      // hovered
      'data-[hovered]:bg-neutral-bg-hover',
      // pressed
      'data-[pressed]:bg-neutral-bg-active',
      // selected
      'data-[selected]:bg-accent-solid data-[selected]:text-white',
      // disabled
      'data-[disabled]:text-neutral-placeholder',
    ],
  }),
)

function ListBoxItem({ className, ...props }: RACListBoxItemProps) {
  return (
    <RACListBoxItem
      {...props}
      className={cxRenderProps(className, itemStyles())}
    />
  )
}

interface ListBoxSectionProps<T> extends RACSectionProps<T> {
  title?: string
}

function ListBoxSection<T extends object>(props: ListBoxSectionProps<T>) {
  return (
    <RACSection className="flex flex-col gap-px not-last:mb-2">
      <RACHeader className="bg-panel sticky top-0 z-10 flex h-6 items-center truncate px-2 text-sm font-medium text-neutral-text-contrast backdrop-blur-md">
        {props.title}
      </RACHeader>
      <RACCollection items={props.items}>{props.children}</RACCollection>
    </RACSection>
  )
}

export { ListBox, ListBoxItem, ListBoxSection }
