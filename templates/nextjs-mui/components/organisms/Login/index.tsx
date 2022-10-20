import { LoginForm } from '@components/forms/login'
import { styles } from '@organisms/Login/styles'

const LoginOrganism = () => {
  return (
    <section className={styles.container}>
      <LoginForm />
    </section>
  )
}

export default LoginOrganism
