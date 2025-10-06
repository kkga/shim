import { Meter } from "@/shim-ui/meter";

export default () => (
  <Meter
    description="3 more steps to go!"
    label="Progress"
    maxValue={4}
    minValue={0}
    value={1}
    valueLabel="1 of 4"
  />
);
