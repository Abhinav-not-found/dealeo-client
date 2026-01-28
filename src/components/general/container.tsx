import React from "react"
import Navbar from "../navbar/navbar"

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[80%] mx-auto">
      <Navbar />
      {children}
    </div>
  )
}

export default Container
