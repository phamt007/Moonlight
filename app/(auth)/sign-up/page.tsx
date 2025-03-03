import AuthForm from '@/app/components/AuthForm'

const SignUp = async () => {
  return (
    <section className="flex-center size-full max-sm:px-6: dark:bg-black-1">
        <AuthForm type="sign-up" />
    </section>
  )
}

export default SignUp