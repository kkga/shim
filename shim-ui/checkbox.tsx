"use client";

import { CheckIcon, MinusIcon } from "@phosphor-icons/react";
import {
  composeRenderProps,
  Checkbox as RacCheckbox,
  CheckboxGroup as RacCheckboxGroup,
  type CheckboxGroupProps as RacCheckboxGroupProps,
  type CheckboxProps as RacCheckboxProps,
} from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";
import { cxRenderProps, focusStyle } from "@/shim-ui/lib/style";
import { Theme, useThemeProps } from "@/shim-ui/lib/theme";
import {
  Description,
  FieldError,
  type FieldProps,
  fieldLayoutStyle,
  Label,
} from "./field";

interface CheckboxGroupProps extends RacCheckboxGroupProps, FieldProps {}

function CheckboxGroup({
  className,
  label,
  description,
  errorMessage,
  ...props
}: CheckboxGroupProps) {
  let themeProps = useThemeProps({ ...props, fieldVariant: props.variant });
  let { labelPosition } = themeProps;

  return (
    <RacCheckboxGroup
      {...props}
      className={cxRenderProps(className, fieldLayoutStyle({ labelPosition }))}
    >
      {composeRenderProps(props.children, (children) => (
        <Theme {...themeProps}>
          {label && <Label>{label}</Label>}
          <div className="flex flex-col">{children}</div>
          {description && <Description>{description}</Description>}
          <FieldError>{errorMessage}</FieldError>
        </Theme>
      ))}
    </RacCheckboxGroup>
  );
}

const checkboxStyle = tv({
  slots: {
    container: ["group flex text-neutral-text outline-none"],
    checkbox: [
      focusStyle(),
      "flex shrink-0 items-center justify-center outline-offset-1",
    ],
  },
  variants: {
    isDisabled: {
      true: {
        container: "cursor-not-allowed text-neutral-text-subtle",
      },
    },
    size: {
      1: {
        container: "gap-2 py-1 text-xs",
        checkbox: "size-4 rounded-[3px] p-px",
      },
      2: {
        container: "gap-2 py-[5px] text-[13px]",
        checkbox: "size-[18px] rounded-[3px]",
      },
      3: {
        container: "gap-2 py-1.5 text-sm",
        checkbox: "size-5 rounded",
      },
      4: {
        container: "gap-2.5 py-2 text-base",
        checkbox: "size-6 rounded-md",
      },
    },
    variant: {
      classic: {
        checkbox: [
          "bg-neutral-bg-subtle text-white shadow-[var(--shadow-inner)]",
          // pressed
          "group-data-pressed:bg-neutral-bg-active",
          // selected
          "group-data-selected:bg-accent-solid",
          // indeterminate
          "group-data-indeterminate:bg-accent-solid",
        ],
      },
      soft: {
        checkbox: [
          "inset-ring-0 bg-neutral-bg-hover text-accent-text-contrast",
          // pressed
          "group-data-pressed:bg-neutral-bg-active",
          // selected
          "group-data-selected:bg-accent-bg-active",
          // indeterminate
          "group-data-indeterminate:bg-accent-bg-active",
        ],
      },
      outline: {
        checkbox: [
          "inset-ring-1 inset-ring-neutral-border bg-transparent text-accent-text-contrast",
          // pressed
          "group-data-pressed:bg-neutral-bg-active",
          // selected
          "group-data-selected:inset-ring-neutral-border-hover group-data-selected:bg-transparent",
          // indeterminate
          "group-data-indeterminate:inset-ring-neutral-border-hover group-data-indeterminate:bg-transparent",
        ],
      },
    },
  },
  compoundVariants: [
    {
      isDisabled: true,
      variant: ["classic", "soft", "outline"],
      class: {
        checkbox:
          "inset-ring-1! inset-ring-neutral-line! bg-neutral-bg-subtle! text-neutral-text-subtle! shadow-none!",
      },
    },
  ],
});

interface CheckboxProps
  extends RacCheckboxProps,
    VariantProps<typeof checkboxStyle> {
  description?: string;
}

function Checkbox({
  size: _size,
  variant: _variant,
  description,
  ...props
}: CheckboxProps) {
  let themeProps = useThemeProps({
    ...props,
    fieldVariant: _variant,
    size: _size,
  });
  let { size, fieldVariant } = themeProps;
  let { container, checkbox } = checkboxStyle({ size, variant: fieldVariant });

  return (
    <RacCheckbox
      {...props}
      className={composeRenderProps(
        props.className,
        (className, { isDisabled }) => container({ isDisabled, className })
      )}
    >
      {composeRenderProps(
        props.children,
        (children, { isDisabled, isSelected, isIndeterminate }) => (
          <>
            <div className={checkbox({ isDisabled })}>
              {(() => {
                if (isIndeterminate) {
                  return <MinusIcon size={16} />;
                }
                if (isSelected) {
                  return <CheckIcon size={16} weight="bold" />;
                }
                return null;
              })()}
            </div>
            <div className="flex flex-col gap-1">
              {children}
              {description && <Description>{description}</Description>}
            </div>
          </>
        )
      )}
    </RacCheckbox>
  );
}

export { Checkbox, CheckboxGroup };
export type { CheckboxGroupProps, CheckboxProps };
