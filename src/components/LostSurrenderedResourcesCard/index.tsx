import styles from "@/components/LostSurrenderedResourcesCard/LostSurrenderedResourcesCard.module.css";
import Image from "next/image";
import Arrow from '/public/assets/arrow.svg'


export default function LostSurrenderedResourcesCard() {
    return(
        <main>
            <div className={styles.card}>
                <div className={styles.cardBody}>
                    <h2 className={styles.cardTitle}>Lost & Surrendered</h2>
                    <p className={styles.details}>Find information about lost and surrendered animals and learn how you can help</p>
                    <div className={styles.bottom}>
                    <Image src={Arrow} width={25} height={15} alt="arrow" />
                    </div>
                </div>
            </div>
        </main>
    )
}