"use client"
import { Meter } from "@ui/Meter"

export default () => (
  <>
    <Meter label="Usage" value={80} color="var(--color-warning-solid)" />
    <Meter label="Almost there" value={95} color={getColor} />
    <Meter label="Getting there" value={55} color={getColor} />
    <Meter label="Just starting" value={15} color={getColor} />
  </>
)

function getColor(value: number) {
  switch (true) {
    case value > 90:
      return "var(--color-success-solid)"
    case value > 50:
      return "var(--color-accent-solid)"
    default:
      return "var(--color-neutral-solid)"
  }
}
