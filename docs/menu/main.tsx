import { DotsThreeVertical } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/button";
import { Menu, MenuItem, MenuSeparator, MenuTrigger } from "@/components/menu";

export default () => (
  <MenuTrigger>
    <Button aria-label="Menu">
      <DotsThreeVertical size={16} weight="bold" />
    </Button>
    <Menu>
      <MenuItem>Edit</MenuItem>
      <MenuItem>Duplicate</MenuItem>
      <MenuSeparator />
      <MenuItem intent="error">Delete</MenuItem>
    </Menu>
  </MenuTrigger>
);
