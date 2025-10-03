"use client";
import { Button } from "@/shim-ui/button";
import { Dialog, DialogTrigger } from "@/shim-ui/dialog";
import { Form } from "@/shim-ui/form";
import { TextField } from "@/shim-ui/text-field";

export default () => (
  <DialogTrigger>
    <Button className="self-start">Edit profile</Button>
    <Dialog
      className="max-w-sm"
      description="Edit your profile information."
      title="Edit profile"
    >
      {({ close }) => (
        <Form labelPosition="side" size={2}>
          <TextField label="Name" />
          <TextField label="Email" />
          <div className="flex gap-2 self-end">
            <Button intent="neutral" onPress={close} variant="ghost">
              Cancel
            </Button>
            <Button variant="solid">Save</Button>
          </div>
        </Form>
      )}
    </Dialog>
  </DialogTrigger>
);
