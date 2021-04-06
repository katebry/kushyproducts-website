import styles from '../styles/Home.module.css'
import MainContent from './MainContent'
import InfoBar from './InfoBar'

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.mainContent}>
                <MainContent />
            </div>
            <div className={styles.infoBar}>
                <InfoBar />
            </div>
        </div>
    )
}
