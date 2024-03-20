import styles from "@/components/ContactCard/ContactCard.module.css";

export default function ContactCard() {
    return(
        <div className={styles.contactCard}>
            <h1>Contact an Animal Specialist</h1>
            <div className={styles.inputContainer}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message"></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Submit</button>
        </div>
    );
}
