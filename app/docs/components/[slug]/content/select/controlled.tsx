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
  let [status, setStatus] = useState<Key>("Open");

  return (
    <>
      <Select
        aria-label="Status"
        items={options}
        onSelectionChange={(selected) => {
          if (selected !== null) {
            setStatus(selected);
          }
        }}
        selectedKey={status}
      >
        {({ name }) => <SelectItem id={name}>{name}</SelectItem>}
      </Select>
      <p>
        Selected: <strong>{status}</strong>
      </p>
    </>
  );
};
