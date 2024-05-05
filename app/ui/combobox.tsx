import {
  Button,
  Collection,
  ComboBox,
  Group,
  Header,
  Input,
  ListBox,
  ListBoxItem,
  Popover,
  Section,
  Separator,
  type InputProps,
  type ListBoxItemProps,
  type ListBoxProps,
  type PopoverProps,
  type SeparatorProps,
} from "react-aria-components"

import { animateMountStyle, compose, cva, cx, cxRenderProps } from "@lib/utils"
import { CaretDown, Check } from "@phosphor-icons/react"

const Combobox = ComboBox

const ComboboxSection = Section

const ComboboxCollection = Collection

const ComboboxInput = ({ className, ...props }: InputProps) => (
  <Group
    className={cx(
      "group flex h-6 items-center justify-between overflow-hidden rounded-md border border-neutral-border text-xs group-data-[disabled]:cursor-not-allowed group-data-[disabled]:opacity-50 data-[focus-within]:outline data-[focus-within]:outline-accent-focus-ring",
    )}
  >
    <Input
      className={(values) =>
        cx(
          "flex w-full border-none px-2 text-xs placeholder:text-neutral-placeholder data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[focused]:outline-none",
          typeof className === "function" ? className(values) : className,
        )
      }
      {...props}
    />
    <Button className="px-1">
      <CaretDown aria-hidden="true" />
    </Button>
  </Group>
)

export interface ComboboxHeaderProps
  extends React.ComponentPropsWithoutRef<typeof Header> {}

const ComboboxHeader = ({ className, ...props }: ComboboxHeaderProps) => (
  <Header
    className={cx(
      "flex h-6 items-center px-2 text-xs font-medium text-neutral-text-contrast",
      className,
    )}
    {...props}
  />
)

const ComboboxItem = ({ className, children, ...props }: ListBoxItemProps) => (
  <ListBoxItem
    className={(values) =>
      cx(
        "relative flex h-6 w-full cursor-default items-center rounded pl-6 text-xs font-medium outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[focused]:bg-neutral-bg-hover data-[selected]:bg-neutral-bg-active",
        typeof className === "function" ? className(values) : className,
      )
    }
    {...props}
  >
    {(values) => (
      <>
        {values.isSelected && (
          <span className="absolute left-1 flex items-center justify-center">
            <Check />
          </span>
        )}

        {typeof children === "function" ? children(values) : children}
      </>
    )}
  </ListBoxItem>
)

const ComboboxSeparator = ({ className, ...props }: SeparatorProps) => (
  <Separator className={cx("h-px bg-neutral-solid/20", className)} {...props} />
)

const popoverStyles = compose(
  animateMountStyle,
  cva({
    base: [
      "relative z-50 w-[var(--trigger-width)] overflow-y-auto rounded-md bg-neutral-bg-subtle text-neutral-text ring shadow-md ring-neutral-solid/20",
      // placement offset
      "data-[placement=bottom]:translate-y-1 data-[placement=left]:-translate-x-1 data-[placement=right]:translate-x-1 data-[placement=top]:-translate-y-1",
    ],
  }),
)

const ComboboxPopover = ({ className, ...props }: PopoverProps) => (
  <Popover className={cxRenderProps(className, popoverStyles())} {...props} />
)

const ComboboxListBox = <T extends object>({
  className,
  ...props
}: ListBoxProps<T>) => (
  <ListBox
    className={cxRenderProps(className, "flex flex-col gap-1 p-1")}
    {...props}
  />
)

export {
  Combobox,
  ComboboxCollection,
  ComboboxHeader,
  ComboboxInput,
  ComboboxItem,
  ComboboxListBox,
  ComboboxPopover,
  ComboboxSection,
  ComboboxSeparator,
}
