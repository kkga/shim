"use client"

import { cxRenderProps } from "@lib/style"
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
} from "@ui/Field"
import {
  Button as RACButton,
  ComboBox as RACComboBox,
  ComboBoxProps as RACComboBoxProps,
  ListBoxItemProps as RACListBoxItemProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import {
  ListBox,
  ListBoxItem,
  ListBoxSection,
  ListBoxSectionProps,
} from "./ListBox"
import { Popover } from "./Popover"

const style = tv({
  slots: {
    triggerButton: "flex items-center justify-center",
    triggerButtonContents:
      "text-neutral-text flex items-center justify-center bg-transparent",
    listBox: "max-h-[inherit] overflow-auto p-1 outline-none",
  },
  variants: {
    size: {
      1: {
        triggerButton: "size-6",
        triggerButtonContents: "rounded-xs size-5",
      },
      2: {
        triggerButton: "size-7",
        triggerButtonContents: "rounded-xs size-5",
      },
      3: {
        triggerButton: "size-8",
        triggerButtonContents: "rounded-xs size-6",
      },
      4: {
        triggerButton: "size-10",
        triggerButtonContents: "size-7 rounded-[3px]",
      },
    },
    isHovered: {
      true: { triggerButtonContents: "bg-neutral-bg-hover" },
    },
    isPressed: {
      true: { triggerButtonContents: "bg-neutral-bg-active" },
    },
    isDisabled: {
      true: { triggerButtonContents: "text-neutral-text-subtle" },
    },
  },
})

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
  ...props
}: ComboBoxProps<T>) {
  let themeProps = useThemeProps(props)
  let { labelPosition, size } = themeProps
  let { triggerButton, triggerButtonContents, listBox } = style({ size })

  return (
    <RACComboBox
      {...props}
      menuTrigger={menuTrigger}
      className={cxRenderProps(
        props.className,
        fieldLayoutStyle({ labelPosition }),
      )}
    >
      <Theme {...themeProps}>
        {label && <Label>{label}</Label>}
        <FieldGroup>
          <GroupInput />
          <RACButton className={triggerButton()}>
            {({ isHovered, isPressed, isDisabled }) => (
              <div
                className={triggerButtonContents({
                  isHovered,
                  isDisabled,
                  isPressed,
                })}
              >
                <CaretDown size={size === 1 ? 12 : 16} aria-hidden />
              </div>
            )}
          </RACButton>
        </FieldGroup>
        {description && <Description>{description}</Description>}
        <FieldError>{errorMessage}</FieldError>
        <Popover isNonModal>
          <ListBox items={items} className={listBox()}>
            {children}
          </ListBox>
        </Popover>
      </Theme>
    </RACComboBox>
  )
}

type ComboBoxItemProps = RACListBoxItemProps
function ComboBoxItem(props: ComboBoxItemProps) {
  return <ListBoxItem {...props} />
}

type ComboBoxSectionProps<T extends object> = ListBoxSectionProps<T>
function ComboBoxSection<T extends object>(props: ComboBoxSectionProps<T>) {
  return <ListBoxSection {...props} />
}

export { ComboBox, ComboBoxItem, ComboBoxSection }
export type { ComboBoxItemProps, ComboBoxProps, ComboBoxSectionProps }
