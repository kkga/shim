import { ArrowsClockwise, Link, Star, Trash } from '@phosphor-icons/react/dist/ssr'
import { Button } from '@ui/button'

export default () => (
  <>
    <Button intent='error' square aria-label='Delete'>
      <Trash size={16} weight='duotone' />
    </Button>
    <Button intent='accent' square aria-label='Refresh'>
      <ArrowsClockwise size={16} weight='duotone' />
    </Button>
    <Button intent='neutral' size={2} square aria-label='Copy link'>
      <Link size={16} weight='duotone' />
    </Button>
    <Button intent='success' size={2} square aria-label='Favorite'>
      <Star size={16} weight='duotone' />
    </Button>
  </>
)
