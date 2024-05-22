"use client"
import { Tag, TagGroup } from "@ui/TagGroup"
import { useState } from "react"
import { type Selection } from "react-aria-components"

export default () => {
  let [selected, setSelected] = useState<Selection>(new Set(["travel"]))

  return (
    <TagGroup
      selectionMode="multiple"
      selectedKeys={selected}
      onSelectionChange={setSelected}
      aria-label="Categories"
    >
      <Tag id="news">News</Tag>
      <Tag id="travel">Travel</Tag>
      <Tag id="gaming">Gaming</Tag>
    </TagGroup>
  )
}
