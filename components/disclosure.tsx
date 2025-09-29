"use client";

import { cxRenderProps, focusStyle } from "@lib/style";
import { ICON_SIZE_MAP, type Size, Theme, useThemeProps } from "@lib/theme";
import { CaretDownIcon } from "@phosphor-icons/react";
import { useContext } from "react";
import {
  Button,
  composeRenderProps,
  DisclosureGroupStateContext,
  DisclosureStateContext,
  Heading,
  Disclosure as RacDisclosure,
  DisclosurePanel as RacDisclosurePanel,
  type DisclosurePanelProps as RacDisclosurePanelProps,
  type DisclosureProps as RacDisclosureProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";

const style = tv({
  slots: {
    disclosure: "group border border-neutral-line text-neutral-text",
    button: [
      focusStyle(),
      "flex w-full cursor-default items-center gap-2 bg-neutral-bg-subtle text-start",
    ],
    heading: "font-medium text-neutral-text-contrast leading-tight",
    chevron: "ml-auto text-neutral-text",
    panel: "",
  },
  variants: {
    // TODO: Add support for `soft` variant
    variant: {
      soft: {
        disclosure: "bg-transparent",
        button: "bg-neutral-bg-subtle",
      },
      surface: {
        disclosure: "group bg-neutral-bg text-neutral-text",
      },
    },
    size: {
      1: {
        disclosure: "rounded-md text-xs",
        button: "rounded-[5px] px-2.5 py-2",
        panel: "group-data-[expanded]:px-2.5 group-data-[expanded]:py-2",
      },
      2: {
        disclosure: "rounded-[7px] text-[13px]",
        button: "rounded-[6px] px-3 py-2.5",
        panel: "group-data-[expanded]:px-3 group-data-[expanded]:py-2.5",
      },
      3: {
        disclosure: "rounded-lg text-sm",
        button: "rounded-[7px] px-3.5 py-3",
        panel: "group-data-[expanded]:px-3.5 group-data-[expanded]:py-3",
      },
      4: {
        disclosure: "rounded-xl text-base",
        button: "rounded-[11px] px-4 py-3.5",
        panel: "group-data-[expanded]:px-4 group-data-[expanded]:py-3.5",
      },
    },
    isHovered: {
      true: {
        button: "bg-neutral-bg-hover",
      },
    },
    isPressed: {
      true: {
        button: "bg-neutral-bg-active",
      },
    },
    isInGroup: {
      true: {
        disclosure: "rounded-none border-0 border-b last:border-b-0",
        button:
          "not-group-first:not-group-last:rounded-none group-first:rounded-b-none group-last:rounded-t-none",
      },
    },
    isDisabled: {
      true: {
        button: "text-neutral-text-subtle",
        chevron: "text-neutral-text-subtle",
      },
    },
    isExpanded: {
      true: {
        chevron: "rotate-180 transform",
        button: "rounded-b-none shadow-[0_1px] shadow-neutral-line",
      },
    },
  },
});

interface DisclosureProps extends RacDisclosureProps {
  size?: Size;
}

function Disclosure({ children, size: _size, ...props }: DisclosureProps) {
  let isInGroup = useContext(DisclosureGroupStateContext) !== null;
  let { size } = useThemeProps({ size: _size });
  let { disclosure } = style({ isInGroup, size });
  return (
    <RacDisclosure
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        disclosure({ ...renderProps, isInGroup, className })
      )}
    >
      {composeRenderProps(children, (renderChildren) => (
        <Theme size={size}>{renderChildren}</Theme>
      ))}
    </RacDisclosure>
  );
}

interface DisclosureHeaderProps {
  children: React.ReactNode;
}

function DisclosureHeader({ children }: DisclosureHeaderProps) {
  let context = useContext(DisclosureStateContext);
  if (!context) {
    throw new Error(
      "DisclosureStateContext is null. Ensure this component is used within a Disclosure."
    );
  }
  let { isExpanded } = context;
  let isInGroup = useContext(DisclosureGroupStateContext) !== null;
  let { size } = useThemeProps();
  let { button, chevron, heading } = style({ isExpanded, isInGroup, size });
  return (
    <Heading className={heading()}>
      <Button
        className={(renderProps) => button({ ...renderProps, isInGroup })}
        slot="trigger"
      >
        {({ isDisabled }) => (
          <>
            {children}
            <CaretDownIcon
              aria-hidden
              className={chevron({ isExpanded, isDisabled })}
              size={ICON_SIZE_MAP[size]}
              weight="bold"
            />
          </>
        )}
      </Button>
    </Heading>
  );
}

interface DisclosurePanelProps extends RacDisclosurePanelProps {}

function DisclosurePanel({ className, ...props }: DisclosurePanelProps) {
  let { size } = useThemeProps();
  let { panel } = style({ size });
  return (
    <RacDisclosurePanel
      {...props}
      className={cxRenderProps(className, panel())}
    />
  );
}

export { Disclosure, DisclosureHeader, DisclosurePanel };
export type { DisclosureHeaderProps, DisclosurePanelProps, DisclosureProps };
