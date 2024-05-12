import { Form } from "@ui/form"
import { TextField } from "@ui/textfield"

export default () => (
  <Form
    validationErrors={{
      name: "Sorry, this username is taken.",
      email: "User with this email already exists.",
    }}
  >
    <TextField name="name" label="Name" />
    <TextField name="email" type="email" label="Email" />
  </Form>
)
