"use client";

import {
  DateField as RacDateField,
  type DateFieldProps as RacDateFieldProps,
  DateInput as RacDateInput,
  type DateInputProps as RacDateInputProps,
  DateSegment as RacDateSegment,
  type DateValue as RacDateValue,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import {
  Description,
  FieldError,
  type FieldProps,
  fieldLayoutStyle,
  inputBaseStyle,
  Label,
} from "@/shim-ui/field";
import { cnRenderProps } from "@/shim-ui/lib/style";
import {
  buildVariantOverrides,
  Theme,
  useThemeProps,
} from "@/shim-ui/lib/theme";

interface DateFieldProps<T extends RacDateValue>
  extends RacDateFieldProps<T>,
    FieldProps {}

function DateField<T extends RacDateValue>({
  label,
  description,
  errorMessage,
  ...props
}: DateFieldProps<T>) {
  const themeProps = useThemeProps({
    ...props,
    ...buildVariantOverrides("field", props.variant),
  });
  const { labelPosition } = themeProps;

  return (
    <RacDateField
      {...props}
      className={cnRenderProps(
        props.className,
        fieldLayoutStyle({ labelPosition })
      )}
    >
      <Theme {...themeProps}>
        {label ? <Label>{label}</Label> : null}
        <DateInput />
        {description ? <Description>{description}</Description> : null}
        <FieldError>{errorMessage}</FieldError>
      </Theme>
    </RacDateField>
  );
}

const dateInputStyle = tv({
  extend: inputBaseStyle,
  base: "flex items-center indent-0!",
  variants: {
    size: {
      1: "px-1",
      2: "px-1",
      3: "px-1.25",
      4: "px-1.5",
    },
  },
});

const segmentStyle = tv({
  base: "inline-flex items-center tabular-nums caret-transparent outline-0 forced-color-adjust-none data-[type=literal]:px-0 data-[type=literal]:text-neutral-text-subtle forced-colors:text-[ButtonText]",
  variants: {
    size: {
      1: "h-4 rounded-xs px-0.5",
      2: "h-5 rounded-xs px-1",
      3: "h-5.5 rounded-xs px-1.25",
      4: "h-7 rounded-[3px] px-1.5",
    },
    isPlaceholder: {
      true: "text-neutral-text-subtle",
    },
    isDisabled: {
      true: "text-neutral-text-subtle forced-colors:text-[GrayText]",
    },
    isHovered: {
      true: "bg-neutral-bg-hover",
    },
    isFocused: {
      true: "bg-accent-solid-hover text-white forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]",
    },
  },
});

function DateInput({
  className,
  ...props
}: Omit<RacDateInputProps, "children">) {
  const themeProps = useThemeProps();
  const { size, variants } = themeProps;

  return (
    <RacDateInput
      className={cnRenderProps(
        className,
        dateInputStyle({
          size,
          variant: variants.field,
        })
      )}
      {...props}
    >
      {(segment) => (
        <RacDateSegment
          className={(renderProps) =>
            segmentStyle({
              ...renderProps,
              size,
            })
          }
          segment={segment}
        />
      )}
    </RacDateInput>
  );
}

export { DateField, type DateFieldProps };
