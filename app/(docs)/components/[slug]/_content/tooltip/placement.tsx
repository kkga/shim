import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/shim-ui/button";
import { Tooltip, TooltipTrigger } from "@/shim-ui/tooltip";

export default () => (
  <>
    <TooltipTrigger>
      <Button>
        <ArrowUpIcon size={16} />
      </Button>
      <Tooltip placement="top">Top</Tooltip>
    </TooltipTrigger>

    <TooltipTrigger>
      <Button>
        <ArrowRightIcon size={16} />
      </Button>
      <Tooltip placement="right">Right</Tooltip>
    </TooltipTrigger>

    <TooltipTrigger>
      <Button>
        <ArrowLeftIcon size={16} />
      </Button>
      <Tooltip placement="left">Left</Tooltip>
    </TooltipTrigger>

    <TooltipTrigger>
      <Button>
        <ArrowDownIcon size={16} />
      </Button>
      <Tooltip placement="bottom">Bottom</Tooltip>
    </TooltipTrigger>
  </>
);
