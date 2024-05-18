import { ComboBox, ComboBoxItem } from "@ui/combobox"

export default () => (
  <>
    <ComboBox size={1} label="Frameworks">
      <ComboBoxItem>React</ComboBoxItem>
      <ComboBoxItem>Svelte</ComboBoxItem>
      <ComboBoxItem>Vue</ComboBoxItem>
    </ComboBox>

    <ComboBox size={2} label="Frameworks">
      <ComboBoxItem>React</ComboBoxItem>
      <ComboBoxItem>Svelte</ComboBoxItem>
      <ComboBoxItem>Vue</ComboBoxItem>
    </ComboBox>

    <ComboBox size={3} label="Frameworks">
      <ComboBoxItem>React</ComboBoxItem>
      <ComboBoxItem>Svelte</ComboBoxItem>
      <ComboBoxItem>Vue</ComboBoxItem>
    </ComboBox>
  </>
)
