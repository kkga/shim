import { SlidersHorizontal } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/button";
import { Popover, PopoverTrigger } from "@/components/popover";
import { Slider } from "@/components/slider";

export default () => (
  <PopoverTrigger>
    <Button>
      <SlidersHorizontal size={16} weight="duotone" />
    </Button>
    <Popover className="w-[200px] p-4" placement="bottom start">
      <div className="grid gap-4">
        <Slider defaultValue={37} isFilled label="Width" />
        <Slider defaultValue={73} isFilled label="Height" />
      </div>
    </Popover>
  </PopoverTrigger>
);
