import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MainContent from './MainContent'
import { content } from '../assets/text'

export default function Home() {

    return (
        <div className={styles.container}>
            <Head>
                <title>Kushy Products</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainContent content={content} id={2}/>
        </div>
    )
}
