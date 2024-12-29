import {
  ArrowsClockwise,
  CalendarPlus,
  Link,
  Trash,
} from "@phosphor-icons/react/dist/ssr"
import { Button } from "@ui/Button"

export default () => (
  <>
    <Button intent="accent" aria-label="Refresh">
      <ArrowsClockwise size={16} />
    </Button>

    <Button intent="danger" aria-label="Delete">
      <Trash size={16} />
    </Button>

    <Button intent="neutral">
      <Link size={16} />
      Copy link
    </Button>

    <Button intent="accent">
      <CalendarPlus size={16} />
      Add event
    </Button>
  </>
)
