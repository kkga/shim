import {
  Disclosure,
  DisclosureHeader,
  DisclosurePanel,
} from "@/components/disclosure";
import { DisclosureGroup } from "@/components/disclosure-group";

export default () => (
  <DisclosureGroup defaultExpandedKeys={["refund"]}>
    <Disclosure id="refund">
      <DisclosureHeader>What is your refund policy?</DisclosureHeader>
      <DisclosurePanel>
        We offer a 30-day no-questions-asked refund policy.
      </DisclosurePanel>
    </Disclosure>

    <Disclosure>
      <DisclosureHeader>What is your return policy?</DisclosureHeader>
      <DisclosurePanel>
        We offer a 30-day no-questions-asked return policy.
      </DisclosurePanel>
    </Disclosure>

    <Disclosure>
      <DisclosureHeader>What is your exchange policy?</DisclosureHeader>
      <DisclosurePanel>
        We offer a 30-day no-questions-asked exchange policy.
      </DisclosurePanel>
    </Disclosure>
  </DisclosureGroup>
);
