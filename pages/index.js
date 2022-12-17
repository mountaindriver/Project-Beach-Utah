import Head from 'next/head'
import Header from "../components/Header"
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Project Beach Utah</title>
    </Head>
    <Header />
    <section>
      <h1>Home Page</h1>
      <section>
       Jumbotron
      </section>
    </section>
  </>
  )
}
