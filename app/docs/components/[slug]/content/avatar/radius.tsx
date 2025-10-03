import { Avatar } from "@/shim-ui/avatar";

const SRC =
  "https://images.unsplash.com/photo-1533933269825-da140ad3132f?&w=256&h=256&q=80&crop=focalpoint&fp-x=0.5&fp-y=0.5&fp-z=1&fit=crop";

export default () => (
  <>
    <Avatar name="Kale Frost" radius="none" src={SRC} />
    <Avatar name="Kale Frost" radius="sm" src={SRC} />
    <Avatar name="Kale Frost" radius="md" src={SRC} />
    <Avatar name="Kale Frost" radius="lg" src={SRC} />
    <Avatar name="Kale Frost" radius="full" src={SRC} />
  </>
);
