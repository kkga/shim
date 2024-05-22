import { Meter } from "@ui/Meter"

export default () => (
  <Meter
    label="Progress"
    minValue={0}
    maxValue={4}
    value={1}
    valueLabel="1 of 4"
    description="3 more steps to go!"
  />
)
