import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpLeft,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/shim-ui/button";
import { Popover, PopoverTrigger } from "@/shim-ui/popover";

export default () => (
  <>
    <PopoverTrigger>
      <Button>
        <ArrowUpLeft size={16} />
      </Button>
      <Popover className="p-4" placement="left bottom">
        Left bottom
      </Popover>
    </PopoverTrigger>

    <PopoverTrigger>
      <Button>
        <ArrowLeft size={16} />
      </Button>
      <Popover className="p-4" placement="left">
        Left
      </Popover>
    </PopoverTrigger>

    <PopoverTrigger>
      <Button>
        <ArrowRight size={16} />
      </Button>
      <Popover className="p-4" placement="right">
        Right
      </Popover>
    </PopoverTrigger>

    <PopoverTrigger>
      <Button>
        <ArrowDownRight size={16} />
      </Button>
      <Popover className="p-4" placement="right top">
        Right top
      </Popover>
    </PopoverTrigger>
  </>
);
