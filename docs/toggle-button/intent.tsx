import { ToggleButton } from "@/components/toggle-button";

export default () => (
  <>
    <ToggleButton intent="neutral">Neutral</ToggleButton>
    <ToggleButton intent="accent">Accent</ToggleButton>
    <ToggleButton intent="success">Success</ToggleButton>
    <ToggleButton intent="warning">Warning</ToggleButton>
    <ToggleButton intent="danger">Danger</ToggleButton>
  </>
);
