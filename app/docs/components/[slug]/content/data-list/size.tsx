"use client";
import { Badge } from "@/components/badge";
import { DataList, DataListItem } from "@/components/data-list";
import { Link } from "@/components/link";

export default () => (
  <div className="grid grid-cols-2 gap-y-6 self-start">
    {([1, 2, 3, 4] as const).map((size) => (
      <DataList key={size} labelPosition="side" size={size}>
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
);
