"use client"
import { Button } from "@ui/button"
import { Dialog, DialogTrigger } from "@ui/dialog"
import { Form } from "@ui/form"
import { TextField } from "@ui/textfield"

export default () => (
  <DialogTrigger>
    <Button className="self-start">Edit profile</Button>
    <Dialog title="Edit profile" description="Edit your profile information." className="max-w-sm">
      {({ close }) => (
        <Form>
          <TextField label="Name" labelPosition="side" size={2} />
          <TextField label="Email" labelPosition="side" size={2} />
          <div className="flex gap-2 self-end">
            <Button onPress={close} size={2} intent="neutral" variant="ghost">
              Cancel
            </Button>
            <Button variant="solid" size={2}>
              Save
            </Button>
          </div>
        </Form>
      )}
    </Dialog>
  </DialogTrigger>
)
