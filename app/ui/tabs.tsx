"use client"

import { cva, cxRenderProps } from "@lib/utils"

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

const tabsStyles = cva({
  base: "flex gap-4",
  variants: {
    orientation: {
      horizontal: "flex-col",
      vertical: "flex-row w-[800px]",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
})

const Tabs = ({ className, orientation, ...props }: RACTabsProps) => {
  return (
    <RACTabs
      {...props}
      className={cxRenderProps(className, tabsStyles({ orientation }))}
    />
  )
}

const tabListStyles = cva({
  base: [
    "inline-flex gap-6 w-full items-center justify-start shadow-[inset_0_-1px_0_0_var(--color-neutral-line)]",
    // horizontal
    "data-[orientation=horizontal]:flex-row",
    // vertical
    "data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start",
  ],
})

const TabList = <T extends object>({
  className,
  ...props
}: RACTabListProps<T>) => {
  return (
    <RACTabList
      {...props}
      className={cxRenderProps(className, tabListStyles())}
    />
  )
}

const tabStyles = cva({
  base: [
    "border-transparent border-t-2 border-b-2 group inline-flex gap-2 h-10 items-center focus-visible:outline-none text-sm font-medium text-neutral-text cursor-default",
    // hover
    "data-[hovered]:text-neutral-text-contrast",
    // selected
    "data-[selected]:text-neutral-text-contrast data-[selected]:border-b-neutral-text-contrast",
    // disabled
    "data-[disabled]:text-neutral-placeholder",
  ],
})

function Tab({ className, ...props }: RACTabProps) {
  return <RACTab {...props} className={cxRenderProps(className, tabStyles())} />
}

const tabPanelStyles = cva({
  base: "flex-1 py-2",
})

const TabPanel = (props: RACTabPanelProps) => {
  return (
    <RACTabPanel
      {...props}
      className={cxRenderProps(props.className, tabPanelStyles())}
    />
  )
}

export { Tab, TabList, TabPanel, Tabs }
