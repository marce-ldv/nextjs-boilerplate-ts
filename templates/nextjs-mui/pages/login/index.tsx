import Head from 'next/head'
// import dynamic from 'next/dynamic'
import { LoginOrganism } from '@components/organisms/Login'
// const LoginOrganism = dynamic(
//   () => import('../../components/organisms/Login'),
//   { ssr: false }
// )

const Login = () => {
  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <LoginOrganism />
      </section>
    </div>
  )
}

export default Login
