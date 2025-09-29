import { Slider } from "@/components/slider";

export default () => (
  <>
    <Slider aria-label="Slope" defaultValue={37} isFilled variant="classic" />
    <Slider aria-label="Slope" defaultValue={37} isFilled variant="soft" />
    <Slider aria-label="Slope" defaultValue={37} isFilled variant="outline" />
  </>
);
