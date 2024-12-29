"use client"
import { Tag, TagGroup } from "@ui/TagGroup"

const sizes = [1, 2, 3, 4] as const

export default () =>
  sizes.map((size) => (
    <TagGroup onRemove={() => {}} label={`Size ${size}`} size={size} key={size}>
      <Tag>Bug</Tag>
      <Tag>Feature</Tag>
      <Tag>Chore</Tag>
    </TagGroup>
  ))
