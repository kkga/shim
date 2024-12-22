import { ListBox, ListBoxItem } from "@ui/ListBox"

export default () => (
  <>
    <ListBox size={1} selectionMode="single" aria-label="Favorite animal">
      <ListBoxItem>Cat</ListBoxItem>
      <ListBoxItem>Dog</ListBoxItem>
      <ListBoxItem>Kangaroo</ListBoxItem>
    </ListBox>
    <ListBox size={2} selectionMode="single" aria-label="Favorite animal">
      <ListBoxItem>Cat</ListBoxItem>
      <ListBoxItem>Dog</ListBoxItem>
      <ListBoxItem>Kangaroo</ListBoxItem>
    </ListBox>
    <ListBox size={3} selectionMode="single" aria-label="Favorite animal">
      <ListBoxItem>Cat</ListBoxItem>
      <ListBoxItem>Dog</ListBoxItem>
      <ListBoxItem>Kangaroo</ListBoxItem>
    </ListBox>
    <ListBox size={4} selectionMode="single" aria-label="Favorite animal">
      <ListBoxItem>Cat</ListBoxItem>
      <ListBoxItem>Dog</ListBoxItem>
      <ListBoxItem>Kangaroo</ListBoxItem>
    </ListBox>
  </>
)
