"use client";

import { CaretDownIcon } from "@phosphor-icons/react";
import { createContext, useContext } from "react";
import {
  Button,
  DisclosureGroupStateContext,
  Heading,
  Disclosure as RacDisclosure,
  DisclosurePanel as RacDisclosurePanel,
  type DisclosureProps as RacDisclosureProps,
} from "react-aria-components";
import { type ClassValue, tv, type VariantProps } from "tailwind-variants";
import { cnRenderProps } from "@/shim-ui/lib/style";
import { ICON_SIZE_MAP, type Size, useThemeProps } from "@/shim-ui/lib/theme";

const style = tv({
  slots: {
    disclosure: "group overflow-hidden",
    button: [
      "focus-ring -outline-offset-2",
      "group/button flex w-full cursor-default items-center gap-1 bg-neutral-panel text-start",
      "group-data-disabled:cursor-not-allowed group-data-disabled:text-neutral-text-subtle",
    ],
    heading: "font-medium text-neutral-text-contrast leading-tight",
    chevron: [
      "ml-auto text-neutral-text",
      "group-data-expanded:rotate-180 group-data-expanded:transform",
      "group-data-disabled:text-neutral-text-subtle",
    ],
    panel: "h-(--disclosure-panel-height) text-neutral-text",
  },
  variants: {
    variant: {
      surface: {
        disclosure: "border border-neutral-line",
        button:
          "bg-panel data-hovered:bg-neutral-bg-hover data-pressed:bg-neutral-bg-active group-data-expanded:rounded-b-none",
        panel: "border-neutral-line bg-background group-data-expanded:border-t",
      },
      soft: {
        disclosure: "",
        button:
          "bg-panel data-hovered:bg-neutral-bg-hover data-pressed:bg-neutral-bg-active group-data-expanded:rounded-b-none",
        panel: "bg-panel",
      },
      ghost: {
        disclosure: "border-0 bg-transparent",
        button:
          "bg-transparent hover:bg-neutral-bg-hover data-pressed:bg-neutral-bg-active",
        chevron: "group-data-hovered/button:ml-auto",
      },
    } satisfies Record<
      "surface" | "soft" | "ghost",
      Record<string, ClassValue>
    >,
    size: {
      1: {
        disclosure: "rounded-md text-xs",
        button: "rounded-[5px] px-2.5 py-2",
        panel: "group-data-expanded:px-2.5 group-data-expanded:py-2",
      },
      2: {
        disclosure: "rounded-[7px] text-sm",
        button: "rounded-md px-3 py-2.5",
        panel: "group-data-expanded:px-3 group-data-expanded:py-2.5",
      },
      3: {
        disclosure: "rounded-lg text-[15px] leading-5",
        button: "rounded-[7px] px-3.5 py-3",
        panel: "group-data-expanded:px-3.5 group-data-expanded:py-3",
      },
      4: {
        disclosure: "rounded-xl text-base",
        button: "rounded-[11px] px-4 py-3.5",
        panel: "group-data-expanded:px-4 group-data-expanded:py-3.5",
      },
    } satisfies Record<Size, Record<string, ClassValue>>,
    isInGroup: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      variant: ["soft", "surface"],
      isInGroup: true,
      class: {
        disclosure:
          "not-first:not-last:rounded-none not-first:border-t-0 first:rounded-b-none last:rounded-t-none",
        button:
          "not-group-first:not-group-last:rounded-none group-first:rounded-b-none group-last:rounded-t-none",
      },
    },
    {
      variant: "ghost",
      size: 1,
      class: {
        chevron: "ml-0.5 group-data-hovered/button:ml-auto",
      },
    },
    {
      variant: "ghost",
      size: 2,
      class: {
        chevron: "ml-1 group-data-hovered/button:ml-auto",
      },
    },
    {
      variant: "ghost",
      size: 3,
      class: {
        chevron: "ml-1.5 group-data-hovered/button:ml-auto",
      },
    },
    {
      variant: "ghost",
      size: 4,
      class: {
        chevron: "ml-2 group-data-hovered/button:ml-auto",
      },
    },
  ],
});

interface DisclosureProps
  extends Omit<RacDisclosureProps, "children">,
    VariantProps<typeof style> {
  title: React.ReactNode;
  children: React.ReactNode;
}

type DisclosureVariant = VariantProps<typeof style>["variant"];
const DisclosureVariantContext = createContext<DisclosureVariant | null>(null);

function Disclosure({
  title,
  children,
  size,
  variant = "soft",
  className,
  ...props
}: DisclosureProps) {
  const isInGroup = useContext(DisclosureGroupStateContext) !== null;
  const contextVariant = useContext(DisclosureVariantContext);
  const groupVariant = isInGroup ? contextVariant : null;
  const themeProps = useThemeProps({ size });
  const { disclosure, panel, heading, chevron, button } = style({
    isInGroup,
    variant: groupVariant ?? variant,
    size: themeProps.size,
  });

  return (
    <RacDisclosure
      {...props}
      className={cnRenderProps(className, disclosure())}
    >
      <Heading className={heading()}>
        <Button
          className={(renderProps) => button({ ...renderProps, isInGroup })}
          slot="trigger"
        >
          {title}
          <CaretDownIcon
            aria-hidden
            className={chevron()}
            size={ICON_SIZE_MAP[size]}
            weight="bold"
          />
        </Button>
      </Heading>
      <RacDisclosurePanel className={panel()}>{children}</RacDisclosurePanel>
    </RacDisclosure>
  );
}

export { Disclosure, DisclosureVariantContext };
export type { DisclosureProps };
