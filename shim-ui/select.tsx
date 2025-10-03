"use client";

import { CaretDownIcon, CheckIcon } from "@phosphor-icons/react";
import type { ReactNode } from "react";
import {
  composeRenderProps,
  Select as RacSelect,
  type SelectProps as RacSelectProps,
  SelectValue as RacSelectValue,
} from "react-aria-components";
import { Button } from "@/shim-ui/button";
import {
  Description,
  FieldError,
  type FieldProps,
  fieldLayoutStyle,
  Label,
} from "@/shim-ui/field";
import { cx, cxRenderProps } from "@/shim-ui/lib/style";
import { ICON_SIZE_MAP, Theme, useThemeProps } from "@/shim-ui/lib/theme";
import {
  ListBox,
  ListBoxItem,
  type ListBoxItemProps,
  ListBoxSection,
  type ListBoxSectionProps,
} from "@/shim-ui/list-box";
import { Popover } from "@/shim-ui/popover";

interface SelectProps<T extends object>
  extends Omit<RacSelectProps<T>, "children">,
    FieldProps {
  items?: Iterable<T>;
  children: ReactNode | ((item: T) => ReactNode);
}

function Select<T extends object>({
  label,
  description,
  errorMessage,
  children,
  items,
  ...props
}: SelectProps<T>) {
  let { size, labelPosition, fieldVariant } = useThemeProps({
    size: props.size,
    labelPosition: props.labelPosition,
    fieldVariant: props.variant,
  });

  return (
    <RacSelect
      {...props}
      className={cxRenderProps(
        props.className,
        fieldLayoutStyle({ labelPosition })
      )}
    >
      {() => (
        <Theme {...{ size, fieldVariant, labelPosition }}>
          {label && <Label>{label}</Label>}
          <Button intent="neutral">
            <RacSelectValue className="flex-1 truncate text-left font-normal data-placeholder:text-neutral-text-subtle" />
            <CaretDownIcon
              aria-hidden
              className="shrink-0 text-current"
              size={ICON_SIZE_MAP[size]}
            />
          </Button>
          {description && <Description>{description}</Description>}
          <FieldError>{errorMessage}</FieldError>
          <Popover>
            <ListBox
              className="max-h-[inherit] overflow-auto p-1 outline-none"
              items={items}
            >
              {children}
            </ListBox>
          </Popover>
        </Theme>
      )}
    </RacSelect>
  );
}

function SelectItem(props: ListBoxItemProps) {
  let { size } = useThemeProps({ size: props.size });
  let textValue =
    props.textValue ||
    (typeof props.children === "string" ? props.children : undefined);

  return (
    <ListBoxItem {...props} textValue={textValue}>
      {composeRenderProps(
        props.children,
        (children, { selectionMode, isSelected }) => (
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
                "flex flex-1 items-center truncate",
                size === 1 ? "gap-2" : "gap-2.5"
              )}
            >
              {children}
            </span>
          </>
        )
      )}
    </ListBoxItem>
  );
}

function SelectSection<T extends object>(props: ListBoxSectionProps<T>) {
  return <ListBoxSection {...props} />;
}

export { Select, SelectItem, SelectSection };
export type { SelectProps };
