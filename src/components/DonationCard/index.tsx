import styles from './DonationCard.module.css'
import { useState, useEffect } from "react";
import axios from "axios";

export default function DonationCard() {
    const [charityData, setCharityData] = useState<INonprofit[]>([]);
    const [selected, setSelected] = useState<string>("");
    const [activeTab, setActiveTab] = useState<number>(1);
    const [amount, setAmount] = useState<number>();
    const [frequency, setFrequency] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const apiKey = process.env.NEXT_PUBLIC_API;
    const url = `https://partners.every.org/v0.2/browse/animals?apiKey=${apiKey}`;

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(url);
            setCharityData(response.data.nonprofits);
        }

        fetchData()
            .catch
    }, [])

    const handleTab = (tab: number) => {
        setActiveTab(tab);
    };

    const handleSelection = (charity: string) => {
        setSelected(charity);
    }

    const description = charityData.find((charity) => charity.name === selected)?.description;

    const handleDonate = () => {
        const donateLink = `https://www.every.org/${selected}?amount=${amount}&frequency=${frequency}&first_name=${firstName}&last_name=${lastName}&email=${email}#donate`;
        window.location.href = donateLink;
    }

    return (
        <div className={styles.container}>
            <div className={styles.tabs}>
                <button onClick={() => handleTab(1)} >{activeTab === 1 ? <strong>Donation</strong> : "Donation"}</button>
                <button onClick={() => handleTab(2)}>{activeTab === 2 ? <strong>Charity</strong> : "Charity"}</button>
                <button onClick={() => handleTab(3)}>{activeTab === 3 ? <strong>Information</strong> : "Information"}</button>
            </div>
            <div>
                {activeTab === 1 &&
                    <div className={styles.tabcontainer}>
                        <div>
                            <div className={styles.label}>Choose an amount:</div>
                            <label className="input input-bordered flex items-center gap-2">
                                $
                                <input
                                    type="number"
                                    className="grow"
                                    placeholder="0.00"
                                    value={amount}
                                    onChange={(event) => setAmount(parseFloat(event.target.value))}
                                />
                                <span>CAD</span>
                            </label>
                        </div>
                        <div>
                            <div className={styles.label}>How often would you like to donate?</div>
                            <div className={styles.frequency}>
                                <button
                                    onClick={() => setFrequency("ONCE")}
                                    className={`${styles.button} ${frequency === "ONCE" ? styles.active : ""}`}
                                >
                                    One Time
                                </button>
                                <button
                                    onClick={() => setFrequency("MONTHLY")}
                                    className={`${styles.button} ${frequency === "MONTHLY" ? styles.active : ""}`}
                                >
                                    Monthly
                                </button>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <button className={styles.next} onClick={() => handleTab(2)}>Next</button>
                        </div>
                    </div>
                }
                {activeTab === 2 &&
                    <div className={styles.tabcontainer}>
                        <div>
                            <div className={styles.label}>Select a charity:</div>
                            <select className="select select-bordered w-full max-w-xs" onChange={(event) => handleSelection(event.target.value)}>
                                <option disabled selected>Charities</option>
                                {charityData.map((nonprofit) => (
                                    <option key={nonprofit.ein} value={nonprofit.ein}>
                                        {nonprofit.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {selected && (
                            <div>{description}</div>
                        )}
                        <div className={styles.nav}>
                            <button className={styles.back} onClick={() => handleTab(1)}>Back</button>
                            <button className={styles.next} onClick={() => handleTab(3)}>Next</button>
                        </div>
                    </div>
                }
                {activeTab === 3 &&
                    <div className={styles.tabcontainer}>
                        <span>First Name</span>
                        <label className="input input-bordered flex items-center gap-2">
                            <input
                                type="text"
                                value={firstName}
                                onChange={(event) => setFirstName(event.target.value)}
                            />
                        </label>
                        <span>Last Name</span>
                        <label className="input input-bordered flex items-center gap-2">
                            <input
                                type="text"
                                value={lastName}
                                onChange={(event) => setLastName(event.target.value)}
                            />
                        </label>
                        <span>Email</span>
                        <label className="input input-bordered flex items-center gap-2">
                            <input
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </label>
                        <div className={styles.nav}>
                            <button className={styles.back} onClick={() => handleTab(2)}>Back</button>
                            <button className={styles.donate} onClick={handleDonate}>Donate</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}