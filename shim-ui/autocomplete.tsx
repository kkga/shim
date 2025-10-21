"use client";

import {
  type Key,
  Autocomplete as RacAutocomplete,
  type AutocompleteProps as RacAutocompleteProps,
  useFilter,
} from "react-aria-components";
import type { FieldProps } from "@/shim-ui/field";
import { SearchField, type SearchFieldProps } from "@/shim-ui/search-field";
import {
  Menu,
  MenuItem,
  type MenuItemProps,
  MenuSection,
  type MenuSectionProps,
} from "./menu";

interface AutocompleteProps<T extends object>
  extends Omit<RacAutocompleteProps, "children">,
    Omit<FieldProps, "errorMessage" | "labelPosition">,
    Pick<SearchFieldProps, "prefixIcon" | "autoFocus"> {
  children: React.ReactNode | ((item: T) => React.ReactNode);
  items?: Iterable<T>;
  onAction?: (id: Key) => void;
}

function Autocomplete<T extends object>({
  items,
  children,
  label,
  description,
  placeholder,
  onAction,
  ...props
}: AutocompleteProps<T>) {
  let { contains } = useFilter({ sensitivity: "base" });
  let { size, variant, prefixIcon, autoFocus } = props;

  return (
    <RacAutocomplete filter={contains} {...props}>
      <SearchField
        autoFocus={autoFocus}
        description={description}
        label={label}
        labelPosition="top"
        placeholder={placeholder}
        prefixIcon={prefixIcon}
        size={size}
        variant={variant}
      />
      <Menu items={items} onAction={onAction} size={size} withPopover={false}>
        {children}
      </Menu>
    </RacAutocomplete>
  );
}

interface AutocompleteItemProps extends MenuItemProps {}
function AutocompleteItem(props: AutocompleteItemProps) {
  return <MenuItem {...props} />;
}

interface AutocompleteSectionProps<T extends object>
  extends MenuSectionProps<T> {}
function AutocompleteSection<T extends object>(
  props: AutocompleteSectionProps<T>
) {
  return <MenuSection {...props} />;
}

export { Autocomplete, AutocompleteItem, AutocompleteSection };
export type {
  AutocompleteProps,
  AutocompleteSectionProps,
  AutocompleteItemProps,
};
