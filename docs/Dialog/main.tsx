import { Button } from "@ui/Button"
import { Dialog, DialogTrigger } from "@ui/Dialog"
import { Form } from "@ui/Form"
import { TextField } from "@ui/TextField"

export default () => (
  <DialogTrigger>
    <Button className="self-start">Edit profile</Button>
    <Dialog
      title="Edit profile"
      description="Edit your profile information."
      className="max-w-sm"
    >
      <Form size={2} labelPosition="side">
        <TextField label="Name" />
        <TextField label="Email" />
        <Button variant="solid" className="self-end">
          Save
        </Button>
      </Form>
    </Dialog>
  </DialogTrigger>
)
