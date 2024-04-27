import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import { IconButton } from '@ui/icon-button'

export default () => (
  <>
    <IconButton intent="neutral">
      <ArrowRight size={16} weight="duotone" />
    </IconButton>
    <IconButton intent="accent">
      <ArrowRight size={16} weight="duotone" />
    </IconButton>
    <IconButton intent="success">
      <ArrowRight size={16} weight="duotone" />
    </IconButton>
    <IconButton intent="warning">
      <ArrowRight size={16} weight="duotone" />
    </IconButton>
    <IconButton intent="error">
      <ArrowRight size={16} weight="duotone" />
    </IconButton>
  </>
)
