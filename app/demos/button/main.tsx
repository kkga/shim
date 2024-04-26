import { Button } from '@ui/button'

import {
  ArrowRight,
  CheckCircle,
  Download,
  Trash,
} from '@phosphor-icons/react/dist/ssr'

export default () => (
  <>
    <Button intent="neutral">Submit</Button>
    <Button intent="neutral">
      <Download size={16} weight="duotone" />
      Download
    </Button>
    <Button intent="error">
      <Trash size={16} weight="duotone" />
      Delete
    </Button>
    <Button intent="success" size={1}>
      <CheckCircle size={16} weight="duotone" />
      Accept
    </Button>
    <Button intent="accent">
      Next
      <ArrowRight size={16} weight="duotone" />
    </Button>
  </>
)
