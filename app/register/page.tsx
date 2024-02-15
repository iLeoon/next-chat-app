import RegisterForm from '@/components/AuthForms/RegisterForm'

function RegisterPage() {
  return (
    <main className="container mx-auto px-5 flex items-center justify-center min-h-screen flex-col gap-10 text-white">
      <h3 className="text-4xl sm:text-5xl font-semibold text-center">
        Register
      </h3>
      <RegisterForm />
    </main>
  )
}

export default RegisterPage
