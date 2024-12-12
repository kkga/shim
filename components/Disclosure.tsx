"use client"

import { cxRenderProps, focusStyle } from "@lib/style"
import { Size, Theme, useThemeProps } from "@lib/theme"
import { CaretDown } from "@phosphor-icons/react"
import { useContext } from "react"
import {
  Button,
  composeRenderProps,
  DisclosureGroupStateContext,
  DisclosureStateContext,
  Heading,
  Disclosure as RACDisclosure,
  DisclosureGroup as RACDisclosureGroup,
  DisclosureGroupProps as RACDisclosureGroupProps,
  DisclosurePanel as RACDisclosurePanel,
  DisclosurePanelProps as RACDisclosurePanelProps,
  DisclosureProps as RACDisclosureProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"

const style = tv({
  slots: {
    group: "border-neutral-line border",
    disclosure: "border-neutral-line text-neutral-text group border",
    button: [
      focusStyle(),
      "bg-neutral-bg-subtle flex w-full cursor-default items-center gap-2 text-start",
      // hovered
      "data-hovered:bg-neutral-bg-hover data-pressed:bg-neutral-bg-active",
    ],
    heading: "text-neutral-text-contrast font-medium leading-tight",
    chevron:
      "text-neutral-text ml-auto transition-transform duration-100 ease-in-out",
    panel: "",
  },
  variants: {
    size: {
      1: {
        group: "rounded-md",
        disclosure: "rounded-md text-xs",
        button: "rounded-[5px] px-2.5 py-2",
        panel: "group-data-[expanded]:px-2.5 group-data-[expanded]:py-2",
      },
      2: {
        group: "rounded-[7px]",
        disclosure: "rounded-[7px] text-[13px]",
        button: "rounded-[6px] px-3 py-2.5",
        panel: "group-data-[expanded]:px-3 group-data-[expanded]:py-2.5",
      },
      3: {
        group: "rounded-lg",
        disclosure: "rounded-lg text-sm",
        button: "rounded-[7px] px-3.5 py-3",
        panel: "group-data-[expanded]:px-3.5 group-data-[expanded]:py-3",
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
        button: "text-neutral-placeholder",
        chevron: "text-neutral-placeholder",
      },
    },
    isExpanded: {
      true: {
        chevron: "rotate-180 transform",
        button: "shadow-neutral-line rounded-b-none shadow-[0_1px]",
      },
    },
  },
  defaultVariants: {
    size: 1,
  },
})

interface DisclosureProps extends RACDisclosureProps {
  children: React.ReactNode
  size?: Size
}

function Disclosure({ children, size: _size, ...props }: DisclosureProps) {
  let isInGroup = useContext(DisclosureGroupStateContext) !== null
  let { size } = useThemeProps({ size: _size })
  let { disclosure } = style({ isInGroup, size })
  return (
    <RACDisclosure
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        disclosure({ ...renderProps, isInGroup, className }),
      )}
    >
      <Theme size={size}>{children}</Theme>
    </RACDisclosure>
  )
}

interface DisclosureHeaderProps {
  children: React.ReactNode
}

function DisclosureHeader({ children }: DisclosureHeaderProps) {
  let { isExpanded } = useContext(DisclosureStateContext)!
  let isInGroup = useContext(DisclosureGroupStateContext) !== null
  let { size } = useThemeProps()
  let { button, chevron, heading } = style({ isExpanded, isInGroup, size })
  return (
    <Heading className={heading()}>
      <Button
        slot="trigger"
        className={(renderProps) => button({ ...renderProps, isInGroup })}
      >
        {({ isDisabled }) => (
          <>
            {children}
            <CaretDown
              aria-hidden
              size={size === 3 ? 16 : 12}
              weight="bold"
              className={chevron({ isExpanded, isDisabled })}
            />
          </>
        )}
      </Button>
    </Heading>
  )
}

interface DisclosurePanelProps extends RACDisclosurePanelProps {
  children: React.ReactNode
}

function DisclosurePanel({
  children,
  className,
  ...props
}: DisclosurePanelProps) {
  let { size } = useThemeProps()
  let { panel } = style({ size })
  return (
    <RACDisclosurePanel
      {...props}
      className={cxRenderProps(className, panel())}
    >
      {children}
    </RACDisclosurePanel>
  )
}

interface DisclosureGroupProps extends RACDisclosureGroupProps {
  children: React.ReactNode
  size?: Size
}

function DisclosureGroup({
  children,
  className,
  size: _size,
  ...props
}: DisclosureGroupProps) {
  let { size } = useThemeProps({ size: _size })
  let { group } = style({ size })

  return (
    <RACDisclosureGroup
      {...props}
      className={cxRenderProps(className, group())}
    >
      <Theme size={size}>{children}</Theme>
    </RACDisclosureGroup>
  )
}

export { Disclosure, DisclosureGroup, DisclosureHeader, DisclosurePanel }
export type {
  DisclosureGroupProps,
  DisclosureHeaderProps,
  DisclosurePanelProps,
  DisclosureProps,
}
