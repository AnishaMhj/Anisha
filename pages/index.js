import Head from 'next/head'
import About from '../componenets/About'
import Header from '../componenets/Header'
import Intro from '../componenets/Intro'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anisha Maharjan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Intro />
      <About />
    </div>
  )
}
