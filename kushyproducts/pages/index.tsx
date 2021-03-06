import styles from "../styles/Home.module.css";
import HomeButton from "./HomeButton";
import ContactButton from "./ContactButton";
import MainContent from "./MainContent";
import InfoBar from "./InfoBar";
import AboutText from "./AboutText";
import SoapImage from "./SoapImage";
import Form from "./Form";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.buttons}>
          <HomeButton />
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
          <AboutText />
        </div>
        <div className={styles.soapImage}>
          <SoapImage />
        </div>
        <div className={styles.form}>
          <Form />
        </div>
      </div>
    </>
  );
}
