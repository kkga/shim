import { ListBox, ListBoxItem } from "@ui/ListBox"

export default () => (
  <div className="flex gap-4">
    <ListBox
      size={1}
      className="min-w-32"
      selectionMode="multiple"
      aria-label="Favorite animal"
    >
      <ListBoxItem>Cat</ListBoxItem>
      <ListBoxItem>Dog</ListBoxItem>
      <ListBoxItem>Kangaroo</ListBoxItem>
    </ListBox>
    <ListBox
      size={2}
      className="min-w-32"
      selectionMode="multiple"
      aria-label="Favorite animal"
    >
      <ListBoxItem>Cat</ListBoxItem>
      <ListBoxItem>Dog</ListBoxItem>
      <ListBoxItem>Kangaroo</ListBoxItem>
    </ListBox>
    <ListBox
      size={3}
      className="min-w-32"
      selectionMode="multiple"
      aria-label="Favorite animal"
    >
      <ListBoxItem>Cat</ListBoxItem>
      <ListBoxItem>Dog</ListBoxItem>
      <ListBoxItem>Kangaroo</ListBoxItem>
    </ListBox>
  </div>
)
