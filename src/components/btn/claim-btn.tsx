"use client"

import { Button } from "../ui/button"
import { useRouter } from "next/navigation"

type ClaimBtnProps = {
  isAuthenticated: boolean
}

const ClaimBtn = ({ isAuthenticated }: ClaimBtnProps) => {
  const router = useRouter()

  const handleClick = () => {
    if (!isAuthenticated) {
      router.push("/login")
      return
    }

    // call claim API here later
  }

  return (
    <Button
      onClick={handleClick}
      className="w-full mt-5 py-7 text-md rounded-xl"
    >
      Claim Deal
    </Button>
  )
}

export default ClaimBtn
