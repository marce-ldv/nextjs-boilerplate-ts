import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button } from '../components/atoms/Button'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJs + TS + Styled Components + Tests</title>
        <meta
          name="description"
          content="NextJs + TS + Styled Components + Tests boilerplate"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          NextJs + TS + Styled Components + Tests
        </h1>
        <Button
          label="this is a button"
          bgColor="red"
          color="white"
          size="large"
          upperCase
        />

        <div className={styles.grid}></div>
      </main>
    </div>
  )
}

export default Home
