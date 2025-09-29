import { BoundingBox, Eraser, Pencil } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/button";
import { Toolbar } from "@/components/toolbar";

export default () => (
  <Toolbar aria-label="Tools" orientation="vertical">
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
);
