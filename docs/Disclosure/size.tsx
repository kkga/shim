"use client"
import { SIZES } from "@lib/theme"
import { Disclosure, DisclosureHeader, DisclosurePanel } from "@ui/Disclosure"

export default () =>
  SIZES.map((size) => (
    <Disclosure size={size} key={size}>
      <DisclosureHeader>Size {size}</DisclosureHeader>
      <DisclosurePanel>Size {size} content</DisclosurePanel>
    </Disclosure>
  ))
