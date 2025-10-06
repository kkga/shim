import { ColorSwatch } from "@/shim-ui/color-swatch";
import {
  ColorSwatchPicker,
  ColorSwatchPickerItem,
} from "@/shim-ui/color-swatch-picker";

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
);
