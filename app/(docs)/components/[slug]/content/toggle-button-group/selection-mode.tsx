import {
  TextB,
  TextItalic,
  TextUnderline,
} from "@phosphor-icons/react/dist/ssr";
import { ToggleButton } from "@/shim-ui/toggle-button";
import { ToggleButtonGroup } from "@/shim-ui/toggle-button-group";

export default () => (
  <ToggleButtonGroup
    aria-label="Style"
    defaultSelectedKeys={["bold", "italic"]}
    selectionMode="multiple"
  >
    <ToggleButton aria-label="Bold" id="bold">
      <TextB size={16} />
    </ToggleButton>
    <ToggleButton aria-label="Italic" id="italic">
      <TextItalic size={16} />
    </ToggleButton>
    <ToggleButton aria-label="Underline" id="underline">
      <TextUnderline size={16} />
    </ToggleButton>
  </ToggleButtonGroup>
);
