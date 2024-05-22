import { Badge } from "@ui/Badge"
import {
  DataList,
  DataListItem,
  DataListLabel,
  DataListValue,
} from "@ui/DataList"
import { Link } from "@ui/Link"

export default () => (
  <DataList orientation="vertical">
    <DataListItem>
      <DataListLabel>Name</DataListLabel>
      <DataListValue>John Doe</DataListValue>
    </DataListItem>
    <DataListItem>
      <DataListLabel>Role</DataListLabel>
      <DataListValue>Designer</DataListValue>
    </DataListItem>
    <DataListItem>
      <DataListLabel>Email</DataListLabel>
      <DataListValue>
        <Link href="#">john@doe.com</Link>
      </DataListValue>
    </DataListItem>
    <DataListItem>
      <DataListLabel>Status</DataListLabel>
      <DataListValue>
        <Badge size={1} intent="success">
          Active
        </Badge>
      </DataListValue>
    </DataListItem>
  </DataList>
)
