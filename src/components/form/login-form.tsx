"use client"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Spinner } from "../ui/spinner"
import { handleLogin } from "@/app/helpers/auth.helper"

export type LoginFormState = {
  email: string
  password: string
}

const LoginForm = () => {
  const [form, setForm] = useState<LoginFormState>({ email: "", password: "" })
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setForm((prev) => ({ ...prev, [id]: value }))
  }

  const fields: Array<{
    id: keyof LoginFormState
    label: string
    placeholder: string
    type: string
  }> = [
    {
      id: "email",
      label: "Email",
      placeholder: "johnDoe@gmail.com",
      type: "email",
    },
    {
      id: "password",
      label: "Password",
      placeholder: "••••••",
      type: "password",
    },
  ]

  return (
    <form onSubmit={(e) => handleLogin(e, form, router, { setLoading })}>
      <FieldSet>
        <FieldGroup>
          {fields.map(({ id, label, placeholder, type }) => (
            <Field key={id}>
              <FieldLabel htmlFor={id}>{label}</FieldLabel>
              <Input
                id={id}
                type={type}
                value={form[id]}
                onChange={handleChange}
                placeholder={placeholder}
              />
            </Field>
          ))}
          <Field orientation='horizontal'>
            <Button className='w-full' disabled={loading}>
              {loading ? <Spinner /> : "Sign In"}
            </Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  )
}

export default LoginForm
