import { TextB, TextItalic, TextUnderline } from "@phosphor-icons/react/dist/ssr"
import { ToggleButton } from "@ui/ToggleButton"
import { ToggleButtonGroup } from "@ui/ToggleButtonGroup"

export default () => (
  <ToggleButtonGroup selectionMode="multiple" aria-label="Style">
    <ToggleButton id="bold" aria-label="Bold">
      <TextB size={16} />
    </ToggleButton>
    <ToggleButton id="italic" aria-label="Italic">
      <TextItalic size={16} />
    </ToggleButton>
    <ToggleButton id="underline" aria-label="Underline">
      <TextUnderline size={16} />
    </ToggleButton>
  </ToggleButtonGroup>
)
