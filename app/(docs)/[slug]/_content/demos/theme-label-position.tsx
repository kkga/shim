"use client";
import { Badge } from "@/shim-ui/badge";
import { Select, SelectItem } from "@/shim-ui/select";
import { TextField } from "@/shim-ui/text-field";
import { Well } from "@/shim-ui/well";

export default () =>
  (["top", "side", "side-end"] as const).map((labelPosition) => (
    <Well className="gap-4" key={labelPosition}>
      <Badge>{labelPosition}</Badge>

      <TextField
        label="Name"
        labelPosition={labelPosition}
        placeholder="Your name"
      />
      <TextField
        label="Email"
        labelPosition={labelPosition}
        placeholder="Your email"
        type="email"
      />
      <Select
        items={[
          { id: "developer", name: "Developer" },
          { id: "designer", name: "Designer" },
          { id: "manager", name: "Manager" },
        ]}
        label="Role"
        labelPosition={labelPosition}
        placeholder="Select your role"
      >
        {({ name }) => <SelectItem>{name}</SelectItem>}
      </Select>
    </Well>
  ));
