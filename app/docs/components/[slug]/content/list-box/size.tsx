import { ListBox, ListBoxItem } from "@/shim-ui/list-box";

export default () => (
  <div className="grid grid-cols-2 gap-3">
    <ListBox aria-label="Favorite animal" selectionMode="single" size={1}>
      <ListBoxItem>Cat</ListBoxItem>
      <ListBoxItem>Dog</ListBoxItem>
      <ListBoxItem>Kangaroo</ListBoxItem>
    </ListBox>
    <ListBox aria-label="Favorite animal" selectionMode="single" size={2}>
      <ListBoxItem>Cat</ListBoxItem>
      <ListBoxItem>Dog</ListBoxItem>
      <ListBoxItem>Kangaroo</ListBoxItem>
    </ListBox>
    <ListBox aria-label="Favorite animal" selectionMode="single" size={3}>
      <ListBoxItem>Cat</ListBoxItem>
      <ListBoxItem>Dog</ListBoxItem>
      <ListBoxItem>Kangaroo</ListBoxItem>
    </ListBox>
    <ListBox aria-label="Favorite animal" selectionMode="single" size={4}>
      <ListBoxItem>Cat</ListBoxItem>
      <ListBoxItem>Dog</ListBoxItem>
      <ListBoxItem>Kangaroo</ListBoxItem>
    </ListBox>
  </div>
);
