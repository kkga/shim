import { GridFour, List } from "@phosphor-icons/react/dist/ssr";
import { ToggleButton } from "@/shim-ui/toggle-button";
import { ToggleButtonGroup } from "@/shim-ui/toggle-button-group";

export default () => (
  <>
    <ToggleButtonGroup aria-label="View" size={1}>
      <ToggleButton aria-label="Grid" id="Grid">
        <GridFour size={16} />
        Grid
      </ToggleButton>
      <ToggleButton aria-label="List" id="List">
        <List size={16} />
        List
      </ToggleButton>
    </ToggleButtonGroup>
    <ToggleButtonGroup aria-label="View" size={2}>
      <ToggleButton aria-label="Grid" id="Grid">
        <GridFour size={16} />
        Grid
      </ToggleButton>
      <ToggleButton aria-label="List" id="List">
        <List size={16} />
        List
      </ToggleButton>
    </ToggleButtonGroup>
    <ToggleButtonGroup aria-label="View" size={3}>
      <ToggleButton aria-label="Grid" id="Grid">
        <GridFour size={16} />
        Grid
      </ToggleButton>
      <ToggleButton aria-label="List" id="List">
        <List size={16} />
        List
      </ToggleButton>
    </ToggleButtonGroup>
    <ToggleButtonGroup aria-label="View" size={4}>
      <ToggleButton aria-label="Grid" id="Grid">
        <GridFour size={20} />
        Grid
      </ToggleButton>
      <ToggleButton aria-label="List" id="List">
        <List size={20} />
        List
      </ToggleButton>
    </ToggleButtonGroup>
  </>
);
