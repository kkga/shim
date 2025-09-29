import { Button } from "@/components/button";
import { Form } from "@/components/form";
import { TextField } from "@/components/text-field";

export default () => (
  <Form>
    <TextField isRequired label="Name" name="name" type="text" />
    <TextField isRequired label="Email" name="email" type="email" />
    <Button className="self-end" type="submit">
      Submit
    </Button>
  </Form>
);
