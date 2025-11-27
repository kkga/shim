import { Disclosure } from "@/shim-ui/disclosure";

export default () =>
  (["soft", "surface", "ghost"] as const).map((variant) => (
    <Disclosure key={variant} title={`Variant: ${variant}`} variant={variant}>
      Disclosure content
    </Disclosure>
  ));
