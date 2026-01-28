import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { LoginFormState } from "@/components/form/login-form"
import { RegisterFormState } from "@/components/form/register-form"
import { toast } from "sonner"

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
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        credentials: "include",
      },
    )
    const data: { message?: string; code?: string } = await res.json()
    if (!res.ok) {
      switch (data.code) {
        case "MISSING_FIELDS":
        case "INVALID_CREDENTIALS":
        case "VALIDATION_ERROR":
        case "EMAIL_EXISTS":
          toast.error(data.message)
          break
        default:
          toast.error(data.message || "Login failed")
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

export const handleRegister = async (
  e: React.FormEvent<HTMLFormElement>,
  form: RegisterFormState,
  router: AppRouterInstance,
  { setLoading }: HandleLoginArgs,
) => {
  e.preventDefault()
  setLoading(true)

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        credentials: "include",
      },
    )
    const data: { message?: string; code?: string } = await res.json()
    if (!res.ok) {
      switch (data.code) {
        case "MISSING_FIELDS":
        case "EMAIL_EXISTS":
        case "VALIDATION_ERROR":
          toast.error(data.message)
          break
        default:
          toast.error(data.message || "Register failed")
      }
      return
    }
    toast.success(data.message)
    router.push("/login")
    router.refresh()
  } catch (error) {
    console.log(error)
  } finally {
    setLoading(false)
  }
}

export const handleLogout = async (
  router: AppRouterInstance,
  { setLoading }: HandleLoginArgs,
) => {
  setLoading(true)
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      },
    )
    const data = await res.json()
    if (res.ok) {
      toast.success(data.message)
      router.push("/")
      router.refresh()
    }
  } catch (error) {
    console.log(error)
  } finally {
    setLoading(false)
  }
}
