"use client"
import { CaretDown } from "@phosphor-icons/react/dist/ssr"
import { Button } from "@ui/Button"
import { Menu, MenuItem, MenuTrigger } from "@ui/Menu"

export default () => {
  const items = [
    { id: 1, name: "New" },
    { id: 2, name: "Open" },
    { id: 3, name: "Close" },
    { id: 4, name: "Save" },
    { id: 5, name: "Duplicate" },
    { id: 6, name: "Rename" },
    { id: 7, name: "Move" },
  ]

  return (
    <MenuTrigger>
      <Button aria-label="Menu">
        Options
        <CaretDown size={12} weight="bold" />
      </Button>
      <Menu items={items}>{(item) => <MenuItem>{item.name}</MenuItem>}</Menu>
    </MenuTrigger>
  )
}
