import Link from 'next/link'
import { Button } from '../ui/button'

const LoginBtn = () => {
  return (
    <Link href={'/login'}>
      <Button variant={'default'}>
        Login
      </Button>
    </Link>
  )
}

export default LoginBtn
