import AuthForm from '@/app/components/AuthForm'

const SignIn = () => {
  return (
    <section className="flex-center size-full max-sm:px-6: dark:bg-black-1">
        <AuthForm type="sign-in" />
    </section>
  )
}

export default SignIn