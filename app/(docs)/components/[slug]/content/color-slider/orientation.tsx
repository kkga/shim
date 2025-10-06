import { ColorSlider } from "@/shim-ui/color-slider";

export default () => (
  <div className="flex gap-4">
    {([1, 2, 3, 4] as const).map((size) => (
      <ColorSlider
        aria-label="Alpha"
        channel="alpha"
        defaultValue="hsla(0, 100%, 50%, 0.5)"
        key={size}
        orientation="vertical"
        size={size}
      />
    ))}
  </div>
);
