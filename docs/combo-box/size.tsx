import { ComboBox, ComboBoxItem } from "@/components/combo-box";

export default () => (
  <>
    <ComboBox label="Size 1" placeholder="Pick a framework" size={1}>
      <ComboBoxItem>React</ComboBoxItem>
      <ComboBoxItem>Svelte</ComboBoxItem>
    </ComboBox>

    <ComboBox label="Size 2" placeholder="Pick a framework" size={2}>
      <ComboBoxItem>React</ComboBoxItem>
      <ComboBoxItem>Svelte</ComboBoxItem>
    </ComboBox>

    <ComboBox label="Size 3" placeholder="Pick a framework" size={3}>
      <ComboBoxItem>React</ComboBoxItem>
      <ComboBoxItem>Svelte</ComboBoxItem>
    </ComboBox>

    <ComboBox label="Size 4" placeholder="Pick a framework" size={4}>
      <ComboBoxItem>React</ComboBoxItem>
      <ComboBoxItem>Svelte</ComboBoxItem>
    </ComboBox>
  </>
);
