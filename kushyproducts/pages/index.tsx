import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "./Banner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kushy Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
    </>
  );
}
