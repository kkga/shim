"use client";
import { useState } from "react";
import { Tag, TagGroup } from "@/components/tag-group";

export default () => {
  let defaultItems = [
    { id: 1, name: "News" },
    { id: 2, name: "Travel" },
    { id: 3, name: "Gaming" },
    { id: 4, name: "Shopping" },
  ];

  let [items, setItems] = useState(defaultItems);

  let onRemove = (keys) => {
    setItems((prevItems) => prevItems.filter((item) => !keys.has(item.id)));
  };

  return (
    <TagGroup
      aria-label="Categories"
      items={items}
      onRemove={onRemove}
      renderEmptyState={() => <div className="p-2">No items</div>}
      selectionMode="multiple"
    >
      {(item) => <Tag>{item.name}</Tag>}
    </TagGroup>
  );
};
