"use client";
import { ListIcon } from "@phosphor-icons/react";
import { Button } from "@/shim-ui/button";
import { ICON_SIZE_MAP } from "@/shim-ui/lib/theme";
import { Menu, MenuItem, MenuSeparator, MenuTrigger } from "@/shim-ui/menu";
import { Slider } from "@/shim-ui/slider";
import { Switch } from "@/shim-ui/switch";
import { TextField } from "@/shim-ui/text-field";
import { ToggleButton } from "@/shim-ui/toggle-button";
import { ToggleButtonGroup } from "@/shim-ui/toggle-button-group";
import { Well } from "@/shim-ui/well";

export default () =>
  ([1, 2, 3, 4] as const).map((size) => (
    <Well key={size} size={size}>
      <code className="col-span-full mb-2 text-xs">size: {size}</code>
      <div className="flex gap-[inherit]">
        <Button className="flex-1">Let's go</Button>
        <MenuTrigger>
          <Button aria-label="Menu" isIconOnly>
            <ListIcon size={ICON_SIZE_MAP[size]} />
          </Button>
          <Menu>
            <MenuItem>Edit</MenuItem>
            <MenuItem>Duplicate</MenuItem>
            <MenuSeparator />
            <MenuItem intent="danger">Delete</MenuItem>
          </Menu>
        </MenuTrigger>
      </div>
      <ToggleButtonGroup defaultSelectedKeys={["1"]}>
        <ToggleButton id="1">Left</ToggleButton>
        <ToggleButton id="2">Right</ToggleButton>
      </ToggleButtonGroup>
      <TextField aria-label="TextField" defaultValue="Hello" />
      <div className="flex gap-[inherit]">
        <Slider
          aria-label="Slider"
          className="flex-1"
          defaultValue={50}
          isFilled
        />
        <Switch aria-label="Switch" defaultSelected />
      </div>
    </Well>
  ));
