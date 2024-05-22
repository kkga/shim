import { PushPin } from "@phosphor-icons/react/dist/ssr"
import { ToggleButton } from "@ui/ToggleButton"

export default () => (
  <>
    <ToggleButton isSelected>
      <PushPin size={16} weight="duotone" />
      Selected
    </ToggleButton>
    <ToggleButton isDisabled>
      <PushPin size={16} weight="duotone" />
      Disabled
    </ToggleButton>
  </>
)
