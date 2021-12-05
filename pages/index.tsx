import styles from "../styles/Home.module.css";
import HeaderButtons from "./HeaderButtons";
import MainContent from "./MainContent";
import InfoBar from "./InfoBar";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.buttons}>
          <HeaderButtons />
        </div>
        <div className={styles.mainContent}>
          <MainContent />
        </div>
        <div className={styles.infoBar}>
          <InfoBar />
        </div>
      </div>
    </>
  );
}
