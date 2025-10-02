import { NumberField } from "@/components/number-field";

export default () => (
  <>
    <NumberField isDisabled label="Cookies" />
    <NumberField errorMessage="Invalid cookies" isInvalid label="Cookies" />
  </>
);
