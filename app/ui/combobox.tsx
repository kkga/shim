"use client"

import { cx, cxRenderProps } from "@lib/style"
import { Theme, useThemeProps } from "@lib/theme"
import { CaretDown } from "@phosphor-icons/react"
import {
  Description,
  FieldError,
  FieldGroup,
  FieldProps,
  GroupInput,
  Label,
  fieldLayoutStyle,
} from "@ui/field"
import {
  Button as RACButton,
  ComboBox as RACComboBox,
  ComboBoxProps as RACComboBoxProps,
  ListBoxItemProps as RACListBoxItemProps,
} from "react-aria-components"
import {
  ListBox,
  ListBoxItem,
  ListBoxSection,
  ListBoxSectionProps,
} from "./listbox"
import { Popover } from "./popover"

interface ComboBoxProps<T extends object>
  extends Omit<RACComboBoxProps<T>, "children">,
    FieldProps {
  children: React.ReactNode | ((item: T) => React.ReactNode)
}

function ComboBox<T extends object>({
  label,
  description,
  errorMessage,
  children,
  items,
  menuTrigger = "focus",
  labelPosition,
  size,
  variant,
  ...props
}: ComboBoxProps<T>) {
  let themeProps = useThemeProps({ size, labelPosition, fieldVariant: variant })

  return (
    <RACComboBox
      {...props}
      menuTrigger={menuTrigger}
      className={cxRenderProps(
        props.className,
        fieldLayoutStyle({ labelPosition: themeProps.labelPosition }),
      )}
    >
      <Theme {...themeProps}>
        {label && <Label>{label}</Label>}
        <FieldGroup>
          <GroupInput />
          <RACButton
            className={cx(
              "flex items-center justify-center",
              themeProps.size === 1 && "size-6",
              themeProps.size === 2 && "size-7",
              themeProps.size === 3 && "size-8",
            )}
          >
            {({ isHovered, isPressed, isDisabled }) => (
              <div
                className={cx(
                  "flex items-center justify-center bg-transparent text-neutral-text",
                  themeProps.size === 1 && "size-5 rounded-sm",
                  themeProps.size === 2 && "size-5 rounded-sm",
                  themeProps.size === 3 && "size-6 rounded-[3px]",
                  isHovered && "bg-neutral-bg-hover",
                  isPressed && "bg-neutral-bg-active",
                  isDisabled && "text-neutral-placeholder",
                )}
              >
                <CaretDown size={themeProps.size === 1 ? 12 : 16} aria-hidden />
              </div>
            )}
          </RACButton>
        </FieldGroup>
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
    </RACComboBox>
  )
}

function ComboBoxItem(props: RACListBoxItemProps) {
  return <ListBoxItem {...props} />
}

function ComboBoxSection<T extends object>(props: ListBoxSectionProps<T>) {
  return <ListBoxSection {...props} />
}

export { ComboBox, ComboBoxItem, ComboBoxSection, type ComboBoxProps }
