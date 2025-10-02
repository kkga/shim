"use client";
import { useListData } from "react-stately";
import { Tag, TagGroup } from "@/components/tag-group";

export default () => {
  let list = useListData({
    initialItems: [
      { id: 1, name: "News" },
      { id: 2, name: "Travel" },
      { id: 3, name: "Gaming" },
      { id: 4, name: "Shopping" },
    ],
  });

  return (
    <TagGroup
      aria-label="Categories"
      items={list.items}
      onRemove={(keys) => list.remove(...keys)}
      renderEmptyState={() => <div className="p-2">No items</div>}
    >
      {(item) => <Tag>{item.name}</Tag>}
    </TagGroup>
  );
};
