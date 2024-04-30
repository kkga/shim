import { ListMagnifyingGlass } from '@phosphor-icons/react/dist/ssr'
import { SearchField } from '@ui/search-field'

export default () => (
  <>
    <SearchField prefixIcon='filter' placeholder='Filter' aria-label='Filter docs' />
    <SearchField prefixIcon={<ListMagnifyingGlass size={16} />} aria-label='Search docs' />
    <SearchField prefixIcon={null} aria-label='Search docs' />
  </>
)
