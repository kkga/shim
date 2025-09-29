import { Plus } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/button";
import { Tooltip, TooltipTrigger } from "@/components/tooltip";

export default () => (
  <TooltipTrigger closeDelay={50} delay={200}>
    <Button>
      <Plus size={16} />
    </Button>
    <Tooltip>Add new file</Tooltip>
  </TooltipTrigger>
);
