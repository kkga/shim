"use client"
import { Check as CheckIcon, X as XIcon } from "@phosphor-icons/react"
import { Cell, Column, Row, Table, TableBody, TableHeader } from "@ui/table"

let columns = [
  { id: "creature", name: "Creature", isRowHeader: true },
  { id: "canFly", name: "Can fly" },
  { id: "hasHorn", name: "Has horn" },
  { id: "magical", name: "Magical" },
  { id: "scary", name: "Scary" },
]

let rows = [
  { id: 1, creature: "Unicorn", canFly: false, hasHorn: true, magical: true, scary: false },
  { id: 2, creature: "Dragon", canFly: true, hasHorn: false, magical: true, scary: true },
  { id: 3, creature: "Mermaid", canFly: false, hasHorn: false, magical: true, scary: false },
  { id: 4, creature: "Bigfoot", canFly: false, hasHorn: false, magical: false, scary: true },
  { id: 5, creature: "Chimera", canFly: false, hasHorn: true, magical: false, scary: true },
]

const Check = () => <CheckIcon size={16} weight="bold" className="text-success-text" />
const X = () => <XIcon size={16} weight="bold" className="text-error-text" />

export default () =>  (
  <Table aria-label="Mythical Creatures">
    <TableHeader columns={columns}>
      {(column) => <Column isRowHeader={column.isRowHeader}>{column.name}</Column>}
    </TableHeader>
    <TableBody items={rows}>
      {({ creature, canFly, hasHorn, magical, scary }) => (
        <Row>
          <Cell>{creature}</Cell>
          <Cell>{canFly ? <Check /> : <X />}</Cell>
          <Cell>{hasHorn ? <Check /> : <X />}</Cell>
          <Cell>{magical ? <Check /> : <X />}</Cell>
          <Cell>{scary ? <Check /> : <X />}</Cell>
        </Row>
      )}
    </TableBody>
  </Table>
)
