import { Select, SelectItem } from '@ui/select'

export default () => (
  <>
    <Select isDisabled label='Status' placeholder='Select status'>
      <SelectItem>Open</SelectItem>
      <SelectItem>Closed</SelectItem>
    </Select>

    <Select
      label='Status'
      isInvalid
      errorMessage={'Please select status'}
      placeholder='Select status'
    >
      <SelectItem>Open</SelectItem>
      <SelectItem>Closed</SelectItem>
    </Select>
  </>
)
