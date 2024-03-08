import { useState } from "react";
import styles from './Header.module.css'
import Image from "next/image";
import Logo from '/public/assets/haven-yellow.svg'
import Link from "next/link";


export default function Header() {


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
                </div>
            </main>
        </>
    )

}