import { Form } from "@ui/form"
import { TextField } from "@ui/textfield"

export default () => (
  <Form
    validationErrors={{
      username: "Sorry, this username is taken",
      email: "User with this email already exists",
    }}
  >
    <TextField name="username" label="Username" />
    <TextField name="email" type="email" label="Email" />
  </Form>
)
