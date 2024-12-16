import {
  TextB,
  TextItalic,
  TextUnderline,
} from "@phosphor-icons/react/dist/ssr"
import { Button } from "@ui/Button"
import { Group } from "@ui/Group"
import { Separator } from "@ui/Separator"
import { Switch } from "@ui/Switch"
import { ToggleButton } from "@ui/ToggleButton"
import { ToggleButtonGroup } from "@ui/ToggleButtonGroup"
import { Toolbar } from "@ui/Toolbar"

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
)
