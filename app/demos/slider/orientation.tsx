import { Slider } from '@ui/slider'

export default () => (
  <div className='grid grid-cols-2'>
    <Slider orientation='vertical' defaultValue={37} />
    <Slider orientation='vertical' defaultValue={[17, 73]} />
  </div>
)
