"use client";

import {
  Form as RacForm,
  type FormProps as RacFormProps,
} from "react-aria-components";
import { cx } from "@/shim-ui/lib/style";
import {
  Theme,
  type ThemeContextProps,
  useThemeProps,
} from "@/shim-ui/lib/theme";

function Form({
  className,
  children,
  labelPosition,
  fieldVariant,
  buttonVariant,
  size,
  ...props
}: RacFormProps & Partial<ThemeContextProps>) {
  let themeProps = useThemeProps({
    labelPosition,
    fieldVariant,
    buttonVariant,
    size,
  });

  return (
    <RacForm {...props} className={cx("flex flex-col gap-3", className)}>
      <Theme {...themeProps}>{children}</Theme>
    </RacForm>
  );
}

export { Form };
