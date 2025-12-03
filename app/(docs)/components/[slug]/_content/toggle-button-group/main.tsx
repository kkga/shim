import {
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
} from "@phosphor-icons/react/dist/ssr";
import { ToggleButton } from "@/shim-ui/toggle-button";
import { ToggleButtonGroup } from "@/shim-ui/toggle-button-group";

export default () => (
  <ToggleButtonGroup aria-label="Align" className="self-start">
    <ToggleButton aria-label="Left" id="left">
      <TextAlignLeftIcon size={16} />
    </ToggleButton>
    <ToggleButton aria-label="Center" id="center">
      <TextAlignCenterIcon size={16} />
    </ToggleButton>
    <ToggleButton aria-label="Right" id="right">
      <TextAlignRightIcon size={16} />
    </ToggleButton>
  </ToggleButtonGroup>
);
