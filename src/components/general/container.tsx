import React from "react"
import Navbar from "../navbar/navbar"

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-[80%] mx-auto">
      <Navbar />
      {children}
    </main>
  )
}

export default Container
