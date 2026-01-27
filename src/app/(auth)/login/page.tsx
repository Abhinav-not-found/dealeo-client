import LoginForm from "@/components/form/login-form"
import AuthLayout from "@/components/general/auth-layout"

const LoginPage = () => {
  return (
    <main className='h-screen flex flex-col justify-center items-center '>
      <AuthLayout
        ui='login'
        heading='Welcome back'
        subHeading='Sign in to access exclusive startup deals'
      >
        <LoginForm />
      </AuthLayout>
    </main>
  )
}

export default LoginPage
