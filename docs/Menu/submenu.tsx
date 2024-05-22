import { DotsThreeVertical } from "@phosphor-icons/react/dist/ssr"
import { Button } from "@ui/Button"
import {
  Menu,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
  SubmenuTrigger,
} from "@ui/Menu"

export default () => (
  <MenuTrigger>
    <Button aria-label="Menu">
      <DotsThreeVertical size={16} weight="bold" />
    </Button>
    <Menu>
      <MenuItem>Edit</MenuItem>
      <MenuItem>Duplicate</MenuItem>
      <MenuSeparator />
      <SubmenuTrigger>
        <MenuItem>Move...</MenuItem>
        <Menu aria-label="Move">
          <SubmenuTrigger>
            <MenuItem>Folder...</MenuItem>
            <Menu aria-label="Folder">
              <MenuItem>Folder 1</MenuItem>
              <MenuItem>Folder 2</MenuItem>
              <MenuItem>Folder 3</MenuItem>
            </Menu>
          </SubmenuTrigger>
          <SubmenuTrigger>
            <MenuItem>Workspace...</MenuItem>
            <Menu aria-label="Workspace">
              <MenuItem>Workspace 1</MenuItem>
              <MenuItem>Workspace 2</MenuItem>
              <MenuItem>Workspace 3</MenuItem>
            </Menu>
          </SubmenuTrigger>
        </Menu>
      </SubmenuTrigger>
      <MenuSeparator />
      <MenuItem intent="error">Delete</MenuItem>
    </Menu>
  </MenuTrigger>
)
