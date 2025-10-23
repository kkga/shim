import { ToggleButton } from "@/shim-ui/toggle-button";
import { ToggleButtonGroup } from "@/shim-ui/toggle-button-group";

export default () => (
  <>
    <ToggleButtonGroup aria-label="View" variant="soft">
      <ToggleButton id="grid">Grid</ToggleButton>
      <ToggleButton id="list">List</ToggleButton>
      <ToggleButton id="gallery">Gallery</ToggleButton>
    </ToggleButtonGroup>

    <ToggleButtonGroup aria-label="View" variant="ghost">
      <ToggleButton id="grid">Grid</ToggleButton>
      <ToggleButton id="list">List</ToggleButton>
      <ToggleButton id="gallery">Gallery</ToggleButton>
    </ToggleButtonGroup>
  </>
);
