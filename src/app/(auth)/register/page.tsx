import RegisterForm from "@/components/form/register-form"
import AuthLayout from "@/components/general/auth-layout"

const RegisterPage = () => {
  return (
    <main className='h-screen flex flex-col justify-center items-center '>
      <AuthLayout
        ui='register'
        heading='Join StartupDeals'
        subHeading='Create your account to access exclusive startup discounts'
      >
        <RegisterForm />
      </AuthLayout>
    </main>
  )
}

export default RegisterPage
