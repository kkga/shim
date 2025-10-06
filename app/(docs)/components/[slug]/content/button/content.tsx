import {
  ArrowsClockwiseIcon,
  CalendarPlusIcon,
  LinkIcon,
  TrashIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/shim-ui/button";

export default () => (
  <>
    <Button aria-label="Refresh" intent="accent">
      <ArrowsClockwiseIcon size={16} />
    </Button>

    <Button aria-label="Delete" intent="danger">
      <TrashIcon size={16} />
    </Button>

    <Button intent="neutral">
      <LinkIcon size={16} />
      Copy link
    </Button>

    <Button intent="accent">
      <CalendarPlusIcon size={16} />
      Add event
    </Button>
  </>
);
