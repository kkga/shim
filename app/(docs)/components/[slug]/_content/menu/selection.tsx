"use client";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import type { Selection } from "react-aria-components";
import { Button } from "@/shim-ui/button";
import { Menu, MenuItem, MenuTrigger } from "@/shim-ui/menu";

export default () => {
  const [align, setAlign] = useState<Selection>(new Set(["center"]));
  const [views, setViews] = useState<Selection>(new Set(["sidebar"]));

  return (
    <div className="flex gap-2">
      <MenuTrigger>
        <Button aria-label="Align">
          Align
          <CaretDown size={12} weight="bold" />
        </Button>
        <Menu
          onSelectionChange={setAlign}
          selectedKeys={align}
          selectionMode="single"
        >
          <MenuItem id="left">Left</MenuItem>
          <MenuItem id="center">Center</MenuItem>
          <MenuItem id="right">Right</MenuItem>
        </Menu>
      </MenuTrigger>

      <MenuTrigger>
        <Button aria-label="Views">
          Views
          <CaretDown size={12} weight="bold" />
        </Button>
        <Menu
          onSelectionChange={setViews}
          selectedKeys={views}
          selectionMode="multiple"
        >
          <MenuItem id="sidebar">Sidebar</MenuItem>
          <MenuItem id="toolbar">Toolbar</MenuItem>
          <MenuItem id="inspector">Inspector</MenuItem>
        </Menu>
      </MenuTrigger>
    </div>
  );
};
