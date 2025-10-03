import { Tag, TagGroup } from "@/shim-ui/tag-group";

export default () => (
  <>
    <TagGroup color="blue" label="Group color" selectionMode="multiple">
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
);
