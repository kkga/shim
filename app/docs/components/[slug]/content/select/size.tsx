import { Select, SelectItem } from "@/shim-ui/select";

export default () => (
  <>
    <Select label="Status" placeholder="Select status" size={1}>
      <SelectItem>Open</SelectItem>
      <SelectItem>Closed</SelectItem>
    </Select>
    <Select label="Status" placeholder="Select status" size={2}>
      <SelectItem>Open</SelectItem>
      <SelectItem>Closed</SelectItem>
    </Select>
    <Select label="Status" placeholder="Select status" size={3}>
      <SelectItem>Open</SelectItem>
      <SelectItem>Closed</SelectItem>
    </Select>
  </>
);
