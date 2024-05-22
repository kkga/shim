"use client"
import { CaretDown } from "@phosphor-icons/react/dist/ssr"
import { Button } from "@ui/Button"
import { Menu, MenuItem, MenuTrigger } from "@ui/Menu"
import { useState } from "react"
import type { Selection } from "react-aria-components"

export default () => {
  const [align, setAlign] = useState<Selection>(new Set(["center"]))
  const [views, setViews] = useState<Selection>(new Set(["sidebar"]))

  return (
    <div className="flex gap-2">
      <MenuTrigger>
        <Button aria-label="Align">
          Align
          <CaretDown size={12} weight="bold" />
        </Button>
        <Menu
          selectionMode="single"
          selectedKeys={align}
          onSelectionChange={setAlign}
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
          selectionMode="multiple"
          selectedKeys={views}
          onSelectionChange={setViews}
        >
          <MenuItem id="sidebar">Sidebar</MenuItem>
          <MenuItem id="toolbar">Toolbar</MenuItem>
          <MenuItem id="inspector">Inspector</MenuItem>
        </Menu>
      </MenuTrigger>
    </div>
  )
}
