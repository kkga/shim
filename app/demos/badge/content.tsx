import { CheckFat, ClockCountdown, GitBranch, Leaf, Lock } from "@phosphor-icons/react/dist/ssr"
import { Badge } from "@ui/badge"

export default () => (
  <>
    <div className="flex flex-wrap gap-2">
      <Badge intent="success">
        <CheckFat size={14} weight="duotone" aria-label="Approved" />
      </Badge>
      <Badge intent="error">
        <Lock size={14} weight="duotone" aria-label="Locked" />
      </Badge>
    </div>

    <div className="flex flex-wrap gap-2">
      <Badge size={3} intent="warning">
        <ClockCountdown size={16} weight="duotone" aria-label="Pending" />
      </Badge>
      <Badge size={3}>
        <Leaf size={16} weight="duotone" aria-label="New" />
      </Badge>
    </div>

    <div>
      <Badge>
        <GitBranch size={14} weight="duotone" />
        kkga/dev
      </Badge>
    </div>

    <div>
      <Badge intent="success" size={2}>
        <CheckFat size={14} weight="duotone" />
        Approved
      </Badge>
    </div>
  </>
)
