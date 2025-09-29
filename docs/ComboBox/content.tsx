"use client";
import { useState } from "react";
import type { Key } from "react-aria-components";
import { ComboBox, ComboBoxItem } from "@/components/combo-box";

export default () => {
  let options = [
    { id: 1, name: "Aerospace" },
    { id: 2, name: "Mechanical" },
    { id: 3, name: "Civil" },
    { id: 4, name: "Biomedical" },
    { id: 5, name: "Nuclear" },
    { id: 6, name: "Industrial" },
    { id: 7, name: "Chemical" },
    { id: 8, name: "Agricultural" },
    { id: 9, name: "Electrical" },
  ];

  let [majorId, setMajorId] = useState<Key | null>(null);

  return (
    <>
      <ComboBox
        aria-label="Select a major"
        defaultItems={options}
        onSelectionChange={setMajorId}
      >
        {(item) => <ComboBoxItem>{item.name}</ComboBoxItem>}
      </ComboBox>
      <p>Selected topic id: {majorId}</p>
    </>
  );
};
