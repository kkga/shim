"use client"

import { cva, cxRenderProps } from "@lib/style"

import {
  Tab as RACTab,
  TabList as RACTabList,
  TabPanel as RACTabPanel,
  Tabs as RACTabs,
  type TabListProps as RACTabListProps,
  type TabPanelProps as RACTabPanelProps,
  type TabProps as RACTabProps,
  type TabsProps as RACTabsProps,
} from "react-aria-components"

const styles = {
  tabs: cva({
    base: "flex",
    variants: {
      orientation: {
        horizontal: "flex-col",
        vertical: "flex-row w-[800px]",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }),

  tabList: cva({
    base: [
      "inline-flex gap-6 w-full items-center justify-start shadow-[inset_0_-1px_0_0_var(--color-neutral-line)]",
      // horizontal
      "data-[orientation=horizontal]:flex-row",
      // vertical
      "data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start",
    ],
  }),

  tab: cva({
    base: [
      "border-transparent border-t-2 border-b-2 group inline-flex gap-1.5 h-10 items-center focus-visible:outline-none text-xs font-medium text-neutral-text cursor-default",
      // hover
      "data-[hovered]:text-neutral-text-contrast",
      // selected
      "data-[selected]:text-neutral-text-contrast data-[selected]:border-b-neutral-text-contrast",
      // disabled
      "data-[disabled]:text-neutral-placeholder",
    ],
  }),

  tabPanel: cva({
    base: "flex-1 py-2",
  }),
}

function Tabs(props: RACTabsProps) {
  return (
    <RACTabs
      {...props}
      className={cxRenderProps(
        props.className,
        styles.tabs({ orientation: props.orientation }),
      )}
    />
  )
}

function TabList<T extends object>(props: RACTabListProps<T>) {
  return (
    <RACTabList
      {...props}
      className={cxRenderProps(props.className, styles.tabList())}
    />
  )
}

function Tab(props: RACTabProps) {
  return (
    <RACTab
      {...props}
      className={cxRenderProps(props.className, styles.tab())}
    />
  )
}

function TabPanel(props: RACTabPanelProps) {
  return (
    <RACTabPanel
      {...props}
      className={cxRenderProps(props.className, styles.tabPanel())}
    />
  )
}

export { Tab, TabList, TabPanel, Tabs }
