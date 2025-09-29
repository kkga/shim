import { ListBox, ListBoxItem, ListBoxSection } from "@/components/list-box";

export default () => (
  <ListBox aria-label="Favorite animal" selectionMode="single">
    <ListBoxSection title="Birds">
      <ListBoxItem>Blue Jay</ListBoxItem>
      <ListBoxItem>Robin</ListBoxItem>
      <ListBoxItem>Wren</ListBoxItem>
    </ListBoxSection>
    <ListBoxSection title="Reptiles">
      <ListBoxItem>Snake</ListBoxItem>
      <ListBoxItem>Lizard</ListBoxItem>
    </ListBoxSection>
  </ListBox>
);
