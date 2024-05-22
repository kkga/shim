import { Description } from "@ui/Field"
import { ListBox, ListBoxItem } from "@ui/ListBox"

export default () => (
  <ListBox aria-label="Permissions" selectionMode="single">
    <ListBoxItem>
      <span slot="title">Read</span>
      <Description>View content and metadata</Description>
    </ListBoxItem>
    <ListBoxItem>Robin</ListBoxItem>
    <ListBoxItem>Wren</ListBoxItem>
  </ListBox>
)
