import { Form } from "@/shim-ui/form";
import { TextField } from "@/shim-ui/text-field";

export default () => (
  <Form
    validationErrors={{
      name: "Sorry, this username is taken.",
      email: "User with this email already exists.",
    }}
  >
    <TextField label="Name" name="name" />
    <TextField label="Email" name="email" type="email" />
  </Form>
);
