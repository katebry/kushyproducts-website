import styles from '../styles/Home.module.css'
import MainContent from './MainContent'

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.mainContent}>
                <MainContent />
            </div>
        </div>
    )
}
