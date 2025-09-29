import { Description } from "@/components/field";
import { ListBox, ListBoxItem } from "@/components/list-box";

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
