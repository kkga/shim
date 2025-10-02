import { Select, SelectItem } from "@/components/select";

export default () => (
  <>
    <Select isDisabled label="Status" placeholder="Select status">
      <SelectItem>Open</SelectItem>
      <SelectItem>Closed</SelectItem>
    </Select>

    <Select
      errorMessage={"Please select status"}
      isInvalid
      label="Status"
      placeholder="Select status"
    >
      <SelectItem>Open</SelectItem>
      <SelectItem>Closed</SelectItem>
    </Select>
  </>
);
