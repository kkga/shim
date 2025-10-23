import { TextField } from "@/shim-ui/text-field";

export default () =>
  ([1, 2, 3, 4] as const).map((size) => (
    <TextField
      key={size}
      label="First name"
      labelPosition="side"
      placeholder="John"
      size={size}
    />
  ));
