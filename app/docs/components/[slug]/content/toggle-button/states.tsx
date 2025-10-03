import { PushPin } from "@phosphor-icons/react/dist/ssr";
import { ToggleButton } from "@/shim-ui/toggle-button";

export default () => (
  <>
    <ToggleButton isSelected>
      <PushPin size={16} weight="fill" />
      Selected
    </ToggleButton>
    <ToggleButton isDisabled>
      <PushPin size={16} />
      Disabled
    </ToggleButton>
  </>
);
