import {
  TextB,
  TextItalic,
  TextUnderline,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/shim-ui/button";
import { Group } from "@/shim-ui/group";
import { Separator } from "@/shim-ui/separator";
import { Switch } from "@/shim-ui/switch";
import { ToggleButton } from "@/shim-ui/toggle-button";
import { ToggleButtonGroup } from "@/shim-ui/toggle-button-group";
import { Toolbar } from "@/shim-ui/toolbar";

export default () => (
  <Toolbar aria-label="Text formatting">
    <ToggleButtonGroup aria-label="Style">
      <ToggleButton aria-label="Bold">
        <TextB size={16} weight="duotone" />
      </ToggleButton>
      <ToggleButton aria-label="Italic">
        <TextItalic size={16} weight="duotone" />
      </ToggleButton>
      <ToggleButton aria-label="Underline">
        <TextUnderline size={16} weight="duotone" />
      </ToggleButton>
    </ToggleButtonGroup>
    <Separator orientation="vertical" />
    <Group aria-label="Clipboard" className="contents">
      <Button>Copy</Button>
      <Button>Paste</Button>
      <Button>Cut</Button>
    </Group>
    <Separator orientation="vertical" />
    <Switch variant="soft">Night mode</Switch>
  </Toolbar>
);
