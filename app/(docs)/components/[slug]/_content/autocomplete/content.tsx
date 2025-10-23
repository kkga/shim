"use client";
import { Autocomplete, AutocompleteItem } from "@/shim-ui/autocomplete";

let items = [
  { id: 1, name: "Button" },
  { id: 2, name: "Card" },
  { id: 3, name: "Modal" },
  { id: 4, name: "Tooltip" },
  { id: 5, name: "Dropdown" },
];

export default () => (
  <Autocomplete items={items}>
    {(item) => <AutocompleteItem>{item.name}</AutocompleteItem>}
  </Autocomplete>
);
