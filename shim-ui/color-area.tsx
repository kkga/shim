"use client";

import {
  ColorArea as RacColorArea,
  type ColorAreaProps as RacColorAreaProps,
  ColorThumb as RacColorThumb,
  type ColorThumbProps as RacColorThumbProps,
} from "react-aria-components";
import { type ClassValue, tv, type VariantProps } from "tailwind-variants";
import { cnRenderProps } from "@/shim-ui/lib/style";
import type { Size } from "@/shim-ui/lib/theme";

const thumbStyle = tv({
  base: "focus-ring top-[50%] left-[50%] rounded-full border-3 border-white",
  variants: {
    size: {
      1: "size-5",
      2: "size-6",
      3: "size-7",
      4: "size-9",
    } satisfies Record<Size, ClassValue>,
  },
});

interface ColorThumbProps
  extends RacColorThumbProps,
    VariantProps<typeof thumbStyle> {}

function ColorThumb({ size, ...props }: ColorThumbProps) {
  return (
    <RacColorThumb
      {...props}
      className={() => thumbStyle({ size })}
      style={({ defaultStyle }) => ({
        ...defaultStyle,
        backgroundImage:
          "repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px",
        boxShadow:
          "0 0 0 1px var(--black-a3), var(--shadow-inner), var(--shadow-xs)",
      })}
    />
  );
}

const areaStyle = tv({
  base: "size-56 rounded-sm bg-neutral-panel shadow-inner",
});

interface ColorAreaProps
  extends RacColorAreaProps,
    VariantProps<typeof areaStyle> {}

function ColorArea(props: ColorAreaProps) {
  return (
    <RacColorArea
      {...props}
      className={cnRenderProps(props.className, areaStyle())}
      style={({ defaultStyle, isDisabled }) => ({
        ...defaultStyle,
        background: isDisabled ? undefined : defaultStyle.background,
      })}
    >
      <ColorThumb size={1} />
    </RacColorArea>
  );
}

export { ColorArea, type ColorAreaProps };
