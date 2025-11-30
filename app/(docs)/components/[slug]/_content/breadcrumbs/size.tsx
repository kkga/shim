import { Breadcrumb, Breadcrumbs } from "@/shim-ui/breadcrumbs";

export default () =>
  ([1, 2, 3, 4] as const).map((size) => (
    <Breadcrumbs key={size} size={size}>
      <Breadcrumb href="#">Shim</Breadcrumb>
      <Breadcrumb href="#">Docs</Breadcrumb>
      <Breadcrumb href="#">Breadcrumbs</Breadcrumb>
    </Breadcrumbs>
  ));
