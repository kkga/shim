"use client";

import {
  TextField as RacTextField,
  type TextFieldProps as RacTextFieldProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import {
  Description,
  FieldError,
  type FieldProps,
  fieldLayoutStyle,
  inputBaseStyle,
  Label,
  TextAreaInput,
} from "@/shim-ui/field";
import { cnRenderProps } from "@/shim-ui/lib/style";
import {
  buildVariantOverrides,
  Theme,
  useThemeProps,
} from "@/shim-ui/lib/theme";

interface TextAreaProps extends RacTextFieldProps, FieldProps {}

const textAreaStyle = tv({
  extend: inputBaseStyle,
  base: "h-auto",
  variants: {
    size: {
      1: "min-h-12 px-1.5 py-1 indent-0",
      2: "min-h-16 px-2 py-1.5 indent-0",
      3: "min-h-20 px-2 py-1.5 indent-0",
    },
  },
  defaultVariants: {
    size: 1,
  },
});

function TextArea({
  label,
  description,
  errorMessage,
  placeholder,
  className,
  ...props
}: TextAreaProps) {
  let themeProps = useThemeProps({
    ...props,
    ...buildVariantOverrides("field", props.variant),
  });
  let { labelPosition, size, variants } = themeProps;

  return (
    <RacTextField
      {...props}
      className={cnRenderProps(className, fieldLayoutStyle({ labelPosition }))}
    >
      <Theme {...themeProps}>
        {label ? <Label>{label}</Label> : null}
        <TextAreaInput
          className={textAreaStyle({ size, variant: variants.field })}
          placeholder={placeholder}
        />
        {description ? <Description>{description}</Description> : null}
        {errorMessage ? <FieldError>{errorMessage}</FieldError> : null}
      </Theme>
    </RacTextField>
  );
}

export { TextArea, type TextAreaProps };
