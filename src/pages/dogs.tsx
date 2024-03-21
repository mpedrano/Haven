
import styles from '@/styles/Dogs.module.css'
import DogPetCard from '@/components/DogPetCard'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Dogs() {
    return (
        <>
            <div className={styles.header}>
                <Header />
            </div>
            <main className={styles.main}>

                <div>
                    <h1 className={styles.title}>Your Feline Friend is Awaiting</h1>
                    <div className={styles.filters}>
                        <div className={styles.buttons}>
                            <button className={styles.allDogs}>All Dogs</button>
                            <button className={styles.allCats}>All Cats</button>
                            <button className={styles.other}>Other</button>
                        </div>
                        <div >
                            <select className={styles.dropdown} name="cats" id="cats">
                                <option value="ragdoll">Ragdoll</option>
                                <option value="siamese">Siamese</option>
                                <option value="persian">Persian</option>
                                <option value="shorthair">Shorthair</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    <DogPetCard />
                </div>

            </main>
            <div className={styles.footer}>
                <Footer />
            </div>
        </>)
}

