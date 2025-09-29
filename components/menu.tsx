"use client";

import { CaretRightIcon, CheckIcon } from "@phosphor-icons/react";
import {
  composeRenderProps,
  Collection as RacCollection,
  Header as RacHeader,
  Menu as RacMenu,
  MenuItem as RacMenuItem,
  type MenuItemProps as RacMenuItemProps,
  type MenuProps as RacMenuProps,
  MenuSection as RacMenuSection,
  type MenuSectionProps as RacMenuSectionProps,
  MenuTrigger as RacMenuTrigger,
  type PopoverProps as RacPopoverProps,
  Separator as RacSeparator,
  type SeparatorProps as RacSeparatorProps,
  SubmenuTrigger as RacSubmenuTrigger,
} from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";
import { itemStyle, sectionStyle } from "@/components/list-box";
import { Popover } from "@/components/popover";
import { cx, cxRenderProps } from "@/lib/style";
import { ICON_SIZE_MAP, type Size, Theme, useThemeProps } from "@/lib/theme";

interface MenuProps<T> extends RacMenuProps<T> {
  placement?: RacPopoverProps["placement"];
  offset?: RacPopoverProps["offset"];
  size?: Size;
}

function Menu<T extends object>({
  placement,
  className,
  offset,
  size,
  ...props
}: MenuProps<T>) {
  let themeProps = useThemeProps({ size });

  return (
    <Theme {...themeProps}>
      <Popover className="min-w-32" offset={offset} placement={placement}>
        <RacMenu
          {...props}
          className={cxRenderProps(
            className,
            "flex max-h-[inherit] flex-col gap-px overflow-y-scroll p-1 outline-0"
          )}
        />
      </Popover>
    </Theme>
  );
}

const menuItemStyle = itemStyle;

interface MenuItemProps
  extends RacMenuItemProps,
    VariantProps<typeof menuItemStyle> {}

function MenuItem({ className, children, intent, ...props }: MenuItemProps) {
  let { size } = useThemeProps({ size: props.size });

  return (
    <RacMenuItem
      {...props}
      className={cxRenderProps(
        className,
        menuItemStyle({
          intent,
          size,
          className: props.href ? "cursor-pointer" : "cursor-default",
        })
      )}
    >
      {composeRenderProps(
        children,
        (renderedChildren, { selectionMode, isSelected, hasSubmenu }) => (
          <>
            {selectionMode !== "none" && (
              <span
                className={cx("flex items-center", size === 1 ? "w-3" : "w-4")}
              >
                {isSelected && (
                  <CheckIcon
                    aria-hidden
                    size={ICON_SIZE_MAP[size]}
                    weight="bold"
                  />
                )}
              </span>
            )}
            <span
              className={cx(
                "flex flex-1 items-center gap-1.5",
                typeof renderedChildren === "string" ? "truncate" : ""
              )}
            >
              {renderedChildren}
            </span>
            {hasSubmenu && (
              <CaretRightIcon aria-hidden size={12} weight="bold" />
            )}
          </>
        )
      )}
    </RacMenuItem>
  );
}

const separatorStyle = tv({
  base: "my-1 h-px border-none bg-neutral-line",
  variants: {
    size: {
      1: "mx-1.5",
      2: "mx-2",
      3: "mx-2.5",
      4: "mx-3",
    },
  },
});

function MenuSeparator(props: RacSeparatorProps) {
  let { size } = useThemeProps();
  return <RacSeparator {...props} className={separatorStyle({ size })} />;
}

interface MenuSectionProps<T>
  extends RacMenuSectionProps<T>,
    VariantProps<typeof sectionStyle> {
  title?: string;
}

function MenuSection<T extends object>({
  title,
  children,
  items,
  className,
  ...props
}: MenuSectionProps<T>) {
  let themeProps = useThemeProps(props);
  let { size } = themeProps;
  let { header, section } = sectionStyle({ size });

  return (
    <RacMenuSection {...props} className={section({ className })}>
      {title && <RacHeader className={header()}>{title}</RacHeader>}
      <RacCollection items={items}>{children}</RacCollection>
    </RacMenuSection>
  );
}

const MenuTrigger = RacMenuTrigger;
const SubmenuTrigger = RacSubmenuTrigger;

export {
  Menu,
  MenuItem,
  MenuSection,
  MenuSeparator,
  MenuTrigger,
  SubmenuTrigger,
};

export type { MenuItemProps, MenuProps, MenuSectionProps };
