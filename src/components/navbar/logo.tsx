import { cookies } from "next/headers"
import Link from "next/link"

const Logo = async () => {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")
  return (
    <Link href={token ? "/dashboard" : "/"}>
      <p className='font-semibold text-2xl tracking-tight'>Dealeo</p>
    </Link>
  )
}

export default Logo
