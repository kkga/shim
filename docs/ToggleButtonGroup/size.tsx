import { GridFour, List } from "@phosphor-icons/react/dist/ssr"
import { ToggleButton } from "@ui/ToggleButton"
import { ToggleButtonGroup } from "@ui/ToggleButtonGroup"

export default () => {
  return (
    <>
      <ToggleButtonGroup size={1}>
        <ToggleButton id="Grid" aria-label="Grid">
          <GridFour size={16} />
          Grid
        </ToggleButton>
        <ToggleButton id="List" aria-label="List">
          <List size={16} />
          List
        </ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup size={2}>
        <ToggleButton id="Grid" aria-label="Grid">
          <GridFour size={16} />
          Grid
        </ToggleButton>
        <ToggleButton id="List" aria-label="List">
          <List size={16} />
          List
        </ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup size={3}>
        <ToggleButton id="Grid" aria-label="Grid">
          <GridFour size={16} />
          Grid
        </ToggleButton>
        <ToggleButton id="List" aria-label="List">
          <List size={16} />
          List
        </ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup size={4}>
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
