import { Select, SelectItem } from "@/components/select";

export default () => (
  <Select label="Project" placeholder="Pick a project">
    <SelectItem href="https://example.com" target="_blank">
      Create new...
    </SelectItem>
    <SelectItem>Project A</SelectItem>
    <SelectItem>Project B</SelectItem>
    <SelectItem>Project C</SelectItem>
  </Select>
);
