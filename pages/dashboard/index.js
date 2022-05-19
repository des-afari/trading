import DashboardTop from '../../components/dashboardTop/DashboardTop'
import styles from './dashboard.module.css'

import Link from 'next/link'

export default function Dashboard(){
    return(
        <>
            <DashboardTop />
            <div className={styles.dashboard}>
                <div className={styles.dashboardHead}>
                    <div className={styles.dashboardHeadTop}>
                        <div>
                            <h1>GH&#8373; <span className={styles.principal}>900,135.00</span></h1>
                            <small className={styles.principalChange}>GH&#8373; <span>145.00</span> (<span className={styles.percentageChange}>24</span>%)</small>
                        </div>
                    </div>
                    <div className={styles.dashboardHeadBottom}>
                        <nav>
                            <Link href='/'>
                                <a>Watchlist</a>
                            </Link>
                            <Link href='/'>
                                <a>Buy</a>
                            </Link>
                            <Link href='/'>
                                <a>Sell</a>
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
       </>
    ) 
}