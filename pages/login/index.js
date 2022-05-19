import styles from './login.module.css'

import Image from 'next/image'

import Astro from '../../public/svg/astro.svg'
import Google from '../../public/img/google.png'

export default function Login(){
    return(
        <div className={styles.login}>
            <div className={styles.loginLeft}>
                <Image src={Astro} alt='astro' />
            </div>
            <div className={styles.loginRight}>
                <div className={styles.loginContainer}>
                    <h2 className={styles.title}>Log In</h2>
                    <div className={styles.googleLogin}>
                        <div>
                            <Image src={Google} alt='google' width='30' height='30' />
                        </div>
                        <div>
                            <h4>Sign in with google</h4>
                        </div>
                    </div>
                    <form>
                        <div className={styles.loginEmail}>
                            <small>email/phone</small>
                            <input type='email' />
                        </div>
                        <div className={styles.loginPassword}>
                            <small>password</small>
                            <input type='password' />
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}