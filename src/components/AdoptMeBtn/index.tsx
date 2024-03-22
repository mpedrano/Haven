import styles from './AdoptMeBtn.module.css'
import { useRouter } from 'next/router'

export default function AdoptBtn() {
    const router = useRouter();
    return (
        <button className={styles.btn} onClick={() => router.push('/application')}>Adopt Me</button>
    )
}