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
      <Form labelPosition="side" size={2}>
        <TextField label="Name" />
        <TextField label="Email" />
        <Button className="self-end" variant="solid">
          Save
        </Button>
      </Form>
    </Dialog>
  </DialogTrigger>
);
