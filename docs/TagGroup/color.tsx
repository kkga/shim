import { Tag, TagGroup } from "@ui/TagGroup"

export default () => (
  <>
    <TagGroup label="Group color" color="blue" selectionMode="multiple">
      <Tag>Bug</Tag>
      <Tag>Feature</Tag>
      <Tag>Chore</Tag>
    </TagGroup>

    <TagGroup label="Individual colors" selectionMode="multiple">
      <Tag color="red">Bug</Tag>
      <Tag color="green">Feature</Tag>
      <Tag color="orange">Chore</Tag>
    </TagGroup>
  </>
)
