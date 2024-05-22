"use client"

import { cx, cxRenderProps } from "@lib/style"
import { Theme, useThemeProps } from "@lib/theme"
import { CaretDown, Check } from "@phosphor-icons/react"
import { Button } from "@ui/Button"
import type { ReactNode } from "react"
import {
  Select as RACSelect,
  SelectValue as RACSelectValue,
  composeRenderProps,
  type SelectProps as RACSelectProps,
} from "react-aria-components"
import {
  Description,
  FieldError,
  FieldProps,
  Label,
  fieldLayoutStyle,
} from "./Field"
import {
  ListBox,
  ListBoxItem,
  ListBoxItemProps,
  ListBoxSection,
  ListBoxSectionProps,
} from "./ListBox"
import { Popover } from "./Popover"

interface SelectProps<T extends object>
  extends Omit<RACSelectProps<T>, "children">,
    FieldProps {
  items?: Iterable<T>
  children: ReactNode | ((item: T) => ReactNode)
}

function Select<T extends object>({
  label,
  description,
  errorMessage,
  children,
  items,
  size,
  labelPosition,
  variant,
  ...props
}: SelectProps<T>) {
  let themeProps = useThemeProps({ size, labelPosition, fieldVariant: variant })

  return (
    <RACSelect
      {...props}
      className={cxRenderProps(
        props.className,
        fieldLayoutStyle({ labelPosition: themeProps.labelPosition }),
      )}
    >
      {() => (
        <Theme {...themeProps}>
          {label && <Label>{label}</Label>}
          <Button intent="neutral">
            <RACSelectValue className="flex-1 truncate text-left font-normal data-placeholder:text-neutral-placeholder" />
            <CaretDown
              size={themeProps.size === 1 ? 12 : 16}
              aria-hidden
              className="shrink-0 text-current"
            />
          </Button>
          {description && <Description>{description}</Description>}
          <FieldError>{errorMessage}</FieldError>
          <Popover>
            <ListBox
              items={items}
              className="max-h-[inherit] overflow-auto p-1 outline-none"
            >
              {children}
            </ListBox>
          </Popover>
        </Theme>
      )}
    </RACSelect>
  )
}

function SelectItem({ className, href, ...props }: ListBoxItemProps) {
  let { size } = useThemeProps({ size: props.size })
  let textValue =
    props.textValue ||
    (typeof props.children === "string" ? props.children : undefined)

  return (
    <ListBoxItem {...props} textValue={textValue}>
      {composeRenderProps(
        props.children,
        (children, { selectionMode, isSelected }) => (
          <>
            {selectionMode !== "none" && !href && (
              <span
                className={cx("flex items-center", size === 1 ? "w-3" : "w-4")}
              >
                {isSelected && (
                  <Check
                    size={size === 1 ? 12 : 16}
                    aria-hidden
                    weight="bold"
                  />
                )}
              </span>
            )}
            <span
              className={cx(
                "flex flex-1 items-center truncate",
                size === 1 ? "gap-2" : "gap-2.5",
              )}
            >
              {children}
            </span>
          </>
        ),
      )}
    </ListBoxItem>
  )
}

function SelectSection<T extends object>(props: ListBoxSectionProps<T>) {
  return <ListBoxSection {...props} />
}

export { Select, SelectItem, SelectSection, type SelectProps }
