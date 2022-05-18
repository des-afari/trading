import Link from 'next/link'
import styles from './header.module.css'


const Header = () => {
  return (
    <header className={styles.header}>
        <div>
            <Link href='/'>
                <a>STOCK X</a>
            </Link>
        </div>
        <nav>
            <Link href=''>
                <a><small>LOG IN</small></a>
            </Link>
            <Link href='/'>
                <a><small>GET STARTED</small></a>
            </Link>
        </nav>
    </header>
  )
}

export default Header