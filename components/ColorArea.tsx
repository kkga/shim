"use client";

import {
  ColorArea as RacColorArea,
  type ColorAreaProps as RacColorAreaProps,
} from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";
import { cxRenderProps } from "@/lib/style";
import { ColorThumb } from "./ColorThumb";

const style = tv({
  base: "size-56 rounded-sm bg-neutral-bg-subtle shadow-inner",
});

interface ColorAreaProps
  extends RacColorAreaProps,
    VariantProps<typeof style> {}

function ColorArea(props: ColorAreaProps) {
  return (
    <RacColorArea
      {...props}
      className={cxRenderProps(props.className, style())}
      style={({ defaultStyle, isDisabled }) => ({
        ...defaultStyle,
        background: isDisabled ? undefined : defaultStyle.background,
      })}
    >
      <ColorThumb variant="loupe" />
    </RacColorArea>
  );
}

export { ColorArea, type ColorAreaProps };
