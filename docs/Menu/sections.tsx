import { CaretDown } from "@phosphor-icons/react/dist/ssr"
import { Button } from "@ui/Button"
import { Menu, MenuItem, MenuSection, MenuTrigger } from "@ui/Menu"

export default () => (
  <MenuTrigger>
    <Button aria-label="Pick file">
      Pick file
      <CaretDown size={12} weight="bold" />
    </Button>
    <Menu>
      <MenuSection title="Recent">
        <MenuItem>File 1</MenuItem>
        <MenuItem>File 2</MenuItem>
        <MenuItem>File 3</MenuItem>
      </MenuSection>
      <MenuSection title="Favorites">
        <MenuItem>File 4</MenuItem>
        <MenuItem>File 5</MenuItem>
        <MenuItem>File 6</MenuItem>
      </MenuSection>
    </Menu>
  </MenuTrigger>
)
