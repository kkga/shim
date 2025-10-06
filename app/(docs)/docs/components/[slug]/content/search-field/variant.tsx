import { SearchField } from "@/shim-ui/search-field";

export default () => (
  <>
    <SearchField aria-label="Search" variant="classic" />
    <SearchField aria-label="Search docs" variant="soft" />
    <SearchField aria-label="Search docs" variant="outline" />
  </>
);
