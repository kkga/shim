"use client";

import { useState } from "react";
import type { Key } from "react-aria-components";
import { Select, SelectItem } from "@/shim-ui/select";

export default () => {
  let options = [
    { name: "Open" },
    { name: "Closed" },
    { name: "In Progress" },
    { name: "Resolved" },
  ];
  let [statuses, setStatuses] = useState<Key[]>(["Open", "In Progress"]);

  return (
    <Select
      aria-label="Status"
      items={options}
      onChange={(selected) => setStatuses(selected)}
      selectionMode="multiple"
      value={statuses}
    >
      {({ name }) => <SelectItem id={name}>{name}</SelectItem>}
    </Select>
  );
};
