import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { fetchAccessToken } from '@/hooks/fetchAccessToken';
import axios from 'axios';
import styles from '@/styles/AnimalInfo.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdoptMeBtn from '@/components/AdoptMeBtn';

export default function AnimalInfo() {
    const router = useRouter();
    const { id } = router.query;
    const [data, setData] = useState<IAnimal | null>(null);
    const accessToken = fetchAccessToken();

    useEffect(() => {
        const fetchData = async () => {
            if (!accessToken) return;
            try {
                const url = `https://api.petfinder.com/v2/animals/${id}`;
                const response = await axios.get(url, {
                    headers: {
                        "Authorization": "Bearer " + accessToken
                    }
                });

                setData(response.data.animal);

            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [id, accessToken]);

    return (
        <>
            <div className={styles.header}>
                <Header />
            </div>
            <div className={styles.main}>
                <h1 className={styles.title}>Find Your New Best Friend 🐾</h1>
                {data && (
                    <div className={styles.container}>
                        <img src={data.photos[0].medium} alt={data.name} className={styles.img} />
                        <div className={styles.text}>
                            <h1 className={styles.name}>{data.name}</h1>
                            <div className={styles.info}>
                                <div className={styles.iconsInfo}>
                                    <Image
                                        src="/card/location.svg"
                                        alt="Location Icon"
                                        width={20}
                                        height={20}
                                    />
                                    <p className={styles.city}>{data.contact.address.city}</p>
                                </div>
                                <div className={styles.iconsInfo}>
                                    <Image
                                        src="/card/age.svg"
                                        alt="Age Icon"
                                        width={20}
                                        height={20}
                                    />
                                    <p className={styles.age}>Age: {data.age}</p>
                                </div>
                                <div className={styles.iconsInfo}>
                                    <Image
                                        src="/card/gender.svg"
                                        alt="Gender Icon"
                                        width={20}
                                        height={20}
                                    />
                                    <p className={styles.gender}>Gender: {data.gender}</p>
                                </div>
                            </div>
                            <p className={styles.description}>{data.description}</p>
                            <AdoptMeBtn />
                        </div>
                    </div>
                )}
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </>
    );
}