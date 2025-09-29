import { ColorSlider } from "@/components/color-slider";
import { SIZES } from "@/lib/theme";

export default () => (
  <div className="flex gap-4">
    {SIZES.map((size) => (
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
