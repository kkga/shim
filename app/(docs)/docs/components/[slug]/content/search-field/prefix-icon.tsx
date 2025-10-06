import { ListMagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { SearchField } from "@/shim-ui/search-field";

export default () => (
  <>
    <SearchField
      aria-label="Filter docs"
      placeholder="Filter"
      prefixIcon="filter"
    />
    <SearchField
      aria-label="Search docs"
      prefixIcon={<ListMagnifyingGlass size={16} />}
    />
    <SearchField aria-label="Search docs" prefixIcon={null} />
  </>
);
