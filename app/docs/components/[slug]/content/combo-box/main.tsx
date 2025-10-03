import { ComboBox, ComboBoxItem } from "@/shim-ui/combo-box";

export default () => (
  <ComboBox label="Ice cream" placeholder="Pick a flavor">
    <ComboBoxItem>Chocolate</ComboBoxItem>
    <ComboBoxItem>Mint</ComboBoxItem>
    <ComboBoxItem>Strawberry</ComboBoxItem>
    <ComboBoxItem>Vanilla</ComboBoxItem>
  </ComboBox>
);
