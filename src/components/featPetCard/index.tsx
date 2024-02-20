import styles from "@/components/featPetCard/featPetCard.module.css";
import Image from "next/image";

export default function FeatPetCard() {
    return (
        <div className={`card ${styles.card} bg-white shadow-l`}>
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="pet" /></figure>
            <div className={`card-body ${styles.cardBody}`}>
                <h2 className={styles.petName}>Pet name</h2>
                <div className={styles.petContent}>
                <div className={styles.petIcons}>
                    <div className={styles.iconsInfo}>
                        <Image
                        src="/card/location.svg"
                        alt="a vector of a cute brown fluffy dog"
                        width={12}
                        height={12}
                        />
                        <p>km away</p>
                    </div>
                    <div className={styles.iconsInfo}>
                        <Image
                        src="/card/gender.svg"
                        alt="a vector of a cute brown fluffy dog"
                        width={15}
                        height={15}
                        />
                        <p>gender</p>
                    </div>
                    <div className={styles.iconsInfo}>
                        <Image
                        src="/card/age.svg"
                        alt="a vector of a cute brown fluffy dog"
                        width={15}
                        height={15}
                        />
                        <p> _ years old</p>
                    </div>
                </div>
                <div className="card-actions">
                    <button className={styles.adoptBtn}>Adopt Me</button>
                </div>
                </div>
            </div>
        </div>
    )
}
