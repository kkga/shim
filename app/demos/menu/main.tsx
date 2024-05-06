import { DotsThreeVertical } from "@phosphor-icons/react/dist/ssr"
import { Button } from "@ui/button"
import { Menu, MenuItem, MenuSeparator, MenuTrigger } from "@ui/menu"

export default () => (
  <MenuTrigger>
    <Button aria-label="Menu">
      <DotsThreeVertical size={16} weight="bold" />
    </Button>
    <Menu>
      <MenuItem>Edit</MenuItem>
      <MenuItem>Duplicate</MenuItem>
      <MenuSeparator />
      <MenuItem>Share...</MenuItem>
      <MenuItem>Move...</MenuItem>
      <MenuSeparator />
      <MenuItem intent="error">Delete</MenuItem>
    </Menu>
  </MenuTrigger>
)
