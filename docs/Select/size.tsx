import { Select, SelectItem } from "@ui/Select"

export default () => (
  <>
    <Select size={1} label="Status" placeholder="Select status">
      <SelectItem>Open</SelectItem>
      <SelectItem>Closed</SelectItem>
    </Select>
    <Select size={2} label="Status" placeholder="Select status">
      <SelectItem>Open</SelectItem>
      <SelectItem>Closed</SelectItem>
    </Select>
    <Select size={3} label="Status" placeholder="Select status">
      <SelectItem>Open</SelectItem>
      <SelectItem>Closed</SelectItem>
    </Select>
  </>
)
