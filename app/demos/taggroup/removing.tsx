"use client"
import { Tag, TagGroup } from "@ui/taggroup"
import { useState } from "react"

export default () => {
  let defaultItems = [
    { id: 1, name: "News" },
    { id: 2, name: "Travel" },
    { id: 3, name: "Gaming" },
    { id: 4, name: "Shopping" },
  ]

  let [items, setItems] = useState(defaultItems)

  let onRemove = (keys) => {
    setItems((prevItems) => prevItems.filter((item) => !keys.has(item.id)))
  }

  return (
    <TagGroup items={items} onRemove={onRemove} aria-label="Categories">
      {(item) => <Tag>{item.name}</Tag>}
    </TagGroup>
  )
}
