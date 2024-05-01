import { Slider } from '@ui/slider'

export default () => (
  <>
    <Slider isFilled defaultValue={37} label='Randomness' />
    <Slider isFilled defaultValue={[17, 73]} label='Randomness range' />
  </>
)
