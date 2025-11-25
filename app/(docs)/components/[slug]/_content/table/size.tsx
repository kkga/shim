import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader,
} from "@/shim-ui/table";

export default () =>
  ([1, 2, 3, 4] as const).map((size) => (
    <Table
      aria-label="People"
      className="table-fixed"
      key={size}
      selectionMode="multiple"
      size={size}
    >
      <TableHeader>
        <Column className="w-1/3" isRowHeader>
          Name
        </Column>
        <Column>Role</Column>
      </TableHeader>
      <TableBody>
        <Row>
          <Cell>John Doe</Cell>
          <Cell>Administrator</Cell>
        </Row>
        <Row>
          <Cell>Jane Smith</Cell>
          <Cell>Editor</Cell>
        </Row>
      </TableBody>
    </Table>
  ));
