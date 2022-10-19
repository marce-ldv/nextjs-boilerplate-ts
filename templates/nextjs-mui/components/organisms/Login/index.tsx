import { LoginForm } from '@components/forms/login'
import styles from './Login.module.scss'

const LoginOrganism = () => {
  return (
    <section className={styles.container}>
      <LoginForm />
    </section>
  )
}

export default LoginOrganism
