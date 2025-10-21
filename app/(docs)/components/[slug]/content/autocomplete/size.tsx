"use client";
import { Autocomplete, AutocompleteItem } from "@/shim-ui/autocomplete";

export default () =>
  ([1, 2, 3, 4] as const).map((size) => (
    <Autocomplete key={size} size={size}>
      <AutocompleteItem>Button</AutocompleteItem>
      <AutocompleteItem>Card</AutocompleteItem>
    </Autocomplete>
  ));
