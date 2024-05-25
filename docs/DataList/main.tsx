import { Badge } from "@ui/Badge"
import { DataList, DataListItem } from "@ui/DataList"
import { Link } from "@ui/Link"

export default () => (
  <DataList>
    <DataListItem label="Name" value="John Doe" />
    <DataListItem label="Role" value="Designer" />
    <DataListItem label="Email" value={<Link href="#">john@doe.com</Link>} />
    <DataListItem
      label="Status"
      value={<Badge intent="success">Active</Badge>}
    />
  </DataList>
)
