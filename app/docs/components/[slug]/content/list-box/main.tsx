import { ListBox, ListBoxItem } from "@/components/list-box";

export default () => (
  <ListBox aria-label="Favorite animal" selectionMode="single">
    <ListBoxItem>Aardvark</ListBoxItem>
    <ListBoxItem>Cat</ListBoxItem>
    <ListBoxItem>Dog</ListBoxItem>
    <ListBoxItem>Kangaroo</ListBoxItem>
    <ListBoxItem>Panda</ListBoxItem>
    <ListBoxItem isDisabled>Snake</ListBoxItem>
  </ListBox>
);
