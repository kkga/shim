import { DropZone } from "@/components/DropZone"

export default () => (
  <>
    <DropZone>
      <span slot="label">Drop here</span>
    </DropZone>

    <div
      draggable="true"
      className="bg-neutral-base w-max rounded-sm px-2 py-1 shadow-sm"
    >
      Drag me
    </div>
  </>
)
