// Cats.tsx
import React, { useEffect, useState } from 'react';
import styles from '@/styles/Cats.module.css';
import CatPetCard from '@/components/CatPetCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import axios from 'axios';

export default function Cats() {
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
                    <h1 className={styles.title}>Your Feline Friend is Awaiting</h1>
                    <div className={styles.filters}>
                        <div className={styles.buttons}>
                            <button className={styles.allDogs}>All Dogs</button>
                            <button className={styles.allCats}>All Cats</button>
                            <button className={styles.other}>Other</button>
                        </div>

                    </div>
                </div>

                <div className={styles.petCards}>
                    <CatPetCard />
                </div>
            </main>
            <div className={styles.footer}>
                <Footer />
            </div>
        </>
    );
}
