"use client";
import { Autocomplete, AutocompleteItem } from "@/shim-ui/autocomplete";

export default () =>
  ([1, 2, 3, 4] as const).map((size) => (
    <div className="flex flex-col gap-2" key={size}>
      <Autocomplete size={size}>
        <AutocompleteItem>Button</AutocompleteItem>
        <AutocompleteItem>Card</AutocompleteItem>
        <AutocompleteItem>Modal</AutocompleteItem>
        <AutocompleteItem>Tooltip</AutocompleteItem>
      </Autocomplete>
    </div>
  ));
