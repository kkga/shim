"use client";
import { useState } from "react";
import { SearchField } from "@/components/search-field";

export default () => {
  const [value, setValue] = useState("Get started");

  return (
    <>
      <SearchField aria-label="Search" onChange={setValue} value={value} />
      <p>Value: {value}</p>
    </>
  );
};
