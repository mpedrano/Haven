import styles from "./FeatPetCard.module.css";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";

export default function FeatPetCard() {
    const [dogs, setDogs] = useState<IDog[]>([]);
    const [accessToken, setAccessToken] = useState<string>("");
    const apiKey = process.env.NEXT_PUBLIC_PETFINDER_API;
    const secret = process.env.NEXT_PUBLIC_SECRET;

    useEffect(() => {
        const fetchToken = async () => {
            try {
                if (!apiKey || !secret) {
                    throw new Error("credentials missing");
                };

                const response = await axios.post("https://api.petfinder.com/v2/oauth2/token", {
                    grant_type: "client_credentials",
                    client_id: apiKey,
                    client_secret: secret
                });

                setAccessToken(response.data.access_token);
            } catch (error) {
                console.error(error);
            }
        }
        fetchToken();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (accessToken) {
                    let dogData: IDog[] = [];
                    let page = 1;

                    while (dogData.length < 8 && page <= 100) {
                        const url = `https://api.petfinder.com/v2/animals?type=dog&page=${page}`;
                        const response = await axios.get(url, {
                            headers: {
                                "Authorization": "Bearer " + accessToken
                            }
                        });

                        const dogPhotos = response.data.animals.filter((dog: IDog) => dog.photos.length > 0);
                        dogData = [...dogData, ...dogPhotos];
                        page++;
                    }

                    setDogs(dogData.slice(0, 8));
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [accessToken]);

    return (
        <div className={styles.featuredPetsGrid}>
            {dogs.map((dog: IDog, index: number) => (
                <div key={index} className={`card ${styles.card} bg-white shadow-l`}>
                    <figure>
                        <img src={dog.photos[0].medium} alt={dog.name} />
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
                                    <p>{dog.contact.address.city}</p>
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