import { Slider } from "@ui/Slider"

export default () => (
  <div className="flex h-48 gap-3 self-start">
    <Slider
      orientation="vertical"
      isFilled
      defaultValue={37}
      aria-label="Slope"
    />
    <Slider
      orientation="vertical"
      isFilled
      defaultValue={[17, 73]}
      aria-label="Slope"
    />
    <Slider
      orientation="vertical"
      size={2}
      isFilled
      defaultValue={37}
      aria-label="Slope"
    />
    <Slider
      orientation="vertical"
      size={2}
      isFilled
      defaultValue={[17, 73]}
      aria-label="Slope"
    />
    <Slider
      orientation="vertical"
      size={3}
      isFilled
      defaultValue={37}
      aria-label="Slope"
    />
    <Slider
      orientation="vertical"
      size={3}
      isFilled
      defaultValue={[17, 73]}
      aria-label="Slope"
    />
  </div>
)
