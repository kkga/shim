import {
  ArrowsClockwise,
  CalendarPlus,
  Link,
  Trash,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/button";

export default () => (
  <>
    <Button aria-label="Refresh" intent="accent">
      <ArrowsClockwise size={16} />
    </Button>

    <Button aria-label="Delete" intent="danger">
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
);
