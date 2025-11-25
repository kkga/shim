"use client";
import { CheckIcon, XIcon } from "@phosphor-icons/react";
import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader,
} from "@/shim-ui/table";

let columns = [
  { id: "creature", name: "Creature", isRowHeader: true },
  { id: "canFly", name: "Can fly" },
  { id: "hasHorn", name: "Has horn" },
  { id: "scary", name: "Scary" },
];

let rows = [
  {
    id: 1,
    creature: "Unicorn",
    canFly: false,
    hasHorn: true,
    scary: false,
  },
  {
    id: 2,
    creature: "Dragon",
    canFly: true,
    hasHorn: false,
    scary: true,
  },
  {
    id: 3,
    creature: "Mermaid",
    canFly: false,
    hasHorn: false,
    scary: false,
  },
];

const Check = () => (
  <CheckIcon className="text-success-text" size={16} weight="bold" />
);
const X = () => <XIcon className="text-neutral-text-subtle" size={16} />;

export default () => (
  <Table aria-label="Mythical Creatures" className="table-fixed">
    <TableHeader columns={columns}>
      {(column) => (
        <Column isRowHeader={column.isRowHeader}>{column.name}</Column>
      )}
    </TableHeader>
    <TableBody items={rows}>
      {({ creature, canFly, hasHorn, scary }) => (
        <Row>
          <Cell>{creature}</Cell>
          <Cell className="align-middle">{canFly ? <Check /> : <X />}</Cell>
          <Cell className="align-middle">{hasHorn ? <Check /> : <X />}</Cell>
          <Cell className="align-middle">{scary ? <Check /> : <X />}</Cell>
        </Row>
      )}
    </TableBody>
  </Table>
);
