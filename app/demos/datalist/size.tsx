import { Badge } from "@ui/badge"
import { DataList, DataListItem, DataListLabel, DataListValue } from "@ui/datalist"
import { Link } from "@ui/link"

export default () => (
  <div className="flex flex-col gap-6">
    <DataList size={1}>
      <DataListItem>
        <DataListLabel>Name</DataListLabel>
        <DataListValue>John Doe</DataListValue>
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
          <Badge intent="success">Active</Badge>
        </DataListValue>
      </DataListItem>
    </DataList>

    <DataList size={2}>
      <DataListItem>
        <DataListLabel>Name</DataListLabel>
        <DataListValue>John Doe</DataListValue>
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
          <Badge intent="success">Active</Badge>
        </DataListValue>
      </DataListItem>
    </DataList>

    <DataList size={3}>
      <DataListItem>
        <DataListLabel>Name</DataListLabel>
        <DataListValue>John Doe</DataListValue>
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
          <Badge intent="success">Active</Badge>
        </DataListValue>
      </DataListItem>
    </DataList>
  </div>
)
