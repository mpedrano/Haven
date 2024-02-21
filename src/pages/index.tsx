import AdoptBtn from "@/components/AdoptBtn";
import LearnMoreBtn from "@/components/LearnMoreBtn";
import Head from "next/head";
import Image from "next/image";
import styles from '@/styles/Home.module.css'
import SeeMoreBtn from "@/components/seeMoreBtn";
import FeatPetCard from "@/components/featPetCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>

      <Head>
        <title>haven</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/haven-favi.svg" />
      </Head>

      <div className={styles.beforeFold}>
        <div className={styles.header}>
          <Header /></div>
        <div className={styles.foldContent}>

          <div className={styles.taglineCta}>
            <h1 className={styles.tagline}>Find Haven in Every Paw —<br />Every Heart Deserves a Home.</h1>
            <div className={styles.ctaBtns}>
              <LearnMoreBtn />
              <AdoptBtn />
            </div>
          </div>
          <Image
            src="/assets/headericons.svg"
            alt="haven vectors"
            width={550}
            height={650}
          />
        </div>
      </div>


      <div className={styles.volunteerContainer}>
        <div className={styles.volunteerImgs}>
          <Image
            src="/assets/browndog.svg"
            alt="a vector of a cute brown fluffy dog"
            width={169}
            height={211}
          />
          <Image
            className={styles.volunteerThumb}
            src="/assets/volunteerthumbnail.jpeg"
            alt="volunteer holding dog"
            width={358}
            height={380}
          />
        </div>
        <div className={styles.aboutContainer}>
          <h1 className={styles.aboutHeader}>Helping Homeless Animals <br />Find a New Home</h1>
          <p className={styles.about}>Here at Haven, we provide the basic necessities that every animal deserves, such as food, water, and shelter. We are a dedicated non-profit organization helping animals that are seeking for a safe, new family.</p>
        </div>
      </div>

      <div className={styles.featuredPetsContainer}>
        <div className={styles.featHeader}>
          <h1 className={styles.featuredPets}>Find Your New Best Friend 🐾</h1>
          <SeeMoreBtn />
        </div>
        <FeatPetCard />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </main>
  );
}
