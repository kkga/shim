import { Button } from "@ui/Button"
import { Form } from "@ui/Form"
import { TextField } from "@ui/TextField"

export default () => (
  <Form>
    <TextField isRequired name="name" type="text" label="Name" />
    <TextField isRequired name="email" type="email" label="Email" />
    <Button className="self-end" type="submit">
      Submit
    </Button>
  </Form>
)
