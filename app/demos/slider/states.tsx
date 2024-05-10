import { SearchField } from "@ui/searchfield"

export default () => (
  <>
    <SearchField isDisabled label="Disabled" />
    <SearchField isReadOnly label="Read only" value="Immutable" />
    <SearchField isInvalid errorMessage="Wrong search query" label="Invalid" />
  </>
)
