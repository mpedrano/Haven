import styles from "@/components/AnimalCareResourcesCard/AnimalCareResourcesCard.module.css";
import Image from "next/image";
import Arrow from '/public/assets/arrow.svg'


export default function AnimalCareResourcesCard() {
    return(
        <main>
            <div className={styles.card}>
                <div className={styles.cardBody}>
                    <h2 className={styles.cardTitle}>Animal Care</h2>
                    <p className={styles.details}>Discover helpful resources for taking care of your animals</p>
                    <div className={styles.bottom}>
                    <Image src={Arrow} width={25} height={15} alt="arrow" />
                    </div>
                </div>
            </div>
        </main>
    )
}