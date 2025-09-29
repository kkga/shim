"use client";
import {
  Disclosure,
  DisclosureHeader,
  DisclosurePanel,
} from "@/components/disclosure";
import { SIZES } from "@/lib/theme";

export default () =>
  SIZES.map((size) => (
    <Disclosure key={size} size={size}>
      <DisclosureHeader>Size {size}</DisclosureHeader>
      <DisclosurePanel>Size {size} content</DisclosurePanel>
    </Disclosure>
  ));
