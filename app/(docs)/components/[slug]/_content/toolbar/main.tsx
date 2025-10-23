import {
  ClipboardIcon,
  CopyIcon,
  ScissorsIcon,
  TextBIcon,
  TextItalicIcon,
  TextUnderlineIcon,
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
        <TextBIcon size={16} weight="duotone" />
      </ToggleButton>
      <ToggleButton aria-label="Italic">
        <TextItalicIcon size={16} weight="duotone" />
      </ToggleButton>
      <ToggleButton aria-label="Underline">
        <TextUnderlineIcon size={16} weight="duotone" />
      </ToggleButton>
    </ToggleButtonGroup>
    <Separator orientation="vertical" />
    <Group aria-label="Clipboard" className="contents">
      <Button aria-label="Cut">
        <ScissorsIcon size={16} weight="duotone" />
      </Button>
      <Button aria-label="Copy">
        <CopyIcon size={16} weight="duotone" />
      </Button>
      <Button aria-label="Paste">
        <ClipboardIcon size={16} weight="duotone" />
      </Button>
    </Group>
    <Separator orientation="vertical" />
    <Switch variant="soft">Night mode</Switch>
  </Toolbar>
);
