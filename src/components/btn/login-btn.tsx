import Link from "next/link"
import { Button } from "../ui/button"
import { cookies } from "next/headers"
import LogoutBtn from "./logout-btn"

const LoginBtn = async () => {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")

  if (token) {
    return <LogoutBtn />
  }

  return (
    <Link href={"/login"}>
      <Button variant={"default"}>Login</Button>
    </Link>
  )
}

export default LoginBtn
