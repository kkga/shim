import { ProgressCircle } from "@/components/progress-circle";

export default () => (
  <>
    <ProgressCircle aria-label="Loading…" size={1} value={70} />
    <ProgressCircle aria-label="Loading…" size={2} value={70} />
    <ProgressCircle aria-label="Loading…" size={3} value={70} />
  </>
);
