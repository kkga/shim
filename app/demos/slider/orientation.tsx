import { Slider } from "@ui/slider"

export default () => (
  <div className="flex h-48 gap-4 self-start">
    <Slider orientation="vertical" isFilled defaultValue={37} aria-label="Slope" />
    <Slider orientation="vertical" isFilled defaultValue={[17, 73]} aria-label="Slope" />
    <Slider orientation="vertical" size={2} isFilled defaultValue={37} aria-label="Slope" />
    <Slider orientation="vertical" size={2} isFilled defaultValue={[17, 73]} aria-label="Slope" />
  </div>
)
