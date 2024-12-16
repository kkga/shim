import { ComboBox, ComboBoxItem } from "@ui/ComboBox"

export default () => (
  <>
    <ComboBox size={1} label="Size 1" placeholder="Pick a framework">
      <ComboBoxItem>React</ComboBoxItem>
      <ComboBoxItem>Svelte</ComboBoxItem>
    </ComboBox>

    <ComboBox size={2} label="Size 2" placeholder="Pick a framework">
      <ComboBoxItem>React</ComboBoxItem>
      <ComboBoxItem>Svelte</ComboBoxItem>
    </ComboBox>

    <ComboBox size={3} label="Size 3" placeholder="Pick a framework">
      <ComboBoxItem>React</ComboBoxItem>
      <ComboBoxItem>Svelte</ComboBoxItem>
    </ComboBox>

    <ComboBox size={4} label="Size 4" placeholder="Pick a framework">
      <ComboBoxItem>React</ComboBoxItem>
      <ComboBoxItem>Svelte</ComboBoxItem>
    </ComboBox>
  </>
)
