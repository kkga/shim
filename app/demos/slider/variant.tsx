import { Slider } from "@ui/slider"

export default () => (
  <>
    <Slider variant="classic" isFilled defaultValue={37} aria-label="Slope" />
    <Slider variant="soft" isFilled defaultValue={37} aria-label="Slope" />
    <Slider variant="outline" isFilled defaultValue={37} aria-label="Slope" />
  </>
)
