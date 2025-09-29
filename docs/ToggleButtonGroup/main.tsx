import {
  TextAlignCenter,
  TextAlignLeft,
  TextAlignRight,
} from "@phosphor-icons/react/dist/ssr";
import { ToggleButton } from "@/components/toggle-button";
import { ToggleButtonGroup } from "@/components/toggle-button-group";

export default () => (
  <ToggleButtonGroup aria-label="Align" className="self-start">
    <ToggleButton aria-label="Left" id="left">
      <TextAlignLeft size={16} />
    </ToggleButton>
    <ToggleButton aria-label="Center" id="center">
      <TextAlignCenter size={16} />
    </ToggleButton>
    <ToggleButton aria-label="Right" id="right">
      <TextAlignRight size={16} />
    </ToggleButton>
  </ToggleButtonGroup>
);
