import {
  Disclosure,
  DisclosureHeader,
  DisclosurePanel,
} from "@/shim-ui/disclosure";

export default () => (
  <Disclosure>
    <DisclosureHeader>What is your refund policy?</DisclosureHeader>
    <DisclosurePanel>
      We offer a 30-day no-questions-asked refund policy.
    </DisclosurePanel>
  </Disclosure>
);
