import { CheckCircle, ClockCountdown, GitBranch, Leaf, Lock } from '@phosphor-icons/react/dist/ssr'
import { Badge } from '@ui/badge'

export default () => (
  <>
    <Badge intent='success'>
      <CheckCircle size={14} weight='duotone' />
      Approved
    </Badge>
    <Badge intent='error'>
      <Lock size={14} weight='duotone' />
      Locked
    </Badge>
    <Badge>
      <GitBranch size={14} weight='duotone' />
      kkga/dev
    </Badge>
    <Badge size={2} intent='warning'>
      <ClockCountdown size={16} weight='duotone' />
      Pending
    </Badge>
    <Badge size={2}>
      <Leaf size={16} weight='duotone' />
      New
    </Badge>
  </>
)
