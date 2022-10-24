import type { NextPage } from 'next'
import Head from 'next/head'
import { DefaultLayout } from '@components/Layouts'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Boilerplate Next App</title>
        <meta name="description" content="Next.js boilerplate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultLayout>Lorem ipsum dolor sit amet, consectetur.</DefaultLayout>
    </div>
  )
}

export default Home
