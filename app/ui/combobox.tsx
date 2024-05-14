"use client"

import { compose, cva, cx, cxRenderProps } from "@lib/styleUtils"
import { CaretDown } from "@phosphor-icons/react"
import {
  Description,
  FieldContext,
  FieldError,
  FieldGroup,
  FieldProps,
  Input,
  Label,
  fieldLayoutStyle,
  inputBaseStyle,
  inputWithinGroupStyle,
  useFieldProps,
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

const groupStyle = compose(
  inputBaseStyle,
  cva({
    base: ["group flex items-center"],
    variants: {
      size: {
        1: "h-6 pr-0.5 gap-0.5",
        2: "h-7 pr-1 gap-1",
        3: "h-8 pr-1 gap-1",
      },
    },
    defaultVariants: {
      size: 1,
    },
  }),
)

function ComboBox<T extends object>({
  label,
  description,
  errorMessage,
  children,
  items,
  menuTrigger = "focus",
  ...props
}: ComboBoxProps<T>) {
  let { labelPosition, size, variant } = useFieldProps(props)

  return (
    <RACComboBox
      {...props}
      menuTrigger={menuTrigger}
      className={cxRenderProps(
        props.className,
        fieldLayoutStyle({ labelPosition }),
      )}
    >
      {({ isDisabled }) => (
        <FieldContext.Provider value={{ size, variant, labelPosition }}>
          {label && <Label>{label}</Label>}
          <FieldGroup
            className={(renderProps) =>
              groupStyle({ size, variant, ...renderProps })
            }
          >
            <Input className={inputWithinGroupStyle({ size })} />
            <RACButton
              className={cx(
                "flex items-center justify-center bg-transparent text-neutral-text data-hovered:bg-neutral-bg-hover data-pressed:bg-neutral-bg-active",
                isDisabled && "text-neutral-placeholder",
                size === 1 && "size-5 rounded-sm",
                size === 2 && "size-5 rounded-sm",
                size === 3 && "size-6 rounded-[3px]",
              )}
            >
              <CaretDown size={size === 1 ? 14 : 16} aria-hidden />
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
        </FieldContext.Provider>
      )}
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
