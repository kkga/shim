import {
  TextBIcon,
  TextItalicIcon,
  TextUnderlineIcon,
} from "@phosphor-icons/react/dist/ssr";
import { ToggleButton } from "@/shim-ui/toggle-button";
import { ToggleButtonGroup } from "@/shim-ui/toggle-button-group";

export default () => (
  <>
    <ToggleButtonGroup aria-label="Style" variant="soft">
      <ToggleButton aria-label="Bold">
        <TextBIcon size={16} />
      </ToggleButton>
      <ToggleButton aria-label="Italic">
        <TextItalicIcon size={16} />
      </ToggleButton>
      <ToggleButton aria-label="Underline">
        <TextUnderlineIcon size={16} />
      </ToggleButton>
    </ToggleButtonGroup>

    <ToggleButtonGroup aria-label="Style" variant="ghost">
      <ToggleButton aria-label="Bold">
        <TextBIcon size={16} />
      </ToggleButton>
      <ToggleButton aria-label="Italic">
        <TextItalicIcon size={16} />
      </ToggleButton>
      <ToggleButton aria-label="Underline">
        <TextUnderlineIcon size={16} />
      </ToggleButton>
    </ToggleButtonGroup>
  </>
);
