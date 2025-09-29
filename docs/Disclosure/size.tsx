"use client";
import { SIZES } from "@lib/theme";
import {
  Disclosure,
  DisclosureHeader,
  DisclosurePanel,
} from "@/components/disclosure";

export default () =>
  SIZES.map((size) => (
    <Disclosure key={size} size={size}>
      <DisclosureHeader>Size {size}</DisclosureHeader>
      <DisclosurePanel>Size {size} content</DisclosurePanel>
    </Disclosure>
  ));
