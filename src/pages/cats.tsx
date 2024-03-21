
import styles from '@/styles/Cats.module.css'
import FeatPetCard from '@/components/featPetCard'
import CatPetCard from '@/components/CatPetCard'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Cats() {
    return (
        <>
            <main className={styles.main}>
                <Header />
                <div>
                    <CatPetCard /></div>
                <Footer />
            </main>
        </>)
}

