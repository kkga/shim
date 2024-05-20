import { Badge } from "@ui/badge"
import { DataList, DataListLabel, DataListValue } from "@ui/datalist"
import { Link } from "@ui/link"

export default () => (
  <DataList>
    <DataListLabel>Name</DataListLabel>
    <DataListValue>John Doe</DataListValue>
    <DataListLabel>Role</DataListLabel>
    <DataListValue>Designer</DataListValue>
    <DataListLabel>Email</DataListLabel>
    <DataListValue>
      <Link href="#">john@doe.com</Link>
    </DataListValue>
    <DataListLabel>Status</DataListLabel>
    <DataListValue>
      <Badge size={1} intent="success">
        Active
      </Badge>
    </DataListValue>
  </DataList>
)
