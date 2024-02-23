import styles from "@/components/FeatResourceCard/FeatResourcesCard.module.css";

export default function FeatResourceCard() {
  return (
    <div className={`card shadow-xl ${styles.card}`}>
      <figure>
        <img src="/assets/catthumb.jpeg" alt="Shoes" />
      </figure>
      <div className={`card-body shadow-l ${styles.cardBody}`}>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>Cat Grooming</h2>
          <div className={styles.badges}>
            <p className="badge badge-secondary">Health</p>
            <p className="badge badge-secondary">Novice</p>
          </div>
        </div>
        <p className={styles.desc}>Explore expert tips and techniques for ensuring your cat's well-being through proper grooming practices, fostering a healthy and happy feline companion.</p>
      </div>
    </div>
  );
}
