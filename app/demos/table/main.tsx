import { Cell, Column, Row, Table, TableBody, TableHeader } from "@ui/table"

export default () => (
  <Table aria-label="Files">
    <TableHeader>
      <Column isRowHeader>Name</Column>
      <Column>Type</Column>
    </TableHeader>
    <TableBody>
      <Row>
        <Cell>Games</Cell>
        <Cell>File folder</Cell>
      </Row>
      <Row>
        <Cell>Program Files</Cell>
        <Cell>File folder</Cell>
      </Row>
      <Row>
        <Cell>bootmgr</Cell>
        <Cell>System file</Cell>
      </Row>
    </TableBody>
  </Table>
)
