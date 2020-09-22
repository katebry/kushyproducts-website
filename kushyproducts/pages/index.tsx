import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "./Banner";
import Header from "./Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kushy Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
    </div>
  );
}
