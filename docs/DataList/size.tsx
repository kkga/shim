import { Badge } from "@ui/Badge"
import { DataList, DataListItem } from "@ui/DataList"
import { Link } from "@ui/Link"

export default () => (
  <div className="flex items-start gap-8">
    <DataList size={1}>
      <DataListItem label="Name" value="John Doe" />
      <DataListItem label="Role" value="Designer" />
      <DataListItem label="Email" value={<Link href="#">john@doe.com</Link>} />
      <DataListItem
        label="Status"
        value={<Badge intent="success">Active</Badge>}
      />
    </DataList>

    <DataList size={2}>
      <DataListItem label="Name" value="John Doe" />
      <DataListItem label="Role" value="Designer" />
      <DataListItem label="Email" value={<Link href="#">john@doe.com</Link>} />
      <DataListItem
        label="Status"
        value={<Badge intent="success">Active</Badge>}
      />
    </DataList>

    <DataList size={3}>
      <DataListItem label="Name" value="John Doe" />
      <DataListItem label="Role" value="Designer" />
      <DataListItem label="Email" value={<Link href="#">john@doe.com</Link>} />
      <DataListItem
        label="Status"
        value={<Badge intent="success">Active</Badge>}
      />
    </DataList>
  </div>
)
