"use client"
import { SIZES } from "@lib/theme"
import { Badge } from "@ui/Badge"
import { DataList, DataListItem } from "@ui/DataList"
import { Link } from "@ui/Link"

export default () => (
  <div className="grid grid-cols-4 place-items-start gap-4">
    {SIZES.map((size) => (
      <DataList size={size} labelPosition="side" key={size}>
        <DataListItem label="Name" value="John Doe" />
        <DataListItem label="Role" value="Designer" />
        <DataListItem
          label="Email"
          value={<Link href="#">john@doe.com</Link>}
        />
        <DataListItem
          label="Status"
          value={<Badge intent="success">Active</Badge>}
        />
      </DataList>
    ))}
  </div>
)
