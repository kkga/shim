import { DotsThreeVertical } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/button";
import { Menu, MenuItem, MenuSeparator, MenuTrigger } from "@/components/menu";

export default () => (
  <>
    <MenuTrigger>
      <Button aria-label="Menu" size={1}>
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
      <Button aria-label="Menu" size={2}>
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
      <Button aria-label="Menu" size={3}>
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
      <Button aria-label="Menu" size={4}>
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
);
