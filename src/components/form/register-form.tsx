import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
const RegisterForm = () => {
  return (
    <form>
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor='name'>Name</FieldLabel>
            <Input id='name' placeholder='your name' />
          </Field>
          <Field>
            <FieldLabel htmlFor='email'>Email address</FieldLabel>
            <Input id='email' placeholder='you@example.com' />
          </Field>
          <Field>
            <FieldLabel htmlFor='password'>Password</FieldLabel>
            <Input id='password' placeholder='••••••' />
          </Field>
          <Field orientation='horizontal'>
            <Button className='w-full'>Sign Up</Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  )
}

export default RegisterForm
