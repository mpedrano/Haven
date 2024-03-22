// Cats.tsx
import React, { useEffect, useState } from 'react';
import styles from '@/styles/Other.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import axios from 'axios';
import OtherPetCard from '@/components/OtherPetCard';

export default function Other() {
    const [breeds, setBreeds] = useState<string[]>([]);

    useEffect(() => {
        const fetchBreeds = async () => {
            try {
                const response = await axios.get('https://api.petfinder.com/v2/types/cat/breeds');
                const breedList = response.data.breeds.map((breed: any) => breed.name);
                setBreeds(breedList);
            } catch (error) {
                console.error(error);
            }
        };
        fetchBreeds();
    }, []);

    return (
        <>
            <div className={styles.header}>
                <Header />
            </div>
            <main className={styles.main}>
                <div>
                    <h1 className={styles.title}>Your New Best Friend is Awaiting</h1>
                    <div className={styles.filters}>
                        <div className={styles.buttons}>
                            <a href={"/"} className={styles.allDogs}>All Dogs</a>
                            <a href={"/cats"} className={styles.allCats}>All Cats</a>
                            <a href={"/otherpets"} className={styles.other}>Other</a>
                        </div>

                    </div>
                </div>

                <div className={styles.petCards}>
                    <OtherPetCard />
                </div>
            </main>
            <div className={styles.footer}>
                <Footer />
            </div>
        </>
    );
}
