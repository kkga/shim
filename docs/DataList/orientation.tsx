import { Badge } from "@ui/Badge"
import { DataList, DataListItem } from "@ui/DataList"
import { Link } from "@ui/Link"

export default () => (
  <DataList orientation="vertical">
    <DataListItem label="Name" value="John Doe" />
    <DataListItem label="Role" value="Designer" />
    <DataListItem label="Email" value={<Link href="#">john@doe.com</Link>} />
    <DataListItem
      label="Status"
      value={
        <Badge size={1} intent="success">
          {" "}
          Active{" "}
        </Badge>
      }
    />
  </DataList>
)
