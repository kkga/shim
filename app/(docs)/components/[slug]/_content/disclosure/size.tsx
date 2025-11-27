import { Disclosure } from "@/shim-ui/disclosure";

export default () =>
  ([1, 2, 3, 4] as const).map((size) => (
    <Disclosure key={size} size={size} title={`Size: ${size}`}>
      Disclosure content
    </Disclosure>
  ));
