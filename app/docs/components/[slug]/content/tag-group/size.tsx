"use client";
import { Tag, TagGroup } from "@/shim-ui/tag-group";

export default () =>
  ([1, 2, 3, 4] as const).map((size) => (
    <TagGroup
      key={size}
      label={`Size ${size}`}
      onRemove={() => {
        /*noop*/
      }}
      size={size}
    >
      <Tag>Bug</Tag>
      <Tag>Feature</Tag>
      <Tag>Chore</Tag>
    </TagGroup>
  ));
