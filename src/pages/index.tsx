import Head from 'next/head'
import Page from '@/view'

export default function Home() {
  return (
    <>
      <Head>
        <title>CutePet</title>
        <meta name="description" content="CutePet - Sistema de Agendamentos para Petshop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
      </Head>
      <main>
        <Page />
      </main>
    </>
  )
}
