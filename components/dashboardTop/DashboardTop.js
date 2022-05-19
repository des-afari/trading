import Link from 'next/link'
import Image from 'next/image'

import styles from './dashboardTop.module.css'

import Search from '../../public/svg/search.svg'

const DashboardTop = () => {
  return (
    <div className={styles.dashboardTop}>
      <nav>
        <Link href='/'>
          <a>Market</a>
        </Link>
        <Link href='/'>
          <a>Transactions</a>
        </Link>
        <Link href='/'>
          <a>Watchlist</a>
        </Link>
      </nav>
      <form>
        <Image src={Search} alt='search' />
        <input type='text' placeholder='Search' />
      </form>
      <div className={styles.profileContainer}>
        <div className={styles.info}>
          <small>John Travioli</small>
          <small>john.travioli@gmail.com</small>
        </div>
        <div className={styles.profile}>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default DashboardTop