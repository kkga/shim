"use client";

import { useEffect, useState } from "react";
import type { ColorSpace } from "react-aria-components";
import {
  getColorChannels,
  Button as RacButton,
  ColorPicker as RacColorPicker,
  type ColorPickerProps as RacColorPickerProps,
  DialogTrigger as RacDialogTrigger,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { ColorArea } from "@/shim-ui/color-area";
import { ColorField } from "@/shim-ui/color-field";
import { ColorSlider } from "@/shim-ui/color-slider";
import { ColorSwatch } from "@/shim-ui/color-swatch";
import { focusStyle } from "@/shim-ui/lib/style";
import { Popover } from "@/shim-ui/popover";
import { Select, SelectItem } from "@/shim-ui/select";
import { Separator } from "@/shim-ui/separator";

const buttonStyles = tv({
  extend: focusStyle,
  base: "flex cursor-default items-center gap-2 rounded text-gray-800 text-sm dark:text-gray-200",
});

interface ColorPickerProps extends RacColorPickerProps {
  children?: React.ReactNode;
}

function ColorEditor() {
  let [mode, setMode] = useState<ColorSpace | "hex">("hsb");
  let [space, setSpace] = useState<ColorSpace>("hsb");

  useEffect(() => {
    if (mode === "hex") {
      setSpace("rgb");
    } else {
      setSpace(mode);
    }
  }, [mode]);

  return (
    <div className="flex flex-col gap-3 p-3">
      <div className="flex gap-3">
        <ColorArea
          colorSpace={space === "hsl" ? "hsl" : "hsb"}
          xChannel="saturation"
          yChannel={space === "hsl" ? "lightness" : "brightness"}
        />
        <ColorSlider
          channel="hue"
          colorSpace="hsb"
          orientation="vertical"
          size={1}
        />
        <ColorSlider channel="alpha" orientation="vertical" size={1} />
      </div>

      <Separator />

      <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-2">
        <Select
          aria-label="Color mode"
          onSelectionChange={(key) => setMode(key as ColorSpace)}
          selectedKey={mode}
          size={1}
        >
          <SelectItem id="hsb">HSB</SelectItem>
          <SelectItem id="hsl">HSL</SelectItem>
          <SelectItem id="rgb">RGB</SelectItem>
          <SelectItem id="hex">HEX</SelectItem>
        </Select>

        {mode === "hex" ? (
          <ColorField className="col-span-3" size={1} />
        ) : (
          getColorChannels(space).map((channel) => (
            <ColorField
              channel={channel}
              colorSpace={space}
              key={channel}
              size={1}
            />
          ))
        )}
        <ColorField channel="alpha" colorSpace={space} size={1} />
      </div>
    </div>
  );
}

function ColorPicker({ children, ...props }: ColorPickerProps) {
  return (
    <RacColorPicker {...props}>
      <RacDialogTrigger>
        <RacButton className={buttonStyles}>
          <ColorSwatch />
        </RacButton>
        <Popover placement="bottom start">
          {children || <ColorEditor />}
        </Popover>
      </RacDialogTrigger>
    </RacColorPicker>
  );
}

export { ColorPicker, type ColorPickerProps };
