import { PushPinIcon } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/shim-ui/button";
import { Theme } from "@/shim-ui/lib/theme";
import { ToggleButton } from "@/shim-ui/toggle-button";
import { ToggleButtonGroup } from "@/shim-ui/toggle-button-group";

export default () => (
  <>
    <div>
      <h5 className="text-neutral-text!">Soft</h5>
      <div className="grid grid-cols-[1fr_auto] gap-4">
        <Button>Hello</Button>
        <ToggleButton>
          <PushPinIcon size={16} />
        </ToggleButton>
        <ToggleButtonGroup
          className="col-span-full"
          defaultSelectedKeys={[1]}
          selectionMode="single"
        >
          <ToggleButton id={1}>
            <PushPinIcon size={16} />
          </ToggleButton>
          <ToggleButton id={2}>
            <PushPinIcon size={16} />
          </ToggleButton>
          <ToggleButton id={3}>
            <PushPinIcon size={16} />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>

    <div>
      <h5 className="text-neutral-text!">Solid</h5>
      <Theme buttonVariant="solid">
        <div className="grid grid-cols-[1fr_auto] gap-4">
          <Button>Hello</Button>
          <ToggleButton>
            <PushPinIcon size={16} />
          </ToggleButton>
          <ToggleButtonGroup
            className="col-span-full"
            defaultSelectedKeys={[1]}
            selectionMode="single"
          >
            <ToggleButton id={1}>
              <PushPinIcon size={16} />
            </ToggleButton>
            <ToggleButton id={2}>
              <PushPinIcon size={16} />
            </ToggleButton>
            <ToggleButton id={3}>
              <PushPinIcon size={16} />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </Theme>
    </div>

    <div>
      <h5 className="text-neutral-text!">Ghost</h5>
      <Theme buttonVariant="ghost">
        <div className="grid grid-cols-[1fr_auto] gap-4">
          <Button>Hello</Button>
          <ToggleButton>
            <PushPinIcon size={16} />
          </ToggleButton>
          <ToggleButtonGroup
            className="col-span-full"
            defaultSelectedKeys={[1]}
            selectionMode="single"
          >
            <ToggleButton id={1}>
              <PushPinIcon size={16} />
            </ToggleButton>
            <ToggleButton id={2}>
              <PushPinIcon size={16} />
            </ToggleButton>
            <ToggleButton id={3}>
              <PushPinIcon size={16} />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </Theme>
    </div>
  </>
);
