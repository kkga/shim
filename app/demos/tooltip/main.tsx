import { Plus } from "@phosphor-icons/react/dist/ssr"
import { Button } from "@ui/button"
import { Tooltip, TooltipTrigger } from "@ui/tooltip"

export default () => (
  <TooltipTrigger delay={200} closeDelay={50}>
    <Button>
      <Plus size={16} />
    </Button>
    <Tooltip>Add new file</Tooltip>
  </TooltipTrigger>
)
