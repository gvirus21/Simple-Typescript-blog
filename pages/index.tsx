import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { HeroSection, Profile, Projects, Footer } from '../components'

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />

      <Profile />
      <Projects />
      <Footer/>
    </>
  )
}

export default Home
