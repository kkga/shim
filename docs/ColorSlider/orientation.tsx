import { ColorSlider } from "@/components/ColorSlider"

export default () => (
  <div className="flex gap-4">
    {([1, 2, 3, 4] as const).map((size) => (
      <ColorSlider
        key={size}
        size={size}
        orientation="vertical"
        aria-label="Alpha"
        channel="alpha"
        defaultValue="hsla(0, 100%, 50%, 0.5)"
      />
    ))}
  </div>
)
