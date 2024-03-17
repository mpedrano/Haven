import { useState } from "react";
import styles from './Header.module.css'
import Image from "next/image";
import Logo from '/public/assets/haven-yellow.svg'
import Link from "next/link";


export default function Header() {
    const [menu, setMenu] = useState(false);

    return (
        <>
            <main className={styles.main}>
                <div className={styles.container}>
                    <Image src={Logo} width={110} height={100} alt="logo" />
                    <div className={styles.links}>
                        <Link href={"/"} className={styles.animals}>animals</Link>
                        <Link href={"/faq"} className={styles.adoption}>adoption</Link>
                        <Link href={"/resources"} className={styles.resources}>resources</Link>
                    </div>
                    <div className={styles.mobile}>
                        <Image src={"/assets/menu.svg"} alt="menu" width={30} height={30} onClick={() => setMenu(true)} />
                    </div>
                    {
                        menu === true ?
                            <div className={styles.openMenu}>
                                <Link className={styles.link} href="/">animals</Link>
                                <Link className={styles.link} href="/faq">adoption</Link>
                                <Link className={styles.link} href="/resources">resources</Link>
                            </div> :
                            <></>
                    }
                </div>
            </main>
        </>
    )

}