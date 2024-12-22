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
      <ArrowsClockwise size={16} weight="duotone" />
    </Button>

    <Button intent="error" aria-label="Delete">
      <Trash size={16} weight="duotone" />
    </Button>

    <Button intent="neutral">
      <Link size={16} weight="duotone" />
      Copy link
    </Button>

    <Button intent="accent">
      <CalendarPlus size={16} weight="duotone" />
      Add event
    </Button>
  </>
)
