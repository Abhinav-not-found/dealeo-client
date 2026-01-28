import { LoginFormState } from "@/components/form/login-form"
import { toast } from "sonner"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

type HandleLoginArgs = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const handleLogin = async (
  e: React.FormEvent<HTMLFormElement>,
  form: LoginFormState,
  router: AppRouterInstance,
  { setLoading }: HandleLoginArgs,
) => {
  e.preventDefault()
  setLoading(true)

  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    const data: { message?: string; code?: string }  = await res.json()
    if (!res.ok) {
      switch (data.code) {
        case "FIELDS_REQUIRED":
        case "PASSWORD_TOO_SHORT":
        case "EMAIL_ALREADY_REGISTERED":
        case "VALIDATION_ERROR":
        case "ACCOUNT_BANNED":
        case "REGISTER_DISABLED":
          toast.error(data.message)
          break

        default:
          toast.error(data.message || "Something went wrong")
      }
      return
    }
    toast.success(data.message)
    router.push("/dashboard")
    router.refresh()
  } catch (error) {
    console.log(error)
  } finally {
    setLoading(false)
  }
}
