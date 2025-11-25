import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader,
} from "@/shim-ui/table";

export default () =>
  (["zebra", "ghost", "surface"] as const).map((variant) => (
    <Table
      aria-label="People"
      className="table-fixed"
      key={variant}
      variant={variant}
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
        <Row>
          <Cell>Sam Johnson</Cell>
          <Cell>Subscriber</Cell>
        </Row>
      </TableBody>
    </Table>
  ));
