import { Slider } from '@ui/slider'

export default () => (
  <div className='grid grid-cols-2'>
    <Slider orientation='vertical' isFilled defaultValue={37} />
    <Slider orientation='vertical' isFilled defaultValue={[17, 73]} />
  </div>
)
