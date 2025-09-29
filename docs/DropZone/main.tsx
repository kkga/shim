import { DropZone } from "@/components/drop-zone";

export default () => (
  <>
    <DropZone>
      <span slot="label">Drop here</span>
    </DropZone>

    <div
      className="w-max rounded-sm bg-neutral-base px-2 py-1 shadow-sm"
      draggable="true"
    >
      Drag me
    </div>
  </>
);
