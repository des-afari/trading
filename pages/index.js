import Header from "../components/header/Header"
import styles from './index.module.css'
import Image from 'next/image'
import Link from 'next/link'

import Astronaut from '../public/svg/astronaut.svg'

export default function Home() {
  return (
    <>
      <Header />
      <section className={styles.index}>
        <div className={styles.indexLeft}>
          <h1>The easiest way to invest in the ghana stock exchange</h1>
          <Link href='/'>
            <a>Get Started</a>
          </Link>
        </div>
        <div className={styles.indexRight}>
          <Image src={Astronaut} alt='astronaut'></Image>
        </div>
      </section>
    </>
  )
}
