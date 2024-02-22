import styles from "@/components/DonationResourcesCard/DonationResourcesCard.module.css";
import Image from "next/image";
import Arrow from '/public/assets/arrow.svg'


export default function DonationResourcesCard() {
    return(
        <main>
            <div className={styles.card}>
                <div className={styles.cardBody}>
                    <h2 className={styles.cardTitle}>Donation</h2>
                    <p className={styles.details}>Help support our cause by donating to a charity of your choice</p>
                    <div className={styles.bottom}>
                    <Image src={Arrow} width={25} height={15} alt="arrow" />
                    </div>
                </div>
            </div>
        </main>
    )
}