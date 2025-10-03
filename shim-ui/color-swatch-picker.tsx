"use client";

import {
  ColorSwatchPicker as RacColorSwatchPicker,
  ColorSwatchPickerItem as RacColorSwatchPickerItem,
  type ColorSwatchPickerItemProps as RacColorSwatchPickerItemProps,
  type ColorSwatchPickerProps as RacColorSwatchPickerProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { cxRenderProps, focusStyle } from "@/shim-ui/lib/style";
import { ColorSwatch } from "./color-swatch";

function ColorSwatchPicker({
  children,
  ...props
}: Omit<RacColorSwatchPickerProps, "layout">) {
  return (
    <RacColorSwatchPicker
      {...props}
      className={cxRenderProps(props.className, "flex gap-1")}
    >
      {children}
    </RacColorSwatchPicker>
  );
}

const itemStyle = tv({
  extend: focusStyle,
  base: "relative rounded",
});

function ColorSwatchPickerItem(props: RacColorSwatchPickerItemProps) {
  return (
    <RacColorSwatchPickerItem {...props} className={itemStyle()}>
      {({ isSelected }) => (
        <>
          <ColorSwatch />
          {isSelected && (
            <div className="-outline-offset-4 absolute top-0 left-0 h-full w-full rounded border-2 border-black outline-2 outline-white forced-color-adjust-none dark:border-white dark:outline-black" />
          )}
        </>
      )}
    </RacColorSwatchPickerItem>
  );
}

export { ColorSwatchPicker, ColorSwatchPickerItem };
