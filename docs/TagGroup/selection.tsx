"use client";
import { useState } from "react";
import type { Selection } from "react-aria-components";
import { Tag, TagGroup } from "@/components/tag-group";

export default () => {
  let [selected, setSelected] = useState<Selection>(new Set(["travel"]));

  return (
    <TagGroup
      aria-label="Categories"
      onSelectionChange={setSelected}
      selectedKeys={selected}
      selectionMode="multiple"
    >
      <Tag id="news">News</Tag>
      <Tag id="travel">Travel</Tag>
      <Tag id="gaming">Gaming</Tag>
    </TagGroup>
  );
};
