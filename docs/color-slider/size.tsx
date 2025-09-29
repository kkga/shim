import { ColorSlider } from "@/components/color-slider";

export default () => (
  <>
    {([1, 2, 3, 4] as const).map((size) => (
      <ColorSlider
        channel="alpha"
        defaultValue="hsla(0, 100%, 50%, 0.5)"
        key={size}
        label="Alpha"
        size={size}
      />
    ))}
  </>
);
