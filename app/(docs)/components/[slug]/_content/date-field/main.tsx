import { DateField } from "@/shim-ui/date-field";

export default () => (
  <>
    <DateField label="Date" />
    <DateField granularity="hour" label="Date" />
    <DateField granularity="minute" label="Date" />
    <DateField granularity="second" label="Date" />
  </>
);
