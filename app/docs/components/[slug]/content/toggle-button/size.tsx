import { PushPin } from "@phosphor-icons/react/dist/ssr";
import { ToggleButton } from "@/shim-ui/toggle-button";

export default () => (
  <>
    <ToggleButton size={1}>
      <PushPin size={16} weight="duotone" />
    </ToggleButton>

    <ToggleButton size={2}>
      <PushPin size={16} weight="duotone" />
    </ToggleButton>

    <ToggleButton size={3}>
      <PushPin size={16} weight="duotone" />
    </ToggleButton>

    <ToggleButton size={4}>
      <PushPin size={20} weight="duotone" />
    </ToggleButton>
  </>
);
