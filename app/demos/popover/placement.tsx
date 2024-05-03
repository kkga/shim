import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpLeft } from '@phosphor-icons/react/dist/ssr'
import { Button } from '@ui/button'
import { Popover, PopoverTrigger } from '@ui/popover'

export default () => (
  <>
    <PopoverTrigger>
      <Button>
        <ArrowUpLeft size={16} />
      </Button>
      <Popover placement='left bottom'>Left bottom</Popover>
    </PopoverTrigger>

    <PopoverTrigger>
      <Button>
        <ArrowLeft size={16} />
      </Button>
      <Popover placement='left'>Left</Popover>
    </PopoverTrigger>

    <PopoverTrigger>
      <Button>
        <ArrowRight size={16} />
      </Button>
      <Popover placement='right'>Right</Popover>
    </PopoverTrigger>

    <PopoverTrigger>
      <Button>
        <ArrowDownRight size={16} />
      </Button>
      <Popover placement='right top'>Right top</Popover>
    </PopoverTrigger>
  </>
)
