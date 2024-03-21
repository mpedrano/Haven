import AdoptBtn from "@/components/AdoptBtn";
import LearnMoreBtn from "@/components/LearnMoreBtn";
import Head from "next/head";
import Image from "next/image";
import styles from '@/styles/Home.module.css'
import SeeMoreBtn from "@/components/seeMoreBtn";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatResourceCard from "@/components/FeatResourceCard";

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
        <header className={styles.header}>
          <Header />
        </header>
        <div className={styles.foldContent}>

          <div className={styles.taglineCta}>
            <h1 className={styles.tagline}>Find Haven in Every Paw —<br />Every Heart Deserves a Home.</h1>
            <div className={styles.ctaBtns}>
              <LearnMoreBtn />
              <AdoptBtn />
            </div>
          </div>
          <Image
            className={styles.headericons}
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
            className={styles.browndog}
            src="/assets/browndog.svg"
            alt="a vector of a cute brown fluffy dog"
            width={169}
            height={211}
          />
          <Image
            className={styles.volunteerThumb}
            src="/assets/volunteerthumbnail.jpeg"
            alt="volunteer holding dog"
            width={169}
            height={211}
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

      </div>

      <div className={styles.volunteer2Container}>
        <div className={styles.supportContainer}>
          <h1 className={styles.supportHeader}>Support Our Cause: Giving<br />Hope, One Paw at a Time.</h1>
          <p className={styles.support}>Your donations help provide vital essentials for the animals at Haven, ensuring they receive the love, care, and support they need. With your help, we can create a haven of comfort, warmth, and well—being for our cuddly friends awaiting their future homes.</p>
        </div>
        <div className={styles.supportImgs}>
          <Image
            className={styles.supportThumb}
            src="/assets/volunteerthumb.jpeg"
            alt="volunteer holding dog"
            width={358}
            height={380}
          />
          <Image
            className={styles.supportDog}
            src="/assets/dogvector.svg"
            alt="a vector of a cute brown fluffy dog"
            width={217}
            height={121}
          />
        </div>
      </div>

      <div className={styles.featResourceContainer}>
        <div className={styles.featResourceHeader}>
          <h1 className={styles.featuredPets}>Discover more tips and resources below!</h1>
          <SeeMoreBtn />
        </div>
        <div className={styles.featResourceCard}>
          <FeatResourceCard />
          <FeatResourceCard />
          <FeatResourceCard />
        </div>
      </div>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </main>
  );
}
