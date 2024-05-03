import {
  ArrowUUpLeft,
  ArrowsClockwise,
  CalendarPlus,
  Link,
  Star,
  Trash,
} from '@phosphor-icons/react/dist/ssr'
import { Button } from '@ui/button'

export default () => (
  <>
    <div className='flex gap-2'>
      <Button intent='accent' aria-label='Refresh'>
        <ArrowsClockwise size={16} weight='duotone' />
      </Button>
      <Button intent='error' aria-label='Delete'>
        <Trash size={16} weight='duotone' />
      </Button>
    </div>

    <div className='flex gap-2'>
      <Button intent='neutral' size={2} aria-label='Undo'>
        <ArrowUUpLeft size={16} weight='duotone' />
      </Button>
      <Button intent='success' size={2} aria-label='Favorite'>
        <Star size={16} weight='duotone' />
      </Button>
    </div>

    <div className='flex gap-2'>
      <Button intent='neutral'>
        <Link size={16} weight='duotone' />
        Copy link
      </Button>
    </div>

    <div className='flex'>
      <Button intent='accent' size={2}>
        <CalendarPlus size={16} weight='duotone' />
        Add event
      </Button>
    </div>
  </>
)
