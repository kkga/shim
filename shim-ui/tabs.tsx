"use client";

import { createContext, useContext } from "react";
import {
  composeRenderProps,
  Tab as RacTab,
  TabList as RacTabList,
  type TabListProps as RacTabListProps,
  TabPanel as RacTabPanel,
  type TabPanelProps as RacTabPanelProps,
  type TabProps as RacTabProps,
  Tabs as RacTabs,
  type TabsProps as RacTabsProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { type Size, Theme, useThemeProps } from "@/shim-ui/lib/theme";

const style = tv({
  slots: {
    tabs: "flex",
    tabList: "group inline-flex items-stretch justify-start",
    tab: [
      "relative inline-flex cursor-default items-center gap-1.5 font-medium text-neutral-text",
      "outline-0",
      // indicator
      "before:absolute after:absolute after:inset-x-0",
      "group-data-[orientation=horizontal]:before:inset-x-0 group-data-[orientation=horizontal]:before:bottom-0 group-data-[orientation=horizontal]:before:h-0.5",
      "group-data-[orientation=vertical]:before:-right-1 group-data-[orientation=vertical]:before:inset-y-1 group-data-[orientation=vertical]:before:w-0.5",
    ],
    tabPanel: "grow-1",
  },
  defaultVariants: {
    variant: "soft",
    size: 1,
    orientation: "horizontal",
  },
  variants: {
    variant: {
      underline: {},
      soft: {},
    },
    size: {
      1: {
        tabList: "text-xs",
        tab: "h-8 px-1.5 text-xs after:inset-y-1 after:rounded",
      },
      2: {
        tabList: "text-sm",
        tab: "h-9 px-2 text-sm after:inset-y-[5px] after:rounded",
      },
      3: {
        tabList: "text-[15px] leading-normal",
        tab: "h-10 px-2.5 text-[15px] leading-normal after:inset-y-1.5 after:rounded-md",
      },
      4: {
        tabList: "text-base",
        tab: "h-12 px-3 text-base after:inset-y-2 after:rounded-lg",
      },
    },
    orientation: {
      horizontal: {
        tabs: "flex-col",
        tabList: "flex-row gap-1",
      },
      vertical: {
        tabs: "flex-row",
        tabList: "flex-col gap-0 px-1",
      },
    },
    isHovered: {
      true: {
        tab: "data-active: text-neutral-text-contrast after:bg-neutral-bg-hover",
      },
    },
    isPressed: {
      true: {
        tab: "after:bg-neutral-bg-active",
      },
    },
    isSelected: {
      true: {
        tab: "border-b-neutral-text-contrast text-neutral-text-contrast",
      },
    },
    isDisabled: {
      true: {
        tab: "cursor-not-allowed text-neutral-text-subtle",
      },
    },
    isFocusVisible: {
      true: {
        tab: "after:-outline-offset-2 after:outline-2 after:outline-accent-focus-ring",
      },
    },
  },
  compoundVariants: [
    {
      orientation: "horizontal",
      variant: "underline",
      class: {
        tabList: "shadow-[inset_0_-1px_0_0_var(--color-neutral-line)]",
      },
    },
    {
      orientation: "vertical",
      variant: "underline",
      class: {
        tabList: "shadow-[inset_-1px_0_0_0_var(--color-neutral-line)]",
      },
    },
    {
      variant: "soft",
      isSelected: true,
      class: {
        tab: "after:bg-neutral-bg-active",
      },
    },
    {
      variant: "underline",
      isSelected: true,
      class: {
        tab: "before:bg-neutral-text-contrast",
      },
    },
  ],
});

type TabListVariant = "soft" | "underline";
const TabListVariantContext = createContext<TabListVariant>("soft");

interface TabsProps extends RacTabsProps {}
function Tabs(props: TabsProps) {
  let { tabs } = style();
  return (
    <RacTabs
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tabs({ ...renderProps, className })
      )}
    />
  );
}

interface TabListProps<T extends object> extends RacTabListProps<T> {
  variant?: TabListVariant;
  size?: Size;
}

function TabList<T extends object>(props: TabListProps<T>) {
  let themeProps = useThemeProps({ size: props.size });
  let { tabList } = style({ variant: props.variant, size: themeProps.size });

  return (
    <Theme {...themeProps}>
      <TabListVariantContext.Provider value={props.variant || "soft"}>
        <RacTabList
          {...props}
          className={composeRenderProps(
            props.className,
            (className, renderProps) => tabList({ ...renderProps, className })
          )}
        />
      </TabListVariantContext.Provider>
    </Theme>
  );
}

function Tab(props: RacTabProps) {
  let variant = useContext(TabListVariantContext);
  let { size } = useThemeProps();
  let { tab } = style({ variant, size });

  return (
    <RacTab
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tab({ ...renderProps, className })
      )}
    />
  );
}

function TabPanel(props: RacTabPanelProps) {
  let { tabPanel } = style();
  return (
    <RacTabPanel
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tabPanel({ ...renderProps, className })
      )}
    />
  );
}

export { Tab, TabList, TabPanel, Tabs };
export type { TabListProps, TabsProps };
