import { NumberField } from "@ui/NumberField"

export default () => (
  <>
    <NumberField label="Cookies" isDisabled />
    <NumberField label="Cookies" isInvalid errorMessage="Invalid cookies" />
  </>
)
