"use client";

import {
  Form as RacForm,
  type FormProps as RacFormProps,
} from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";
import { Theme, useThemeProps } from "@/shim-ui/lib/theme";

const style = tv({
  base: "flex flex-col",
  variants: {
    size: {
      1: "gap-2",
      2: "gap-3",
      3: "gap-4",
      4: "gap-5",
    },
  },
  defaultVariants: {
    size: 1,
  },
});

interface FormProps extends RacFormProps, VariantProps<typeof style> {}

function Form({ className, children, ...props }: FormProps) {
  const themeProps = useThemeProps({
    size: props.size,
  });

  return (
    <RacForm {...props} className={style({ size: themeProps.size, className })}>
      <Theme {...themeProps}>{children}</Theme>
    </RacForm>
  );
}

export { Form };
