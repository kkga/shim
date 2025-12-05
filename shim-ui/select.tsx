"use client";

import { CaretDownIcon, CheckIcon } from "@phosphor-icons/react";
import type { ReactNode } from "react";
import {
  composeRenderProps,
  Select as RacSelect,
  type SelectProps as RacSelectProps,
  SelectValue as RacSelectValue,
} from "react-aria-components";
import { cx } from "tailwind-variants";
import { Button } from "@/shim-ui/button";
import {
  Description,
  FieldError,
  type FieldProps,
  fieldLayoutStyle,
  Label,
} from "@/shim-ui/field";
import { cnRenderProps } from "@/shim-ui/lib/style";
import {
  buildVariantOverrides,
  ICON_SIZE_MAP,
  Theme,
  useThemeProps,
} from "@/shim-ui/lib/theme";
import {
  ListBox,
  ListBoxItem,
  type ListBoxItemProps,
  ListBoxSection,
  type ListBoxSectionProps,
} from "@/shim-ui/list-box";
import { Popover } from "@/shim-ui/popover";

interface SelectProps<T extends object, M extends "single" | "multiple">
  extends Omit<RacSelectProps<T, M>, "children">,
    FieldProps {
  items?: Iterable<T>;
  children: ReactNode | ((item: T) => ReactNode);
}

function Select<T extends object, M extends "single" | "multiple" = "single">({
  label,
  description,
  errorMessage,
  children,
  items,
  ...props
}: SelectProps<T, M>) {
  const { size, labelPosition, variants } = useThemeProps({
    size: props.size,
    labelPosition: props.labelPosition,
    ...buildVariantOverrides("field", props.variant),
  });

  return (
    <RacSelect
      {...props}
      className={cnRenderProps(
        props.className,
        fieldLayoutStyle({ labelPosition })
      )}
    >
      {() => (
        <Theme {...{ size, variants, labelPosition }}>
          {label ? <Label>{label}</Label> : null}
          <Button intent="neutral">
            <RacSelectValue className="flex-1 truncate text-left font-normal data-placeholder:text-neutral-text-subtle" />
            <CaretDownIcon
              aria-hidden
              className="shrink-0 text-current"
              size={ICON_SIZE_MAP[size]}
            />
          </Button>
          {description ? <Description>{description}</Description> : null}
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

function SelectItem({ children, className, ...props }: ListBoxItemProps) {
  const { size } = useThemeProps({ size: props.size });
  const textValue =
    props.textValue || (typeof children === "string" ? children : undefined);

  return (
    <ListBoxItem
      {...props}
      className={cnRenderProps(className, props.href ? "cursor-pointer" : "")}
      textValue={textValue}
    >
      {composeRenderProps(
        children,
        (renderedChildren, { selectionMode, isSelected }) => (
          <>
            {selectionMode !== "none" && (
              <span
                className={cx(
                  "hidden items-center group-data-rac/list-box-item:flex",
                  size === 1 ? "w-3" : "w-4"
                )}
              >
                {isSelected ? (
                  <CheckIcon
                    aria-hidden
                    size={ICON_SIZE_MAP[size]}
                    weight="bold"
                  />
                ) : null}
              </span>
            )}
            <span>{renderedChildren}</span>
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
