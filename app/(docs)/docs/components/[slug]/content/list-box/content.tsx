import { Description } from "@/shim-ui/field";
import { ListBox, ListBoxItem } from "@/shim-ui/list-box";

export default () => (
  <ListBox aria-label="Permissions" selectionMode="single">
    <ListBoxItem>
      <span slot="title">Read</span>
      <Description>View content and metadata</Description>
    </ListBoxItem>
    <ListBoxItem>Robin</ListBoxItem>
    <ListBoxItem>Wren</ListBoxItem>
  </ListBox>
);
