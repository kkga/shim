import { ColorSlider } from "@/components/color-slider";
import { SIZES } from "@/lib/theme";

export default () => (
  <>
    {SIZES.map((size) => (
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
