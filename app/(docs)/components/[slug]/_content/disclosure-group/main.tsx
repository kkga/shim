import { Disclosure } from "@/shim-ui/disclosure";
import { DisclosureGroup } from "@/shim-ui/disclosure-group";

export default () => (
  <DisclosureGroup defaultExpandedKeys={["refund"]}>
    <Disclosure id="refund" title="What is your refund policy?">
      We offer a 30-day no-questions-asked refund policy.
    </Disclosure>

    <Disclosure title="What is your return policy?">
      We offer a 30-day no-questions-asked return policy.
    </Disclosure>

    <Disclosure title="What is your exchange policy?">
      We offer a 30-day no-questions-asked exchange policy.
    </Disclosure>
  </DisclosureGroup>
);
