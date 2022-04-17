import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Docs</title>
        <meta name='description' content='Google Docs Clone with Next JS' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1 className='text-3xl font-bold underline'>
        Google Docs!
      </h1>
    </div>
  )
}
