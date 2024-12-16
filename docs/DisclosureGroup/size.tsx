"use client"
import { SIZES } from "@lib/theme"
import { Disclosure, DisclosureHeader, DisclosurePanel } from "@ui/Disclosure"
import { DisclosureGroup } from "@ui/DisclosureGroup"

export default () => (
  <div className="grid grid-cols-4 items-start gap-4">
    {SIZES.map((size) => (
      <DisclosureGroup size={size} defaultExpandedKeys={["refund"]} key={size}>
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
    ))}
  </div>
)
