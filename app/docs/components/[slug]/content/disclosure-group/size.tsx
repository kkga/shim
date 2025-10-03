"use client";
import {
  Disclosure,
  DisclosureHeader,
  DisclosurePanel,
} from "@/shim-ui/disclosure";
import { DisclosureGroup } from "@/shim-ui/disclosure-group";

export default () =>
  ([1, 2, 3, 4] as const).map((size) => (
    <DisclosureGroup defaultExpandedKeys={["refund"]} key={size} size={size}>
      <Disclosure id="refund">
        <DisclosureHeader>Refund policy?</DisclosureHeader>
        <DisclosurePanel>We offer refunds.</DisclosurePanel>
      </Disclosure>

      <Disclosure>
        <DisclosureHeader>Return policy?</DisclosureHeader>
        <DisclosurePanel>30-day return policy.</DisclosurePanel>
      </Disclosure>

      <Disclosure>
        <DisclosureHeader>Exchange policy?</DisclosureHeader>
        <DisclosurePanel>30-day exchange policy.</DisclosurePanel>
      </Disclosure>
    </DisclosureGroup>
  ));
