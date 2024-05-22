"use client"
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
      {({ close }) => (
        <Form labelPosition="side" size={2}>
          <TextField label="Name" />
          <TextField label="Email" />
          <div className="flex gap-2 self-end">
            <Button onPress={close} intent="neutral" variant="ghost">
              Cancel
            </Button>
            <Button variant="solid">Save</Button>
          </div>
        </Form>
      )}
    </Dialog>
  </DialogTrigger>
)
