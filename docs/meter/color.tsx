"use client";
import { Meter } from "@/components/meter";

export default () => (
  <>
    <Meter color="var(--color-warning-solid)" label="Usage" value={80} />
    <Meter color={getColor} label="Almost there" value={95} />
    <Meter color={getColor} label="Getting there" value={55} />
    <Meter color={getColor} label="Just starting" value={15} />
  </>
);

function getColor(value: number) {
  switch (true) {
    case value > 90:
      return "var(--color-success-solid)";
    case value > 50:
      return "var(--color-accent-solid)";
    default:
      return "var(--color-neutral-solid)";
  }
}
