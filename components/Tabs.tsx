"use client"

import { cva, cxRenderProps, VariantProps } from "@lib/style"
import { Theme, useThemeProps } from "@lib/theme"
import { createContext, useContext } from "react"

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
        vertical: "flex-row",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }),

  tabList: cva({
    base: [
      "group inline-flex items-stretch justify-start",
      // horizontal
      "data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:gap-1",
      // vertical
      "data-[orientation=vertical]:flex-col data-[orientation=vertical]:gap-0 data-[orientation=vertical]:px-1",
    ],
    variants: {
      variant: {
        underline: [
          "data-[orientation=horizontal]:shadow-[inset_0_-1px_0_0_var(--color-neutral-line)]",
          "data-[orientation=vertical]:shadow-[inset_-1px_0_0_0_var(--color-neutral-line)]",
        ],
        soft: "",
      },
      size: {
        1: "text-xs",
        2: "text-[13px]",
        3: "text-sm",
      },
    },
    defaultVariants: {
      variant: "underline",
      size: 1,
    },
  }),

  tab: cva({
    base: [
      "relative inline-flex gap-1.5 items-center focus-visible:outline-none font-medium text-neutral-text cursor-default",
      // indicator
      "before:absolute after:absolute after:inset-x-0 after:inset-y-1",
      // horizontal
      "group-data-[orientation=horizontal]:before:h-0.5 group-data-[orientation=horizontal]:before:inset-x-0 group-data-[orientation=horizontal]:before:bottom-0",
      // vertical
      "group-data-[orientation=vertical]:before:w-0.5 group-data-[orientation=vertical]:before:inset-y-1 group-data-[orientation=vertical]:before:-right-1",
      // hover
      "data-hovered:text-neutral-text-contrast data-hovered:after:bg-neutral-bg-hover data-active:after:bg-neutral-bg-active",
      // selected
      "data-selected:text-neutral-text-contrast data-selected:border-b-neutral-text-contrast",
      // disabled
      "data-disabled:text-neutral-placeholder data-disabled:cursor-not-allowed",
    ],
    variants: {
      size: {
        1: "h-8 px-1.5 text-xs after:rounded",
        2: "h-9 px-2 text-[13px] after:rounded",
        3: "h-10 px-2.5 text-sm after:rounded-md",
      },
      variant: {
        soft: "data-selected:after:bg-neutral-bg-active",
        underline: "data-selected:before:bg-neutral-text-contrast",
      },
    },
  }),

  tabPanel: cva({
    base: "flex-1",
  }),
}

type TabListVariant = "soft" | "underline"
const TabListVariantContext = createContext<TabListVariant>("underline")

interface TabsProps extends RACTabsProps, VariantProps<typeof styles.tabs> {}

function Tabs(props: TabsProps) {
  return (
    <RACTabs
      {...props}
      className={cxRenderProps(
        props.className,
        styles.tabs({
          orientation: props.orientation,
        }),
      )}
    />
  )
}

interface TabListProps<T extends object>
  extends RACTabListProps<T>,
    VariantProps<typeof styles.tabList> {}

function TabList<T extends object>(props: TabListProps<T>) {
  let themeProps = useThemeProps({
    size: props.size,
  })

  return (
    <Theme {...themeProps}>
      <TabListVariantContext.Provider value={props.variant || "underline"}>
        <RACTabList
          {...props}
          className={cxRenderProps(
            props.className,
            styles.tabList({
              variant: props.variant,
              size: themeProps.size,
            }),
          )}
        />
      </TabListVariantContext.Provider>
    </Theme>
  )
}

function Tab(props: RACTabProps) {
  let variant = useContext(TabListVariantContext)
  let { size } = useThemeProps()

  return (
    <RACTab
      {...props}
      className={cxRenderProps(
        props.className,
        styles.tab({
          variant,
          size,
        }),
      )}
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
export type { TabsProps, TabListProps }
