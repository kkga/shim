"use client";

import {
  FieldError as RacFieldError,
  type FieldErrorProps as RacFieldErrorProps,
  Group as RacGroup,
  type GroupProps as RacGroupProps,
  Input as RacInput,
  type InputProps as RacInputProps,
  Label as RacLabel,
  type LabelProps as RacLabelProps,
  Text as RacText,
  TextArea as RacTextArea,
  type TextAreaProps as RacTextAreaProps,
  type TextProps as RacTextProps,
  type ValidationResult,
} from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";
import { cxRenderProps } from "@/shim-ui/lib/style";
import { useThemeProps } from "@/shim-ui/lib/theme";

interface FieldProps
  extends VariantProps<typeof fieldLayoutStyle>,
    VariantProps<typeof inputBaseStyle> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  placeholder?: string;
}

const fieldLayoutStyle = tv({
  base: ["group flex flex-col gap-1"],
  variants: {
    labelPosition: {
      top: "",
      side: "has-[label]:grid has-[label]:grid-cols-[1fr_2fr]",
    },
  },
  defaultVariants: { labelPosition: "top" },
});

const inputBaseStyle = tv({
  base: [
    "field-sizing-content border-none",
    // hovered
    "",
    // disabled
    "data-disabled:inset-ring data-disabled:inset-ring-neutral-line data-disabled:cursor-not-allowed data-disabled:bg-neutral-panel data-disabled:text-neutral-text-subtle data-disabled:shadow-none",
    // invalid
    "data-invalid:inset-ring data-invalid:inset-ring-danger-border data-invalid:bg-danger-panel",
    // focused
    "data-focused:-outline-offset-1 data-focused:outline-2 data-focused:outline-accent-focus-ring",
    // focus-visible
    "data-focus-visible:-outline-offset-1 data-focus-visible:outline-2 data-focus-visible:outline-accent-focus-ring",
    // focus-within
    "data-focus-within:-outline-offset-1 data-focus-within:outline-2 data-focus-within:outline-accent-focus-ring",
  ],
  variants: {
    variant: {
      classic: "bg-neutral-panel shadow-(--shadow-inner)",
      soft: "bg-neutral-bg",
      outline: "inset-ring inset-ring-neutral-border bg-transparent",
    },
    size: {
      // TODO: the field text size should match other components text size map (listbox, button, etc)
      1: "h-6 rounded indent-1.5 text-xs",
      2: "h-7 rounded indent-2 text-sm",
      3: "h-8 rounded-md indent-2.5 text-[15px] leading-normal",
      4: "h-10 rounded-lg indent-3 text-base",
    },
  },
  defaultVariants: { variant: "classic", size: 1 },
});

interface InputProps
  extends Omit<RacInputProps, "size">,
    VariantProps<typeof inputBaseStyle> {}

function Input({ size, variant, className, ...props }: InputProps) {
  let theme = useThemeProps({ size, fieldVariant: variant });

  return (
    <RacInput
      {...props}
      className={cxRenderProps(
        className,
        inputBaseStyle({ variant: theme.fieldVariant, size: theme.size })
      )}
    />
  );
}

const labelStyle = tv({
  base: [
    "max-w-fit self-start truncate font-book text-neutral-text",
    "data-disabled:text-neutral-text-subtle group-data-disabled:text-neutral-text-subtle peer-data-disabled:text-neutral-text-subtle",
  ],
  variants: {
    size: {
      1: "text-xs",
      2: "text-sm",
      3: "text-[15px] leading-normal",
      4: "text-base",
    },
    labelPosition: {
      top: "",
      side: "col-start-1 flex items-center self-start",
    },
  },
  compoundVariants: [
    { size: 1, labelPosition: "side", className: "min-h-6" },
    { size: 2, labelPosition: "side", className: "min-h-7" },
    { size: 3, labelPosition: "side", className: "min-h-8" },
    { size: 4, labelPosition: "side", className: "min-h-10" },
  ],
  defaultVariants: { size: 1, labelPosition: "top" },
});

interface LabelProps extends RacLabelProps, VariantProps<typeof labelStyle> {
  isRequired?: boolean;
}

function Label({
  size,
  labelPosition,
  children,
  isRequired,
  className,
  ...props
}: LabelProps) {
  let themeProps = useThemeProps({ size, labelPosition });

  return (
    <RacLabel
      {...props}
      className={labelStyle({
        size: themeProps.size,
        labelPosition: themeProps.labelPosition,
        className,
      })}
      slot="label"
    >
      {children}
      {isRequired && <span> *</span>}
    </RacLabel>
  );
}

const descriptionStyle = tv({
  base: [
    "col-start-2 text-neutral-text",
    "group-data-disabled:text-neutral-text-subtle peer-data-disabled:text-neutral-text-subtle",
  ],
  // TODO: size 2 doesn't look good in labelPosition side
  variants: {
    size: {
      1: "text-[11px]",
      2: "text-xs",
      3: "text-[13px]",
      4: "text-sm",
    },
  },
  defaultVariants: { size: 1 },
});

interface DescriptionProps
  extends RacTextProps,
    VariantProps<typeof descriptionStyle> {}

function Description({ size, className, ...props }: DescriptionProps) {
  let themeProps = useThemeProps({ size });

  return (
    <RacText
      {...props}
      className={descriptionStyle({ size: themeProps.size, className })}
      slot="description"
    />
  );
}

const fieldErrorStyle = tv({
  base: ["col-start-2 text-danger-text"],
  variants: {
    size: {
      1: "text-[11px]",
      2: "text-xs",
      3: "text-[13px]",
      4: "text-sm",
    },
  },
  defaultVariants: { size: 1 },
});

interface FieldErrorProps
  extends RacFieldErrorProps,
    VariantProps<typeof fieldErrorStyle> {}

function FieldError({ size, className, ...props }: FieldErrorProps) {
  let themeProps = useThemeProps({ size });

  return (
    <RacFieldError
      {...props}
      className={cxRenderProps(
        className,
        fieldErrorStyle({ size: themeProps.size })
      )}
    />
  );
}

const fieldGroupStyle = tv({
  extend: inputBaseStyle,
  base: ["group flex items-center"],
  variants: {
    size: {
      1: "h-6",
      2: "h-7",
      3: "h-8",
      4: "h-10",
    },
  },
  defaultVariants: {
    size: 1,
  },
});

interface FieldGroupProps
  extends RacGroupProps,
    VariantProps<typeof fieldGroupStyle> {}

function FieldGroup({ size, variant, className, ...props }: FieldGroupProps) {
  let themeProps = useThemeProps({ size, fieldVariant: variant });

  return (
    <RacGroup
      {...props}
      className={cxRenderProps(
        className,
        fieldGroupStyle({
          size: themeProps.size,
          variant: themeProps.fieldVariant,
        })
      )}
    />
  );
}

const groupInputStyle = tv({
  base: [
    "field-sizing-content min-w-8 flex-1 appearance-none self-stretch border-none text-inherit outline-0",
    "placeholder:text-neutral-text-subtle autofill:bg-transparent [&::-webkit-search-cancel-button]:hidden",
    "data-disabled:cursor-not-allowed group-data-disabled:cursor-not-allowed",
  ],
  variants: {
    size: {
      1: "indent-1.5",
      2: "indent-[7px]",
      3: "indent-2",
      4: "indent-3",
    },
  },
  defaultVariants: { size: 1 },
});

function GroupInput({ className, ...props }: Omit<InputProps, "variant">) {
  let themeProps = useThemeProps({ ...props });
  let { size } = themeProps;

  return (
    <RacInput
      {...props}
      className={cxRenderProps(className, groupInputStyle({ size }))}
    />
  );
}

function TextAreaInput(props: RacTextAreaProps) {
  return <RacTextArea {...props} className={cxRenderProps(props.className)} />;
}

export {
  Description,
  FieldError,
  FieldGroup,
  fieldLayoutStyle,
  GroupInput,
  Input,
  inputBaseStyle,
  Label,
  TextAreaInput,
  type FieldProps,
};
