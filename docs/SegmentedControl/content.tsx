import {
  TextAlignLeft,
  TextAlignCenter,
  TextAlignRight,
  Rows,
  Columns,
} from "@phosphor-icons/react/dist/ssr"
import { SegmentedControl, SegmentedControlItem } from "@ui/SegmentedControl"

export default () => (
  <>
    <SegmentedControl aria-label="Alignment" defaultValue={"left"}>
      <SegmentedControlItem value="left">
        <TextAlignLeft size={16} />
      </SegmentedControlItem>
      <SegmentedControlItem value="center">
        <TextAlignCenter size={16} />
      </SegmentedControlItem>
      <SegmentedControlItem value="right">
        <TextAlignRight size={16} />
      </SegmentedControlItem>
    </SegmentedControl>

    <SegmentedControl aria-label="Direction" defaultValue={"rows"}>
      <SegmentedControlItem value="rows">
        <Rows size={16} />
        Rows
      </SegmentedControlItem>
      <SegmentedControlItem value="columns">
        <Columns size={16} />
        Columns
      </SegmentedControlItem>
    </SegmentedControl>
  </>
)
