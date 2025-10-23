"use client";
import { Autocomplete, AutocompleteItem } from "@/shim-ui/autocomplete";

export default () => (
  <Autocomplete>
    <AutocompleteItem>Button</AutocompleteItem>
    <AutocompleteItem>Card</AutocompleteItem>
    <AutocompleteItem>Modal</AutocompleteItem>
    <AutocompleteItem>Tooltip</AutocompleteItem>
    <AutocompleteItem>Dropdown</AutocompleteItem>
  </Autocomplete>
);
