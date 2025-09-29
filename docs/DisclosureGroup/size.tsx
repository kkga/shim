"use client";
import { SIZES } from "@lib/theme";
import {
  Disclosure,
  DisclosureHeader,
  DisclosurePanel,
} from "@/components/disclosure";
import { DisclosureGroup } from "@/components/disclosure-group";

export default () =>
  SIZES.map((size) => (
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
