import { ToggleButton } from "@/shim-ui/toggle-button";
import { ToggleButtonGroup } from "@/shim-ui/toggle-button-group";

export default () => (
  <>
    <ToggleButtonGroup aria-label="View" isDisabled>
      <ToggleButton id="grid">Grid</ToggleButton>
      <ToggleButton id="list">List</ToggleButton>
      <ToggleButton id="gallery">Gallery</ToggleButton>
    </ToggleButtonGroup>

    <ToggleButtonGroup aria-label="View">
      <ToggleButton id="grid">Grid</ToggleButton>
      <ToggleButton id="list">List</ToggleButton>
      <ToggleButton id="gallery" isDisabled>
        Gallery
      </ToggleButton>
    </ToggleButtonGroup>
  </>
);
