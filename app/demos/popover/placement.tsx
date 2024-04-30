import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpLeft } from '@phosphor-icons/react/dist/ssr'
import { IconButton } from '@ui/icon-button'
import { Popover, PopoverTrigger } from '@ui/popover'

export default () => (
  <>
    <PopoverTrigger>
      <IconButton>
        <ArrowUpLeft size={16} />
      </IconButton>
      <Popover placement='left bottom'>Left bottom</Popover>
    </PopoverTrigger>

    <PopoverTrigger>
      <IconButton>
        <ArrowLeft size={16} />
      </IconButton>
      <Popover placement='left'>Left</Popover>
    </PopoverTrigger>

    <PopoverTrigger>
      <IconButton>
        <ArrowRight size={16} />
      </IconButton>
      <Popover placement='right'>Right</Popover>
    </PopoverTrigger>

    <PopoverTrigger>
      <IconButton>
        <ArrowDownRight size={16} />
      </IconButton>
      <Popover placement='right top'>Right top</Popover>
    </PopoverTrigger>
  </>
)
