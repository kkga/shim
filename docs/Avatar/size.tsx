import { Avatar } from "@ui/Avatar"

const SRC =
  "https://images.unsplash.com/photo-1533933269825-da140ad3132f?&w=256&h=256&q=80&crop=focalpoint&fp-x=0.5&fp-y=0.5&fp-z=1&fit=crop"

export default () => (
  <>
    <Avatar size={1} name="Kale Frost" src={SRC} />
    <Avatar size={2} name="Kale Frost" src={SRC} />
    <Avatar size={3} name="Kale Frost" src={SRC} />
    <Avatar size={4} name="Kale Frost" src={SRC} />
    <Avatar size={5} name="Kale Frost" src={SRC} />
    <Avatar size={6} name="Kale Frost" src={SRC} />
  </>
)
