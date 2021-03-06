import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LandingPage from '../components/LandingPage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - Glask</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage/>
    </div>
  )
}
