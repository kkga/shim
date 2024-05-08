"use client"
import React, { useState } from "react"
import { Tag, TagGroup } from "@ui/taggroup"
import { Key } from "react-aria-components"

export default () => {
  const [items, setItems] = useState<Set<{ id: Key; name: string }>>(
    new Set([
      { id: 1, name: "News" },
      { id: 2, name: "Travel" },
      { id: 3, name: "Gaming" },
      { id: 4, name: "Shopping" },
    ]),
  )

  const removeItems = (keys: Set<Key>) => {
    let newItems = new Set([...items].filter((item) => !keys.has(item.id)))
    setItems(newItems)
  }

  return (
    <TagGroup label="Categories" items={items} onRemove={removeItems}>
      {(item) => <Tag>{item.name}</Tag>}
    </TagGroup>
  )
}
