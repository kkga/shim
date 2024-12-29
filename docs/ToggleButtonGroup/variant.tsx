import { ToggleButton } from "@ui/ToggleButton"
import { ToggleButtonGroup } from "@ui/ToggleButtonGroup"

export default () => (
  <>
    <ToggleButtonGroup variant="soft" aria-label="View">
      <ToggleButton id="grid">Grid</ToggleButton>
      <ToggleButton id="list">List</ToggleButton>
      <ToggleButton id="gallery">Gallery</ToggleButton>
    </ToggleButtonGroup>

    <ToggleButtonGroup variant="ghost" aria-label="View">
      <ToggleButton id="grid">Grid</ToggleButton>
      <ToggleButton id="list">List</ToggleButton>
      <ToggleButton id="gallery">Gallery</ToggleButton>
    </ToggleButtonGroup>
  </>
)
