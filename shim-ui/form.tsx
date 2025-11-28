"use client";

import {
  Form as RacForm,
  type FormProps as RacFormProps,
} from "react-aria-components";
import { cn } from "tailwind-variants";
import {
  Theme,
  type ThemeContextProps,
  useThemeProps,
} from "@/shim-ui/lib/theme";

function Form({
  className,
  children,
  labelPosition,
  size,
  variants,
  ...props
}: RacFormProps & Partial<ThemeContextProps>) {
  let themeProps = useThemeProps({
    labelPosition,
    size,
    variants,
  });

  return (
    <RacForm {...props} className={cn("flex flex-col gap-3", className)}>
      <Theme {...themeProps}>{children}</Theme>
    </RacForm>
  );
}

export { Form };
