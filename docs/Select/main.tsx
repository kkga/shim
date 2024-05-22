import { Select, SelectItem } from "@ui/Select"

export default () => (
  <Select label="Status" placeholder="Select status">
    <SelectItem>Open</SelectItem>
    <SelectItem>Closed</SelectItem>
    <SelectItem>In Progress</SelectItem>
    <SelectItem>Resolved</SelectItem>
  </Select>
)
