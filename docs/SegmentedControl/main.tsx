import { SegmentedControl, SegmentedControlItem } from "@ui/SegmentedControl"

export default () => (
  <SegmentedControl label="Language" defaultValue={"js"}>
    <SegmentedControlItem value="js">JS</SegmentedControlItem>
    <SegmentedControlItem value="ts">TS</SegmentedControlItem>
    <SegmentedControlItem value="py">Python</SegmentedControlItem>
  </SegmentedControl>
)
