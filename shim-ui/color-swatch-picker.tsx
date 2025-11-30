"use client";

import {
  ColorSwatchPicker as RacColorSwatchPicker,
  ColorSwatchPickerItem as RacColorSwatchPickerItem,
  type ColorSwatchPickerItemProps as RacColorSwatchPickerItemProps,
  type ColorSwatchPickerProps as RacColorSwatchPickerProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { ColorSwatch } from "@/shim-ui/color-swatch";
import { cnRenderProps } from "@/shim-ui/lib/style";

function ColorSwatchPicker({
  children,
  ...props
}: Omit<RacColorSwatchPickerProps, "layout">) {
  return (
    <RacColorSwatchPicker
      {...props}
      className={cnRenderProps(props.className, "flex gap-1")}
    >
      {children}
    </RacColorSwatchPicker>
  );
}

const style = tv({
  slots: {
    item: "focus-ring relative rounded",
    selectedIndicator:
      "-outline-offset-4 absolute top-0 left-0 h-full w-full rounded border-2 border-black outline-2 outline-white forced-color-adjust-none dark:border-white dark:outline-black",
  },
});

function ColorSwatchPickerItem(props: RacColorSwatchPickerItemProps) {
  const { item, selectedIndicator } = style();

  return (
    <RacColorSwatchPickerItem {...props} className={item()}>
      {({ isSelected }) => (
        <>
          <ColorSwatch />
          {isSelected ? <div className={selectedIndicator()} /> : null}
        </>
      )}
    </RacColorSwatchPickerItem>
  );
}

export { ColorSwatchPicker, ColorSwatchPickerItem };
