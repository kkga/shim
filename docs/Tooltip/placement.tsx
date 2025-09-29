import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/button";
import { Tooltip, TooltipTrigger } from "@/components/tooltip";

export default () => (
  <>
    <TooltipTrigger>
      <Button>
        <ArrowUp size={16} />
      </Button>
      <Tooltip placement="top">Top</Tooltip>
    </TooltipTrigger>

    <TooltipTrigger>
      <Button>
        <ArrowRight size={16} />
      </Button>
      <Tooltip placement="right">Right</Tooltip>
    </TooltipTrigger>

    <TooltipTrigger>
      <Button>
        <ArrowLeft size={16} />
      </Button>
      <Tooltip placement="left">Left</Tooltip>
    </TooltipTrigger>

    <TooltipTrigger>
      <Button>
        <ArrowDown size={16} />
      </Button>
      <Tooltip placement="bottom">Bottom</Tooltip>
    </TooltipTrigger>
  </>
);
