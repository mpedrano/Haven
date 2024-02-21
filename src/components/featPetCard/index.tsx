import styles from "@/components/featPetCard/featPetCard.module.css";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";

export default function FeatPetCard() {
    const [dogs, setDogs] = useState<IDog[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const apiKey = process.env.NEXT_PUBLIC_PETFINDER_API;
        const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
        const totalPages = 100;

        const fetchDogs = async () => {
            try {
                const randomPage = Math.floor(Math.random() * totalPages) + 1;
                const url = `https://api.petfinder.com/v2/animals?type=dog&page=${randomPage}`;

                const response = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                    params: {
                        api_key: apiKey,
                    },
                });

                const dogData: IDog[] = response.data.animals.map((animal: any) => ({
                    name: animal.name,
                    gender: animal.gender,
                    age: animal.age,
                    location: animal.contact.address.city,
                    image: animal.photos[0]?.medium,
                }));

                const dogsWithImages = dogData.filter((dog) => dog.image);
                setDogs(dogsWithImages.slice(0, 8));
                setLoading(false);
            } catch (error) {
                console.error("Error fetching dogs:", error);
            }
        };

        fetchDogs();
    }, []);

    return (
        <div className={styles.featuredPetsGrid}>
            {!loading &&
                dogs.map((dog, index) => (
                    <div key={index} className={`card ${styles.card} bg-white shadow-l`}>
                        <figure>
                            <img src={dog.image} alt={dog.name} />
                        </figure>
                        <div className={`card-body ${styles.cardBody}`}>
                            <h2 className={styles.petName}>{dog.name}</h2>
                            <div className={styles.petContent}>
                                <div className={styles.petIcons}>
                                    <div className={styles.iconsInfo}>
                                        <Image
                                            src="/card/location.svg"
                                            alt="Location Icon"
                                            width={12}
                                            height={12}
                                        />
                                        <p>{dog.location}</p>
                                    </div>
                                    <div className={styles.iconsInfo}>
                                        <Image
                                            src="/card/gender.svg"
                                            alt="Gender Icon"
                                            width={15}
                                            height={15}
                                        />
                                        <p>{dog.gender}</p>
                                    </div>
                                    <div className={styles.iconsInfo}>
                                        <Image
                                            src="/card/age.svg"
                                            alt="Age Icon"
                                            width={15}
                                            height={15}
                                        />
                                        <p>{dog.age}</p>
                                    </div>
                                </div>
                                <div className="card-actions">
                                    <button className={styles.adoptBtn}>Adopt Me</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
}
