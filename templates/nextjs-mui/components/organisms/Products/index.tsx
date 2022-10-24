import { LoginForm } from '@components/forms/login'
import { styles } from '@organisms/Login/styles'

export const LoginOrganism = () => {
  return (
    <section className={styles.container}>
      <LoginForm />
    </section>
  )
}

