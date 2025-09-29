"use client";

import {
  ColorSwatch as RacColorSwatch,
  type ColorSwatchProps as RacColorSwatchProps,
} from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";
import { cxRenderProps } from "@/lib/style";
import { useThemeProps } from "@/lib/theme";

const style = tv({
  base: "rounded shadow-inner",
  variants: {
    size: {
      1: "size-6 rounded-sm",
      2: "size-7 rounded-sm",
      3: "size-8 rounded-md",
      4: "size-10 rounded-lg",
    },
  },
  defaultVariants: {
    size: 1,
  },
});

interface ColorSwatchProps
  extends RacColorSwatchProps,
    VariantProps<typeof style> {}

function ColorSwatch(props: ColorSwatchProps) {
  let { size } = useThemeProps(props);

  return (
    <RacColorSwatch
      {...props}
      className={cxRenderProps(props.className, style({ size }))}
      style={({ color }) => ({
        background: `linear-gradient(${color}, ${color}),
          repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 14px 14px`,
      })}
    />
  );
}

export { ColorSwatch };
