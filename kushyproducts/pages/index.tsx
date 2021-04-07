import styles from "../styles/Home.module.css";
import HomeButton from "./HomeButton";
import ContactButton from "./ContactButton";
import MainContent from "./MainContent";
import InfoBar from "./InfoBar";
import AboutText from "./AboutText";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.home}>
          <HomeButton />
        </div>
        <div className={styles.contact}>
          <ContactButton />
        </div>
        <div className={styles.mainContent}>
          <MainContent />
        </div>
        <div className={styles.infoBar}>
          <InfoBar text="Kushy is the new kid on the block." />
        </div>
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.aboutText}>
          <AboutText text="We make glorious bath bombs, soaps and more so you can relax, unwind and soak up some all natural botanical bliss!" />
        </div>
      </div>
    </>
  );
}
