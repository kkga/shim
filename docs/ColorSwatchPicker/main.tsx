import { ColorSwatch } from "@/components/ColorSwatch"
import {
  ColorSwatchPicker,
  ColorSwatchPickerItem,
} from "@/components/ColorSwatchPicker"

export default () => (
  <ColorSwatchPicker>
    <ColorSwatchPickerItem color="hsl(22.83, 93.39%, 52.55%)">
      <ColorSwatch />
    </ColorSwatchPickerItem>
    <ColorSwatchPickerItem color="hsl(358.09, 75.12%, 59.02%)">
      <ColorSwatch />
    </ColorSwatchPickerItem>
    <ColorSwatchPickerItem color="hsl(322, 64.66%, 54.51%)">
      <ColorSwatch />
    </ColorSwatchPickerItem>
    <ColorSwatchPickerItem color="hsl(251.9, 55.76%, 57.45%)">
      <ColorSwatch />
    </ColorSwatchPickerItem>
  </ColorSwatchPicker>
)
