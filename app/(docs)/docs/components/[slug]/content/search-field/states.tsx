import { SearchField } from "@/shim-ui/search-field";

export default () => (
  <>
    <SearchField isDisabled label="Disabled" />
    <SearchField isReadOnly label="Read only" value="Immutable" />
    <SearchField errorMessage="Wrong search query" isInvalid label="Invalid" />
  </>
);
