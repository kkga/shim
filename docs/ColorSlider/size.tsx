import { ColorSlider } from "@/components/ColorSlider"

export default () => (
  <>
    {([1, 2, 3, 4] as const).map((size) => (
      <ColorSlider
        key={size}
        size={size}
        label="Alpha"
        channel="alpha"
        defaultValue="hsla(0, 100%, 50%, 0.5)"
      />
    ))}
  </>
)
