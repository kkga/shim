import { Select, SelectItem } from "@/components/select";

export default () => (
  <Select label="Status" placeholder="Select status">
    <SelectItem>Open</SelectItem>
    <SelectItem>Closed</SelectItem>
    <SelectItem>In Progress</SelectItem>
    <SelectItem>Resolved</SelectItem>
  </Select>
);
