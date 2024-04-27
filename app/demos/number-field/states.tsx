import { NumberField } from '@ui/number-field'

export default () => (
  <>
    <NumberField label="Cookies" isDisabled />
    <NumberField label="Cookies" isInvalid errorMessage="Invalid cookies" />
  </>
)
