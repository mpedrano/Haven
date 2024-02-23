import styles from "@/components/AnimalCareResourcesCard/AnimalCareResourcesCard.module.css";
import Image from "next/image";
import Arrow from '/public/assets/arrow.svg'
import { useRouter } from "next/router";

export default function AdoptionResourcesCard() {
    const router = useRouter();

    return (
        <main>
            <div className={styles.card} onClick={() => router.push('../../faq')}>
                <div className={styles.cardBody}>
                    <h2 className={styles.cardTitle}>Adoption</h2>
                    <p className={styles.details}>Learn about the adoption process and find useful resources for adopting a pet</p>
                    <div className={styles.bottom}>
                        <Image src={Arrow} width={25} height={15} alt="arrow" />
                    </div>
                </div>
            </div>
        </main>
    )
}