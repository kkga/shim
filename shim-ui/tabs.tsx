"use client";

import { createContext, useContext } from "react";
import {
  composeRenderProps,
  SelectionIndicator as RacSelectionIndicator,
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
    tabList: "group inline-flex items-stretch",
    tab: "relative inline-flex cursor-default items-center font-medium text-neutral-text outline-0",
    selectionIndicator: "motion-safe:transition-[translate,width,height]",
    tabPanel: "grow",
  },
  variants: {
    size: {
      1: {
        tab: "h-6 gap-1 rounded-sm px-1.5 text-xs/none",
        selectionIndicator: "rounded-sm",
      },
      2: {
        tab: "h-7 gap-1.5 rounded-sm px-2 text-sm/none",
        selectionIndicator: "rounded-sm",
      },
      3: {
        tab: "h-8 gap-1.5 rounded-md px-2.5 text-[15px]/none",
        selectionIndicator: "rounded-md",
      },
      4: {
        tab: "h-10 gap-2 rounded-lg px-3 text-base/none",
        selectionIndicator: "rounded-lg",
      },
    },
    variant: {
      underline: {
        tabList: "py-1",
        selectionIndicator:
          "absolute top-0 left-0 z-10 size-full rounded-none!",
      },
      soft: {
        selectionIndicator: "absolute top-0 left-0 z-10 size-full",
      },
    },
    orientation: {
      horizontal: {
        tabs: "flex-col",
        tabList: "flex-row gap-1",
      },
      vertical: {
        tabs: "flex-row",
        tabList: "flex-col gap-1",
      },
    },
    isHovered: {
      true: {
        tab: "text-neutral-text-contrast",
      },
    },
    isPressed: {
      true: {},
    },
    isSelected: {
      true: {
        tab: "text-neutral-text-contrast",
      },
    },
    isDisabled: {
      true: {
        tab: "cursor-not-allowed text-neutral-text-subtle",
      },
    },
    isFocusVisible: {
      true: {
        tab: "-outline-offset-2 outline-2 outline-accent-focus-ring",
      },
    },
  },
  compoundVariants: [
    {
      orientation: "horizontal",
      variant: "underline",
      class: {
        tabList:
          "shadow-[inset_0_-1px_0_0_var(--color-neutral-line)] **:data-tablist-indicator:h-[calc(100%+4px)] **:data-tablist-indicator:shadow-[inset_0_-2px_0_0_currentColor]",
      },
    },
    {
      orientation: "vertical",
      variant: "underline",
      class: {
        tabList:
          "shadow-[inset_-1px_0_0_0_var(--color-neutral-line)] **:data-tablist-indicator:shadow-[inset_-2px_0_0_0_currentColor]",
      },
    },
    {
      variant: "soft",
      isSelected: true,
      class: {
        selectionIndicator: "bg-neutral-bg-active",
      },
    },
    {
      variant: "underline",
      isSelected: true,
      class: {
        selectionIndicator: "border-current",
      },
    },
  ],
  defaultVariants: {
    variant: "soft",
    size: 1,
    orientation: "horizontal",
  },
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
  let { tab, selectionIndicator } = style({ variant, size });

  return (
    <RacTab
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tab({ ...renderProps, className })
      )}
    >
      {composeRenderProps(props.children, (renderedChildren, renderProps) => (
        <>
          {renderedChildren}
          <RacSelectionIndicator
            className={selectionIndicator({ ...renderProps })}
            data-tablist-indicator
          />
        </>
      ))}
    </RacTab>
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
