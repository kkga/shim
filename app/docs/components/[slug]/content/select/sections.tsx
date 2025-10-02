import { Select, SelectItem, SelectSection } from "@/components/select";

export default () => (
  <Select aria-label="Favorite food" placeholder="Select your favorite">
    <SelectSection title="Fruits">
      <SelectItem>Apple</SelectItem>
      <SelectItem>Banana</SelectItem>
      <SelectItem>Orange</SelectItem>
    </SelectSection>
    <SelectSection title="Vegetables">
      <SelectItem>Carrot</SelectItem>
      <SelectItem>Broccoli</SelectItem>
      <SelectItem>Spinach</SelectItem>
    </SelectSection>
    <SelectSection title="Grains">
      <SelectItem>Rice</SelectItem>
      <SelectItem>Quinoa</SelectItem>
      <SelectItem>Barley</SelectItem>
    </SelectSection>
  </Select>
);
