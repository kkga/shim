"use client";

import { CaretDownIcon } from "@phosphor-icons/react";
import {
  Button as RacButton,
  ComboBox as RacComboBox,
  type ComboBoxProps as RacComboBoxProps,
  type ListBoxItemProps as RacListBoxItemProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import {
  Description,
  FieldError,
  FieldGroup,
  type FieldProps,
  fieldLayoutStyle,
  GroupInput,
  Label,
} from "@/components/field";
import {
  ListBox,
  ListBoxItem,
  ListBoxSection,
  type ListBoxSectionProps,
} from "@/components/list-box";
import { Popover } from "@/components/popover";
import { cxRenderProps } from "@/lib/style";
import { ICON_SIZE_MAP, Theme, useThemeProps } from "@/lib/theme";

const style = tv({
  slots: {
    triggerButton: "flex items-center justify-center",
    triggerButtonContents:
      "flex items-center justify-center bg-transparent text-neutral-text",
    listBox: "max-h-[inherit] overflow-auto p-1 outline-none",
  },
  variants: {
    size: {
      1: {
        triggerButton: "size-6",
        triggerButtonContents: "size-5 rounded-xs",
      },
      2: {
        triggerButton: "size-7",
        triggerButtonContents: "size-5 rounded-xs",
      },
      3: {
        triggerButton: "size-8",
        triggerButtonContents: "size-6 rounded-xs",
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
});

interface ComboBoxProps<T extends object>
  extends Omit<RacComboBoxProps<T>, "children">,
    FieldProps {
  children: React.ReactNode | ((item: T) => React.ReactNode);
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
  let themeProps = useThemeProps(props);
  let { labelPosition, size } = themeProps;
  let { triggerButton, triggerButtonContents, listBox } = style({ size });

  return (
    <RacComboBox
      {...props}
      className={cxRenderProps(
        props.className,
        fieldLayoutStyle({ labelPosition })
      )}
      menuTrigger={menuTrigger}
    >
      <Theme {...themeProps}>
        {label && <Label>{label}</Label>}
        <FieldGroup>
          <GroupInput />
          <RacButton className={triggerButton()}>
            {({ isHovered, isPressed, isDisabled }) => (
              <div
                className={triggerButtonContents({
                  isHovered,
                  isDisabled,
                  isPressed,
                })}
              >
                <CaretDownIcon aria-hidden size={ICON_SIZE_MAP[size]} />
              </div>
            )}
          </RacButton>
        </FieldGroup>
        {description && <Description>{description}</Description>}
        <FieldError>{errorMessage}</FieldError>
        <Popover isNonModal>
          <ListBox className={listBox()} items={items}>
            {children}
          </ListBox>
        </Popover>
      </Theme>
    </RacComboBox>
  );
}

interface ComboBoxItemProps extends RacListBoxItemProps {}
function ComboBoxItem(props: ComboBoxItemProps) {
  return <ListBoxItem {...props} />;
}

interface ComboBoxSectionProps<T extends object>
  extends ListBoxSectionProps<T> {}
function ComboBoxSection<T extends object>(props: ComboBoxSectionProps<T>) {
  return <ListBoxSection {...props} />;
}

export { ComboBox, ComboBoxItem, ComboBoxSection };
export type { ComboBoxItemProps, ComboBoxProps, ComboBoxSectionProps };
