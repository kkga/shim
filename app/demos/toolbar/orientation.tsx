import { BoundingBox, Eraser, Pencil } from "@phosphor-icons/react/dist/ssr"
import { Button } from "@ui/button"
import { Toolbar } from "@ui/toolbar"

export default () => (
  <Toolbar orientation="vertical" aria-label="Tools">
    <Button aria-label="Pencil">
      <Pencil size={16} weight="duotone" />
    </Button>
    <Button aria-label="Shape">
      <BoundingBox size={16} weight="duotone" />
    </Button>
    <Button aria-label="Eraser">
      <Eraser size={16} weight="duotone" />
    </Button>
  </Toolbar>
)
