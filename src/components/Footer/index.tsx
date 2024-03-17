import styles from './Footer.module.css'
import Link from 'next/link'
import Logo from '/public/assets/haven-yellow.svg'
import Image from 'next/image'

export default function Footer() {
    return (
        <>
            <main className={styles.main}>

                <div className={styles.container}>
                    <div className={styles.overLine}>
                        <div className={styles.contact}>
                            <p className={styles.findUs}>find us!</p>
                            <p className={styles.address}>3700 Willingdon Ave, <br></br> Burnaby, BC V5G 3H2 <br></br> havensupport@gmail.com</p>
                        </div>

                        <div className={styles.links}>
                            <Link href={"/"} className={styles.animals}>animals</Link>
                            <Link href={"/"} className={styles.adoption}>adoption</Link>
                            <Link href={"/"} className={styles.resources}>resources</Link>
                        </div>
                    </div>
                    <hr className={styles.line}></hr>
                    <div className={styles.belowLine}>
                        <p>© 2024 haven. all rights reserved.</p>
                        <Image src={Logo} width={100} height={100} alt="logo" />
                        <div className={styles.terms}>
                            <p>terms of service</p>
                            <p>privacy policy</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}