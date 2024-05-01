import { Button } from '@ui/button'
import { Popover, PopoverTrigger } from '@ui/popover'
import { Slider } from '@ui/slider'

export default () => (
  <PopoverTrigger>
    <Button>Dimensions</Button>
    <Popover className='w-[200px]' placement='bottom start'>
      <div className='grid gap-4'>
        <Slider label='Width' defaultValue={73} isFilled />
        <Slider label='Height' defaultValue={37} isFilled />
      </div>
    </Popover>
  </PopoverTrigger>
)
