"use client";
import { Tag, TagGroup } from "@/components/tag-group";

const sizes = [1, 2, 3, 4] as const;

export default () =>
  sizes.map((size) => (
    <TagGroup key={size} label={`Size ${size}`} onRemove={() => {}} size={size}>
      <Tag>Bug</Tag>
      <Tag>Feature</Tag>
      <Tag>Chore</Tag>
    </TagGroup>
  ));
