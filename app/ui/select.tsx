"use client"

import { cx, cxRenderProps } from "@lib/utils"
import { CaretDown } from "@phosphor-icons/react"
import { Button } from "@ui/button"
import { Description, FieldError, Label } from "@ui/field"
import {
  ListBox,
  ListBoxItem,
  ListBoxSection,
  ListBoxSectionProps,
} from "@ui/listbox"
import type {
  ListBoxItemProps as RACListBoxItemProps,
  SelectProps as RACSelectProps,
  ValidationResult as RACValidationResult,
} from "react-aria-components"
import {
  Popover as RACPopover,
  Select as RACSelect,
  SelectValue as RACSelectValue,
} from "react-aria-components"
import { popoverStyle } from "./popover"

interface SelectProps<T extends object>
  extends Omit<RACSelectProps<T>, "children"> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: RACValidationResult) => string)
  items?: Iterable<T>
  children: React.ReactNode | ((item: T) => React.ReactNode)
}

function Select<T extends object>({
  label,
  description,
  errorMessage,
  children,
  items,
  ...props
}: SelectProps<T>) {
  return (
    <RACSelect
      {...props}
      className={cxRenderProps(props.className, "group flex flex-col gap-1.5")}
    >
      {label && <Label>{label}</Label>}
      <Button className="justify-between" intent="neutral">
        <RACSelectValue className="flex-1 truncate text-left text-sm font-normal data-[placeholder]:text-neutral-placeholder" />
        <CaretDown
          size={12}
          weight="bold"
          aria-hidden
          className="text-neutral-placeholder"
        />
      </Button>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
      <RACPopover
        offset={4}
        className={cx(popoverStyle(), "min-w-[var(--trigger-width)]")}
      >
        <ListBox
          items={items}
          className="max-h-[inherit] overflow-auto p-1 outline-none"
        >
          {children}
        </ListBox>
      </RACPopover>
    </RACSelect>
  )
}

function SelectItem(props: RACListBoxItemProps) {
  return <ListBoxItem {...props} />
}

function SelectSection<T extends object>(props: ListBoxSectionProps<T>) {
  return <ListBoxSection {...props} />
}

export { Select, SelectItem, SelectSection }
export type { SelectProps }
