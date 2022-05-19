import DashboardTop from '../../components/dashboardTop/DashboardTop'
import styles from './dashboard.module.css'

export default function Dashboard(){
    return(
        <>
            <DashboardTop />
            <div className={styles.dashboard}>
                
            </div>
       </>
    )
}