import { Button } from "@ui/button"
import { Dialog, DialogTrigger } from "@ui/dialog"
import { Form } from "@ui/form"
import { TextField } from "@ui/textfield"

export default () => (
  <DialogTrigger>
    <Button className="self-start">Edit profile</Button>
    <Dialog title="Edit profile" description="Edit your profile information." className="max-w-sm">
      <Form>
        <TextField label="Name" size={2} labelPosition="side" />
        <TextField label="Email" size={2} labelPosition="side" />
        <Button variant="solid" className="self-end" size={2}>
          Save
        </Button>
      </Form>
    </Dialog>
  </DialogTrigger>
)
