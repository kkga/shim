import { DotsThreeVertical } from "@phosphor-icons/react/dist/ssr"
import { Button } from "@ui/Button"
import { Menu, MenuItem, MenuSeparator, MenuTrigger } from "@ui/Menu"

export default () => (
  <>
    <MenuTrigger>
      <Button size={1} aria-label="Menu">
        <DotsThreeVertical size={16} weight="bold" />
      </Button>
      <Menu size={1}>
        <MenuItem>Edit</MenuItem>
        <MenuItem>Duplicate</MenuItem>
        <MenuSeparator />
        <MenuItem intent="error">Delete</MenuItem>
      </Menu>
    </MenuTrigger>

    <MenuTrigger>
      <Button size={2} aria-label="Menu">
        <DotsThreeVertical size={16} weight="bold" />
      </Button>
      <Menu size={2}>
        <MenuItem>Edit</MenuItem>
        <MenuItem>Duplicate</MenuItem>
        <MenuSeparator />
        <MenuItem intent="error">Delete</MenuItem>
      </Menu>
    </MenuTrigger>

    <MenuTrigger>
      <Button size={3} aria-label="Menu">
        <DotsThreeVertical size={20} weight="bold" />
      </Button>
      <Menu size={3}>
        <MenuItem>Edit</MenuItem>
        <MenuItem>Duplicate</MenuItem>
        <MenuSeparator />
        <MenuItem intent="error">Delete</MenuItem>
      </Menu>
    </MenuTrigger>

    <MenuTrigger>
      <Button size={4} aria-label="Menu">
        <DotsThreeVertical size={24} weight="bold" />
      </Button>
      <Menu size={4}>
        <MenuItem>Edit</MenuItem>
        <MenuItem>Duplicate</MenuItem>
        <MenuSeparator />
        <MenuItem intent="error">Delete</MenuItem>
      </Menu>
    </MenuTrigger>
  </>
)
