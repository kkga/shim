import { ListBox, ListBoxItem, ListBoxSection } from '@ui/listbox'

export default () => (
  <ListBox className='max-h-64' aria-label='Favorite animal' selectionMode='single'>
    <ListBoxSection title='Animals'>
      <ListBoxItem>Aardvark</ListBoxItem>
      <ListBoxItem>Dog</ListBoxItem>
      <ListBoxItem>Kangaroo</ListBoxItem>
    </ListBoxSection>
    <ListBoxSection title='Reptiles'>
      <ListBoxItem>Snake</ListBoxItem>
    </ListBoxSection>
    <ListBoxSection title='Birds'>
      <ListBoxItem>Blue Jay</ListBoxItem>
      <ListBoxItem>Cardinal</ListBoxItem>
      <ListBoxItem>Robin</ListBoxItem>
      <ListBoxItem>Wren</ListBoxItem>
    </ListBoxSection>
    <ListBoxSection title='Insects'>
      <ListBoxItem>Ant</ListBoxItem>
      <ListBoxItem>Beetle</ListBoxItem>
      <ListBoxItem>Butterfly</ListBoxItem>
      <ListBoxItem>Dragonfly</ListBoxItem>
      <ListBoxItem>Grasshopper</ListBoxItem>
    </ListBoxSection>
  </ListBox>
)
