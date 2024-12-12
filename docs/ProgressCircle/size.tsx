import { ProgressCircle } from "@ui/ProgressCircle"

export default () => (
  <>
    <ProgressCircle size={1} value={70} aria-label="Loading…" />
    <ProgressCircle size={2} value={70} aria-label="Loading…" />
    <ProgressCircle size={3} value={70} aria-label="Loading…" />
  </>
)
