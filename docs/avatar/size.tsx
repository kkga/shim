import { Avatar } from "@/components/avatar";

const SRC =
  "https://images.unsplash.com/photo-1533933269825-da140ad3132f?&w=256&h=256&q=80&crop=focalpoint&fp-x=0.5&fp-y=0.5&fp-z=1&fit=crop";

export default () => (
  <>
    <Avatar name="Kale Frost" size={1} src={SRC} />
    <Avatar name="Kale Frost" size={2} src={SRC} />
    <Avatar name="Kale Frost" size={3} src={SRC} />
    <Avatar name="Kale Frost" size={4} src={SRC} />
    <Avatar name="Kale Frost" size={5} src={SRC} />
    <Avatar name="Kale Frost" size={6} src={SRC} />
  </>
);
