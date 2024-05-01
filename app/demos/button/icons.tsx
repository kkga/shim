import { ArrowsClockwise, Link, Star, Trash } from '@phosphor-icons/react/dist/ssr'
import { Button } from '@ui/button'

export default () => (
  <>
    <Button intent='error'>
      <Trash size={16} weight='duotone' />
      Delete
    </Button>
    <Button intent='accent'>
      <ArrowsClockwise size={16} weight='duotone' />
      Refresh
    </Button>
    <Button intent='neutral' size={2}>
      <Link size={16} weight='duotone' />
      Copy link
    </Button>
    <Button intent='success' size={2}>
      <Star size={16} weight='duotone' />
      Favorite
    </Button>
  </>
)
