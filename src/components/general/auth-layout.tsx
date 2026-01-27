import Link from "next/link"
import React from "react"

const AuthLayout = ({
  heading,
  subHeading,
  children,
  ui,
}: {
  children: React.ReactNode
  heading: string
  subHeading: string
  ui: string
}) => {
  return (
    <div>
      <Header heading={heading} subHeading={subHeading} />

      <div className={ui ==='login'? 'w-96':'w-lg'}>{children}</div>

      {ui === "login" ? (
        <p className='mt-14 text-muted-foreground text-center'>
          Don't have an account?{" "}
          <Link
            href={"/register"}
            className='text-black dark:text-white underline underline-offset-2 cursor-pointer'
          >
            Sign up
          </Link>
        </p>
      ) : (
        <p className='mt-14 text-muted-foreground text-center'>
          Already have an account?{" "}
          <Link
            href={"/login"}
            className='text-black dark:text-white underline underline-offset-2 cursor-pointer'
          >
            Sign in
          </Link>
        </p>
      )}
    </div>
  )
}

const Header = ({
  heading,
  subHeading,
}: {
  heading: string
  subHeading: string
}) => {
  return (
    <div className='text-center mb-14'>
      <h1 className='text-4xl mb-2 font-bold'>{heading}</h1>
      <p className='text-muted-foreground'>{subHeading}</p>
    </div>
  )
}

export default AuthLayout
