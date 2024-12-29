import { TextAlignCenter, TextAlignLeft, TextAlignRight } from "@phosphor-icons/react/dist/ssr"
import { ToggleButton } from "@ui/ToggleButton"
import { ToggleButtonGroup } from "@ui/ToggleButtonGroup"

export default () => (
  <ToggleButtonGroup aria-label="Align" className="self-start">
    <ToggleButton id="left" aria-label="Left">
      <TextAlignLeft size={16} />
    </ToggleButton>
    <ToggleButton id="center" aria-label="Center">
      <TextAlignCenter size={16} />
    </ToggleButton>
    <ToggleButton id="right" aria-label="Right">
      <TextAlignRight size={16} />
    </ToggleButton>
  </ToggleButtonGroup>
)
