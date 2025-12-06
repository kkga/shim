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
      <Form>
        <TextField label="Name" />
        <TextField label="Email" />
        <Button className="mt-2 self-end" intent="accent" variant="solid">
          Save
        </Button>
      </Form>
    </Dialog>
  </DialogTrigger>
);
