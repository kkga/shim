import { Slider } from "@/shim-ui/slider";

export default () => (
  <>
    <Slider defaultValue={37} isFilled label="Slope" />
    <Slider defaultValue={[17, 73]} isFilled label="Slope" />
  </>
);
