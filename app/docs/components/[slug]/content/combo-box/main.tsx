import { ComboBox, ComboBoxItem } from "@/components/combo-box";

export default () => (
  <ComboBox label="Ice cream" placeholder="Pick a flavor">
    <ComboBoxItem>Chocolate</ComboBoxItem>
    <ComboBoxItem>Mint</ComboBoxItem>
    <ComboBoxItem>Strawberry</ComboBoxItem>
    <ComboBoxItem>Vanilla</ComboBoxItem>
  </ComboBox>
);
