import { SlidersHorizontal } from "@phosphor-icons/react/dist/ssr"
import { Button } from "@ui/Button"
import { Popover, PopoverTrigger } from "@ui/Popover"
import { Slider } from "@ui/Slider"

export default () => (
  <PopoverTrigger>
    <Button>
      <SlidersHorizontal size={16} weight="duotone" />
    </Button>
    <Popover className="w-[200px] p-4" placement="bottom start">
      <div className="grid gap-4">
        <Slider label="Width" defaultValue={37} isFilled />
        <Slider label="Height" defaultValue={73} isFilled />
      </div>
    </Popover>
  </PopoverTrigger>
)
