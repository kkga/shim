import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import { IconButton } from '@ui/icon-button'

export default () => (
  <>
    <IconButton variant="soft">
      <ArrowRight size={16} weight="duotone" />
    </IconButton>
    <IconButton variant="solid">
      <ArrowRight size={16} weight="duotone" />
    </IconButton>
    <IconButton variant="ghost">
      <ArrowRight size={16} weight="duotone" />
    </IconButton>
  </>
)
