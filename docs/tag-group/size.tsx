"use client";
import { Tag, TagGroup } from "@/components/tag-group";
import { SIZES } from "@/lib/theme";

export default () =>
  SIZES.map((size) => (
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
