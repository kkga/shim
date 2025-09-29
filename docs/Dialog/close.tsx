"use client";
import { Button } from "@/components/button";
import { Dialog, DialogTrigger } from "@/components/dialog";
import { Form } from "@/components/form";
import { TextField } from "@/components/text-field";

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
