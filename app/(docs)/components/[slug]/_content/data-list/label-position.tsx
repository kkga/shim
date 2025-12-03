import { Badge } from "@/shim-ui/badge";
import { DataList, DataListItem } from "@/shim-ui/data-list";
import { Link } from "@/shim-ui/link";

export default () =>
  (["side", "side-end"] as const).map((labelPosition) => (
    <DataList
      className="w-[200px] grid-cols-[1fr_2fr]"
      key={labelPosition}
      labelPosition={labelPosition}
    >
      <DataListItem label="Name" value="John Doe" />
      <DataListItem label="Role" value="Designer" />
      <DataListItem label="Email" value={<Link href="#">john@doe.com</Link>} />
      <DataListItem
        label="Status"
        value={<Badge intent="success">Active</Badge>}
      />
    </DataList>
  ));
