import { PushPinIcon } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/shim-ui/button";
import { ToggleButton } from "@/shim-ui/toggle-button";
import { ToggleButtonGroup } from "@/shim-ui/toggle-button-group";

export default () => (
  <>
    <div className="grid grid-cols-[1fr_auto] gap-4">
      <span className="col-span-full font-semibold text-neutral-text-subtle text-xs">
        Variant: soft
      </span>

      <Button>Button</Button>
      <ToggleButton>
        <PushPinIcon size={16} />
      </ToggleButton>
      <ToggleButtonGroup className="col-span-full" defaultSelectedKeys={[1]}>
        <ToggleButton id={1}>Left</ToggleButton>
        <ToggleButton id={2}>Center</ToggleButton>
        <ToggleButton id={3}>Right</ToggleButton>
      </ToggleButtonGroup>
    </div>

    <div className="grid grid-cols-[1fr_auto] gap-4">
      <span className="col-span-full font-semibold text-neutral-text-subtle text-xs">
        Variant: ghost
      </span>

      <Button variant="ghost">Button</Button>
      <ToggleButton variant="ghost">
        <PushPinIcon size={16} />
      </ToggleButton>
      <ToggleButtonGroup
        className="col-span-full"
        defaultSelectedKeys={[1]}
        variant="ghost"
      >
        <ToggleButton id={1}>Left</ToggleButton>
        <ToggleButton id={2}>Center</ToggleButton>
        <ToggleButton id={3}>Right</ToggleButton>
      </ToggleButtonGroup>
    </div>

    <div className="grid grid-cols-[1fr_auto] gap-4">
      <span className="col-span-full font-semibold text-neutral-text-subtle text-xs">
        Variant: solid
      </span>

      <Button variant="solid">Button</Button>
      <ToggleButton>
        <PushPinIcon size={16} />
      </ToggleButton>
      <ToggleButtonGroup className="col-span-full" defaultSelectedKeys={[1]}>
        <ToggleButton id={1}>Left</ToggleButton>
        <ToggleButton id={2}>Center</ToggleButton>
        <ToggleButton id={3}>Right</ToggleButton>
      </ToggleButtonGroup>
    </div>
  </>
);
