"use client"

import { focusStyle } from "@/lib/style"
import { useEffect, useState } from "react"
import type { ColorSpace } from "react-aria-components"
import {
  getColorChannels,
  Button as RACButton,
  ColorPicker as RACColorPicker,
  ColorPickerProps as RACColorPickerProps,
  DialogTrigger as RACDialogTrigger,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import { ColorArea } from "./ColorArea"
import { ColorField } from "./ColorField"
import { ColorSlider } from "./ColorSlider"
import { ColorSwatch } from "./ColorSwatch"
import { Popover } from "./Popover"
import { Select, SelectItem } from "./Select"
import { Separator } from "./Separator"

const buttonStyles = tv({
  extend: focusStyle,
  base: "flex cursor-default items-center gap-2 rounded text-sm text-gray-800 dark:text-gray-200",
})

interface ColorPickerProps extends RACColorPickerProps {
  children?: React.ReactNode
}

function ColorEditor() {
  let [mode, setMode] = useState<ColorSpace | "hex">("hsb")
  let [space, setSpace] = useState<ColorSpace>("hsb")

  useEffect(() => {
    if (mode === "hex") {
      setSpace("rgb")
    } else {
      setSpace(mode)
    }
  }, [mode, space])

  return (
    <div className="flex flex-col gap-3 p-3">
      <div className="flex gap-3">
        <ColorArea
          colorSpace={space === "hsl" ? "hsl" : "hsb"}
          xChannel="saturation"
          yChannel={space === "hsl" ? "lightness" : "brightness"}
        />
        <ColorSlider
          orientation="vertical"
          colorSpace="hsb"
          channel="hue"
          size={1}
        />
        <ColorSlider orientation="vertical" channel="alpha" size={1} />
      </div>

      <Separator />

      <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-2">
        <Select
          size={1}
          aria-label="Color mode"
          selectedKey={mode}
          onSelectionChange={(key) => setMode(key as ColorSpace)}
        >
          <SelectItem id="hsb">HSB</SelectItem>
          <SelectItem id="hsl">HSL</SelectItem>
          <SelectItem id="rgb">RGB</SelectItem>
          <SelectItem id="hex">HEX</SelectItem>
        </Select>

        {mode === "hex" ?
          <ColorField size={1} className="col-span-3" />
        : getColorChannels(space).map((channel) => (
            <ColorField
              size={1}
              colorSpace={space}
              channel={channel}
              key={channel}
            />
          ))
        }
        <ColorField size={1} colorSpace={space} channel="alpha" />
      </div>
    </div>
  )
}

function ColorPicker({ children, ...props }: ColorPickerProps) {
  return (
    <RACColorPicker {...props}>
      <RACDialogTrigger>
        <RACButton className={buttonStyles}>
          <ColorSwatch />
        </RACButton>
        <Popover placement="bottom start">
          {children || <ColorEditor />}
        </Popover>
      </RACDialogTrigger>
    </RACColorPicker>
  )
}

export { ColorPicker, type ColorPickerProps }
