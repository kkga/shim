"use client";
import {
  Disclosure,
  DisclosureHeader,
  DisclosurePanel,
} from "@/components/disclosure";

export default () =>
  ([1, 2, 3, 4] as const).map((size) => (
    <Disclosure key={size} size={size}>
      <DisclosureHeader>Size {size}</DisclosureHeader>
      <DisclosurePanel>Size {size} content</DisclosurePanel>
    </Disclosure>
  ));
