import Head from 'next/head'
import Header from "../components/Header"
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Link from 'next/link'
// import { Carousel } from 'react-responsive-carousel'

export default function Home() {
  return (
    <>
      <Head>
        <title>Project Beach Utah</title>
      </Head>
      <Header />
        <section className='content-section'>
        <h1 className="title title-large">Project Beach Utah</h1>
          <h2 className='content'>PBU is Utah's first Pro-Level Beach Volleyball Organization, created to suppor the growth of the sport locally & nationally. (this is not the offical website)</h2>
        </section>
       {/* <Carousel /> */}
       <Footer />
    </>
  )
}
