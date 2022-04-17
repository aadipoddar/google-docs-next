import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Docs</title>
        <meta name='description' content='Google Docs Clone with Next JS' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
    </div>
  )
}
