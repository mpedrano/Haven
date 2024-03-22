import styles from "@/components/OtherPetCard/OtherPetCard.module.css";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

export default function OtherPetCard() {
    const router = useRouter();
    const [animals, setAnimals] = useState<IAnimal[]>([]);
    const [accessToken, setAccessToken] = useState<string>("");
    const [selectedBreed, setSelectedBreed] = useState<string>("");
    const [breeds, setBreeds] = useState<string[]>([]);
    const [page, setPage] = useState<number>(1); // Track current page
    const [loading, setLoading] = useState<boolean>(false); // Track loading state
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
        const fetchBreeds = async () => {
            try {
                if (accessToken) {
                    const response = await axios.get("https://api.petfinder.com/v2/types/animals/breeds", {
                        headers: {
                            "Authorization": "Bearer " + accessToken
                        }
                    });

                    const breedList = response.data.breeds.map((breed: any) => breed.name);
                    setBreeds(breedList);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchBreeds();
    }, [accessToken]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (accessToken) {
                    setLoading(true);
                    const url = `https://api.petfinder.com/v2/animals?type=bird&&rabbit&&fish&page=${page}${selectedBreed ? `&breed=${selectedBreed}` : ''}`;
                    const response = await axios.get(url, {
                        headers: {
                            "Authorization": "Bearer " + accessToken
                        }
                    });

                    const animalPhotos = response.data.animals.filter((animal: IAnimal) => animal.photos.length > 0);

                    setAnimals(prevAnimals => [...prevAnimals, ...animalPhotos]);
                    setLoading(false);
                }
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        }
        fetchData();
    }, [accessToken, selectedBreed, page]);


    const handleBreedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedBreed(e.target.value);
    };

    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    const handleClick = (id: number) => {
        router.push(`/${id}`);
    }

    return (
        <div>
            <div className={styles.dropdown}>
                <select className={styles.select} onChange={handleBreedChange} value={selectedBreed}>
                    <option value="all">All Breeds</option>
                    {breeds.map((breed, index) => (
                        <option key={index} value={breed}>{breed}</option>
                    ))}
                </select>
            </div>
            <div className={styles.featuredPetsGrid}>
                {animals.map((animal: IAnimal, index: number) => (
                    <div key={index} className={`card ${styles.card} bg-white shadow-l`} onClick={() => handleClick(animal.id)}>
                        <figure>
                            <img src={animal.photos[0].medium} alt={animal.name} />
                        </figure>
                        <div className={`card-body ${styles.cardBody}`}>
                            <h2 className={styles.petName}>{animal.name}</h2>
                            <div className={styles.petContent}>
                                <div className={styles.petIcons}>
                                    <div className={styles.iconsInfo}>
                                        <Image
                                            src="/card/location.svg"
                                            alt="Location Icon"
                                            width={12}
                                            height={12}
                                        />
                                        <p>{animal.contact.address.city}</p>
                                    </div>
                                    <div className={styles.iconsInfo}>
                                        <Image
                                            src="/card/gender.svg"
                                            alt="Gender Icon"
                                            width={15}
                                            height={15}
                                        />
                                        <p>{animal.gender}</p>
                                    </div>
                                    <div className={styles.iconsInfo}>
                                        <Image
                                            src="/card/age.svg"
                                            alt="Age Icon"
                                            width={15}
                                            height={15}
                                        />
                                        <p>{animal.age}</p>
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
            {loading ? (
                <p className={styles.loading} >Loading...</p>
            ) : (
                <div className={styles.loadContainer}>
                    <button className={styles.loadMore} onClick={handleLoadMore}>Load More</button>
                </div>
            )}
        </div>
    );
}
