import { Button } from "@ui/button"
import { Form } from "@ui/form"
import { TextField } from "@ui/textfield"

export default () => (
  <Form>
    <TextField isRequired name="email" type="email" label="Email" />
    <Button className="self-end" type="submit">
      Submit
    </Button>
  </Form>
)
