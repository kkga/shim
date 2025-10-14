import { ListIcon } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/shim-ui/button";
import { ICON_SIZE_MAP } from "@/shim-ui/lib/theme";
import { Menu, MenuItem, MenuSeparator, MenuTrigger } from "@/shim-ui/menu";
import { Slider } from "@/shim-ui/slider";
import { Switch } from "@/shim-ui/switch";
import { TextField } from "@/shim-ui/text-field";
import { ToggleButton } from "@/shim-ui/toggle-button";
import { ToggleButtonGroup } from "@/shim-ui/toggle-button-group";

export default () => (
  <>
    {/* biome-ignore lint/style/noMagicNumbers: no magic */}
    {([1, 2, 3, 4] as const).map((size) => (
      <div className="flex flex-col gap-3" key={size}>
        <code className="block font-medium">size: {size}</code>
        <div className="flex gap-2">
          <Button className="flex-1" size={size}>
            Button
          </Button>
          <MenuTrigger>
            <Button aria-label="Menu" size={size}>
              <ListIcon size={ICON_SIZE_MAP[size]} />
            </Button>
            <Menu size={size}>
              <MenuItem>Edit</MenuItem>
              <MenuItem>Duplicate</MenuItem>
              <MenuSeparator />
              <MenuItem intent="danger">Delete</MenuItem>
            </Menu>
          </MenuTrigger>
        </div>
        <ToggleButtonGroup size={size}>
          <ToggleButton id="1">Left</ToggleButton>
          <ToggleButton id="3">Right</ToggleButton>
        </ToggleButtonGroup>
        <TextField aria-label="TextField" defaultValue="Hello" size={size} />

        <div className="flex gap-3">
          <Slider aria-label="Slider" className="flex-1" isFilled size={size} />
          <Switch aria-label="Switch" size={size} />
        </div>
      </div>
    ))}
  </>
);
