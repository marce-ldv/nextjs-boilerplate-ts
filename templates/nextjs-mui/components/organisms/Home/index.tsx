import { Button } from '@atoms/Button'
import { styles } from '@organisms/Home/styles'

const HomeOrganism = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Boilerplate <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <Button>Click me</Button>
    </main>
  )
}

export default HomeOrganism
