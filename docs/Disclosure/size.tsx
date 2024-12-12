import { Disclosure, DisclosureHeader, DisclosurePanel } from "@ui/Disclosure"

export default () => (
  <>
    <Disclosure size={1}>
      <DisclosureHeader>Size 1</DisclosureHeader>
      <DisclosurePanel>Size 1 content</DisclosurePanel>
    </Disclosure>

    <Disclosure size={2}>
      <DisclosureHeader>Size 2</DisclosureHeader>
      <DisclosurePanel>Size 2 content</DisclosurePanel>
    </Disclosure>

    <Disclosure size={3}>
      <DisclosureHeader>Size 3</DisclosureHeader>
      <DisclosurePanel>Size 3 content</DisclosurePanel>
    </Disclosure>
  </>
)
