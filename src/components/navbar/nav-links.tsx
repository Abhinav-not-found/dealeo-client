import Link from "next/link"
import React from "react"

const NavLinks = () => {
  return (
    <nav className='flex gap-4'>
      <Lnk href={"explore"}>Explore</Lnk>
      {/* <Lnk href={"dashboard"}>Dashboard</Lnk> */}
    </nav>
  )
}

const Lnk = ({
  children,
  href,
}: {
  href: string
  children: React.ReactNode
}) => {
  return (
    <Link href={href}>
      <p className='hover:underline underline-offset-2 text-muted-foreground hover:text-black dark:hover:text-white text-base'>
        {children}
      </p>
    </Link>
  )
}
export default NavLinks
