import { GridFour, List } from "@phosphor-icons/react/dist/ssr"
import { ToggleButton } from "@ui/ToggleButton"
import { ToggleButtonGroup } from "@ui/ToggleButtonGroup"

export default () => {
  return (
    <>
      <ToggleButtonGroup size={1} label="Size 1" labelPosition="side">
        <ToggleButton id="Grid" aria-label="Grid">
          <GridFour size={16} />
          Grid
        </ToggleButton>
        <ToggleButton id="List" aria-label="List">
          <List size={16} />
          List
        </ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup size={2} label="Size 2" labelPosition="side">
        <ToggleButton id="Grid" aria-label="Grid">
          <GridFour size={16} />
          Grid
        </ToggleButton>
        <ToggleButton id="List" aria-label="List">
          <List size={16} />
          List
        </ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup size={3} label="Size 3" labelPosition="side">
        <ToggleButton id="Grid" aria-label="Grid">
          <GridFour size={16} />
          Grid
        </ToggleButton>
        <ToggleButton id="List" aria-label="List">
          <List size={16} />
          List
        </ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup size={4} label="Size 4" labelPosition="side">
        <ToggleButton id="Grid" aria-label="Grid">
          <GridFour size={20} />
          Grid
        </ToggleButton>
        <ToggleButton id="List" aria-label="List">
          <List size={20} />
          List
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  )
}
