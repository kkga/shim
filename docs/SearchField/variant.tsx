import { SearchField } from "@/components/search-field";

export default () => (
  <>
    <SearchField aria-label="Search" variant="classic" />
    <SearchField aria-label="Search docs" variant="soft" />
    <SearchField aria-label="Search docs" variant="outline" />
  </>
);
