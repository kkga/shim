import { Badge } from "@/components/badge";
import { DataList, DataListItem } from "@/components/data-list";
import { Link } from "@/components/link";

export default () => (
  <DataList labelPosition="side">
    <DataListItem label="Name" value="John Doe" />
    <DataListItem label="Role" value="Designer" />
    <DataListItem label="Email" value={<Link href="#">john@doe.com</Link>} />
    <DataListItem
      label="Status"
      value={<Badge intent="success">Active</Badge>}
    />
  </DataList>
);
