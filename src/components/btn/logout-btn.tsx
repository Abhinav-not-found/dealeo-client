"use client"
import React, { useState } from "react"
import { Button } from "../ui/button"
import { handleLogout } from "@/app/helpers/auth.helper"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { Spinner } from "../ui/spinner"

const LogoutBtn = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  return (
    <Button
      onClick={() => handleLogout(router, { setLoading })}
      variant={"outline"}
    >
      {loading ? (
        <Spinner />
      ) : (
        <>
          <LogOut />
          Logout
        </>
      )}
    </Button>
  )
}

export default LogoutBtn
