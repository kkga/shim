import { ListIcon } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/shim-ui/button";
import { Menu, MenuItem, MenuSeparator, MenuTrigger } from "@/shim-ui/menu";

export default () =>
  ([1, 2, 3, 4] as const).map((size) => (
    <MenuTrigger key={size}>
      <Button aria-label="Menu" size={size}>
        <ListIcon size={"1em"} />
      </Button>
      <Menu size={size}>
        <MenuItem>Edit</MenuItem>
        <MenuItem>Duplicate</MenuItem>
        <MenuSeparator />
        <MenuItem intent="danger">Delete</MenuItem>
      </Menu>
    </MenuTrigger>
  ));
