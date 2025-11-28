import { ListIcon } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/shim-ui/button";
import { Menu, MenuItem, MenuSeparator, MenuTrigger } from "@/shim-ui/menu";

export default () => (
  <MenuTrigger>
    <Button aria-label="Menu">
      <ListIcon size={16} />
    </Button>
    <Menu>
      <MenuItem>Edit</MenuItem>
      <MenuItem>Duplicate</MenuItem>
      <MenuSeparator />
      <MenuItem intent="danger">Delete</MenuItem>
    </Menu>
  </MenuTrigger>
);
