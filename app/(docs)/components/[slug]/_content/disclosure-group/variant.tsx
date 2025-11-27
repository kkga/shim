import { Disclosure } from "@/shim-ui/disclosure";
import { DisclosureGroup } from "@/shim-ui/disclosure-group";

export default () =>
  (["soft", "surface", "ghost"] as const).map((variant) => (
    <DisclosureGroup
      defaultExpandedKeys={["refund"]}
      key={variant}
      variant={variant}
    >
      <Disclosure id="refund" title="What is your refund policy?">
        We offer refunds.
      </Disclosure>

      <Disclosure title="What is your return policy?">
        30-day return policy.
      </Disclosure>

      <Disclosure title="What is your exchange policy?">
        30-day exchange policy.
      </Disclosure>
    </DisclosureGroup>
  ));
