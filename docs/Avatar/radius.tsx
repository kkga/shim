import { Avatar } from "@ui/Avatar"

const SRC =
  "https://images.unsplash.com/photo-1533933269825-da140ad3132f?&w=256&h=256&q=80&crop=focalpoint&fp-x=0.5&fp-y=0.5&fp-z=1&fit=crop"

export default () => (
  <div className="flex gap-2">
    <Avatar radius="none" name="Kale Frost" src={SRC} />
    <Avatar radius="sm" name="Kale Frost" src={SRC} />
    <Avatar radius="md" name="Kale Frost" src={SRC} />
    <Avatar radius="lg" name="Kale Frost" src={SRC} />
    <Avatar radius="full" name="Kale Frost" src={SRC} />
  </div>
)
