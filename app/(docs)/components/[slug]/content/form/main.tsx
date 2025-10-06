import { Button } from "@/shim-ui/button";
import { Form } from "@/shim-ui/form";
import { TextField } from "@/shim-ui/text-field";

export default () => (
  <Form>
    <TextField isRequired label="Name" name="name" type="text" />
    <TextField isRequired label="Email" name="email" type="email" />
    <Button className="self-end" type="submit">
      Submit
    </Button>
  </Form>
);
