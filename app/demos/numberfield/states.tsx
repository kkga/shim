import { NumberField } from "@ui/numberfield"

export default () => (
  <>
    <NumberField label="Cookies" isDisabled />
    <NumberField label="Cookies" isInvalid errorMessage="Invalid cookies" />
  </>
)
